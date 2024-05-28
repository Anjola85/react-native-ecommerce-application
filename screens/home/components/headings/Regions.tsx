import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { regionStyles as styles } from "../../styles";
import { RegionProps } from "../region/props";
import { primaryColor } from "../../../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import RegionModal from "../../../../components/custom-modals/RegionModal";
import { useGlobalState } from "../../../../store/context";
import { addToCache, getItemFromCache } from "../../../../store/cache/cache";
import { SELECTED_REGION } from "../../../../store/cache/cacheKeys";
import {
  CaribbeanRegion,
  EastAsiaRegion,
  SouthAsiaRegion,
  WestAfricaRegion,
} from "../../../onboarding/onboarding-questions-screens/data";
import SvgIcon from "../../../../assets/svgs/SvgIcon";

const Region: React.FC<RegionProps> = ({
  selected,
  handleSelected,
  name,
  image,
}) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity
        style={[
          styles.imageContainer,
          {
            backgroundColor: selected === name ? primaryColor : "#F6F4F0",
          },
        ]}
        onPress={() => handleSelected(name)}
      >
        <SvgIcon
          width={20}
          height={20}
          // uri={image} // comment out until the data is reflected in server
        />
      </TouchableOpacity>
      <Text style={styles.optionText}>{name}</Text>
    </View>
  );
};

const Regions = () => {
  const customModalRef = useRef<CustomModalProps>(null);

  const [selected, setSelected] = React.useState<string | null>(null);
  const { globalState, setGlobalState } = useGlobalState();

  async function handleSelected(name: string) {
    setSelected(name);
    await addToCache({ key: SELECTED_REGION, value: name });
    setGlobalState({ ...globalState, region: name });
  }

  useEffect(() => {
    async function getRegionFromCache() {
      const region = (await getItemFromCache(SELECTED_REGION)) as string;
      if (selected !== region) {
        setSelected(region);
        setGlobalState({ ...globalState, region: region });
      }
    }
    getRegionFromCache();
  }, [globalState.region]);

  function changeRegion() {
    customModalRef?.current?.openModal();
  }
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        alignItems: "flex-start",
      }}
    >
      <Region
        name={SouthAsiaRegion.regionName}
        image={`https://quiikmart-version1-app.s3.ca-central-1.amazonaws.com/mobile_assets/category-1.svg`}
        selected={selected}
        handleSelected={handleSelected}
      />
      <Region
        name={WestAfricaRegion.regionName}
        image={require("../../../../assets/images/west-africa-region.png")}
        selected={selected}
        handleSelected={handleSelected}
      />
      <Region
        name={CaribbeanRegion.regionName}
        image={require("../../../../assets/images/caribbean-region.png")}
        selected={selected}
        handleSelected={handleSelected}
      />
      <Region
        name={EastAsiaRegion.regionName}
        image={require("../../../../assets/images/korea-region.png")}
        selected={selected}
        handleSelected={handleSelected}
      />
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.imageContainer,
            {
              backgroundColor: "#F6F4F0",
            },
          ]}
          onPress={changeRegion}
        >
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.optionText}>More</Text>
      </View>
      <RegionModal ref={customModalRef} />
    </ScrollView>
  );
};

export default Regions;
