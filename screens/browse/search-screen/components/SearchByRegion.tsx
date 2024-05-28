import { 
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { RegionRespDto } from "../../../../api/api-contracts/user/responses/region.response";
import { capitalizeText } from "../../../../utils/string/stringUtils";
import { getAllRegions } from "../../../../api/endpoints/regionApi";
import Button from "../../../../components/buttons/button/Button";
import { getItemFromCache } from "../../../../store/cache/cache";
import { SearchByRegionSkeleton } from "./LoadingComponents";
import { REGIONS } from "../../../../store/cache/cacheKeys";
import { categories } from "../data/search-categories";
import SvgIcon from "../../../../assets/svgs/SvgIcon";
import styles from "../styles/SearchByRegionStyles";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

const SearchByRegion = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState<{
    id: number;
    name: string;
    icon: any;
  }[]| null>(null);

  const fetchRegions = async () => {
    try {
      setLoading(true);
      const regions = await getItemFromCache(REGIONS)
      if (regions) {
        const castedRegions = regions as { id: number; name: string; icon: any; }[];
        setRegions(castedRegions);
      } else {
        const resp = await getAllRegions();
        if (resp.status) {
          setRegions(resp.payload.result.regionList);
        }
      }
    } catch (error) {
      console.log("Error fetching regions", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const goToCategory = (category: string) => {
    const item = {
      type: "category",
      title: category,
      searchQuery: category.toLowerCase(),
    };
    router.push({ pathname: `/browse/searchresults`, params: item });
  };

  const renderItemOption = ({
    item,
  }: {
    item: { id: number; name: string; icon: any; };
  }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToCategory(item.name)}
    >
      <Text style={styles.card_text}>{capitalizeText(item.name)}</Text>
      <SvgIcon
        // uri={item.icon} // comment out until the data is reflected in server
        width={50}
        height={50}
      />
    </TouchableOpacity>
  );

  const requestFailed = () => {
    return (
      <View style={styles.failed}>
        <Text style={styles.failed_title}>Oops!</Text>
        <Text style={styles.failed_subtitle}>
          An error was encountered while fetching regions. We{"'"}re working on
          bringing more stores to you. 
        </Text>
        <Button onPress={fetchRegions} button_style={styles.btn}>
          <Text>Try Again</Text>
        </Button>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Loading..</Text>
        <SearchByRegionSkeleton />
      </View>
    );
  }

  if (!regions || regions.length === 0) {
    return requestFailed();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore by Region</Text>
      <FlatList
        data={regions}
        renderItem={renderItemOption}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        style={styles.grid}
        contentContainerStyle={{
          gap: 10,
        }}
      />
    </View>
  );
};

export default SearchByRegion;
