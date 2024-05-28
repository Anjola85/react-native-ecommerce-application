import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import StoreCardSkeletonLarge from "../../../components/loading/skeletons/items/StoreCardSkeletonLarge";
import { theme } from "../../../constants/theme";
import styles from "./styles/SearchResultStyles";
import SearchResultList from "./components/SearchResultList";
import searchResultData from "../search-screen/data/dummy-data";
import StoresNotFound from "./components/StoresNotFound";
import { getItemFromCache } from "../../../store/cache/cache";
import { USER_COORDINATES, STORES } from "../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { default_user_coordinates } from "../../../constants/default";
import { findNearbyBusinesses } from "../../../api/endpoints/businessApi";
import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";
import { capitalizeText } from "../../../utils/string/stringUtils";

const { height, width } = Dimensions.get("window");

const SearchResultScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchFailed, setSearchFailed] = useState(false);
  const [resultData, setResultData] =
    useState<BusinessRespDto[]>(searchResultData);
  const [userLocation, setUserLocation] = useState<LatLng>(
    default_user_coordinates
  );

  const router = useRouter();
  const item = useLocalSearchParams();

  const query = item.searchQuery;
  const queryType = item.type;
  const resultTitle = item.title;

  useEffect(() => {
    setSearchFailed(resultData.length === 0);
  }, [resultData, isLoading]);

  useEffect(() => {
    if (!query) {
      setSearchFailed(true);
      setIsLoading(false);
      return;
    }
    async function fetchData() {
      if (queryType === "search") {
        const searchQuery = query + "";
        const storeList = await getStoresNearUser();
        setResultData((_) => {
          return storeList.filter((item) => {
            const name = item?.name + "";
            return name?.toLowerCase()?.includes(searchQuery.toLowerCase());
          });
        });
      } else if (queryType === "category") {
        const filterQuery = query + "";
        const storeList = await getStoresNearUser();
        setResultData((_) => {
          return storeList.filter((item) => {
            const regions: { id: number; name: string }[] =
              item.regions.regionList;
            return regions.some((region) =>
              region.name.toLowerCase()?.includes(filterQuery.toLowerCase())
            );
          });
        });
      }
    }
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, [query]);

  const refresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getUserLocation = async function (): Promise<LatLng> {
    const cood = (await getItemFromCache(USER_COORDINATES)) as LatLng;
    if (cood) {
      setUserLocation(cood);
      return cood;
    }
    return default_user_coordinates;
  };

  const getStoresNearUser = async function (): Promise<BusinessRespDto[]> {
    const userLocation = await getUserLocation();
    const response = await findNearbyBusinesses(userLocation);
    let stores: BusinessRespDto[] = [];
    if (response?.status) {
      stores = response.payload.result.businessList as BusinessRespDto[];
    } else stores = (await getItemFromCache(STORES)) as BusinessRespDto[];
    return stores;
  };

  const getPageTitle = (): string => {
    if (!resultTitle || !queryType) {
      return "Search Results";
    }
    switch (queryType) {
      case "category":
        return capitalizeText(new String(resultTitle) + "");
      case "search":
        return capitalizeText(new String(resultTitle) + "");
    }
    return "Search Results";
  };

  const navigateToSearchScreen = () => {
    router.push("/(tabs)/search");
  };

  const navigateBack = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loading_container}>
        <View style={styles.result_header}>
          <AntDesign
            name="arrowleft"
            size={32}
            color={theme.colors.black}
            onPress={() => navigateBack()}
            style={styles.back_icon}
          />
          <Text style={styles.page_title}>{getPageTitle()}</Text>
        </View>
        <View style={styles.loading_skelteton_container}>
          <StoreCardSkeletonLarge style={{ marginBottom: 20 }} />
          <StoreCardSkeletonLarge style={{ marginBottom: 20 }} />
          <StoreCardSkeletonLarge style={{ marginBottom: 20 }} />
          <StoreCardSkeletonLarge style={{ marginBottom: 20 }} />
        </View>
      </SafeAreaView>
    );
  }

  if (searchFailed) {
    return <StoresNotFound onPageReload={() => refresh()} />;
  }

  return (
    <SafeAreaView style={styles.result_container}>
      <View style={styles.result_header}>
        <AntDesign
          name="arrowleft"
          size={32}
          color={theme.colors.black}
          onPress={() => navigateBack()}
          style={styles.back_icon}
        />
        <Text style={styles.page_title}>{getPageTitle()}</Text>
      </View>
      <SearchResultList
        stores={resultData}
        onPageReload={() => refresh()}
        userLocation={userLocation}
      />
    </SafeAreaView>
  );
};

export default SearchResultScreen;
