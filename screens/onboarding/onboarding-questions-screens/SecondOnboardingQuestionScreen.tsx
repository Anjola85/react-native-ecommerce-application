import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingBar from "./components/loading-bar/LoadingBar";
import { primaryColor } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import SelectCountryButton from "./components/search-country/SelectCountryButton";
import { SvgComponent as SelectCountrySvg } from "../../../assets/svgs/InvitePeopleSvg";
import { addToCache, getItemFromCache } from "../../../store/cache/cache";
import {
  SELECTED_COUNTRY,
  SELECTED_REGION,
  USER_COUNTRY_OF_ORIGIN,
} from "../../../store/cache/cacheKeys";
import { Country } from "./props";
import { countries } from "./data";
import { useGlobalState } from "../../../store/context";

const SecondOnboardingQuestionScreen = () => {
  const [progress, setProgress] = useState(33);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>();
  const { globalState, setGlobalState } = useGlobalState();
  const router = useRouter();

  function handleNext() {
    if (selectedCountry === null) {
      return;
    }
    const country = countries.find(
      (country) => country.countryName === selectedCountry
    );
    console.log("Selected country22: ", country);

    setGlobalState({ ...globalState, country: country!.countryName });
    addToCache({ key: SELECTED_COUNTRY, value: country });
    addToCache({ key: USER_COUNTRY_OF_ORIGIN, value: country });

    setProgress(66);
    router.push("/home/third-question");
  }

  useEffect(() => {
    async function getRegion() {
      const region = (await getItemFromCache(SELECTED_REGION)) as string;
      setSelectedRegion(region);
      if (region && region.length > 1) {
        setProgress(66);
      }
    }
    getRegion();
  }, []);

  const renderOption = ({ item }: { item: Country }) => {
    return (
      <SelectCountryButton
        country={item.countryName}
        selectCountryFunction={setSelectedCountry}
        selectedCountry={selectedCountry}
        imageUri={item.flag}
      />
    );
  };

  const filteredCountriesByRegion = countries.filter(
    (country) => country.region === selectedRegion
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingBarContainer}>
        <LoadingBar progress={progress} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <SelectCountrySvg
          style={{ alignSelf: "center" }}
          width={220}
          height={220}
        />
        <Text style={styles.heading}>
          Which part of {selectedRegion} are you from?
        </Text>
        <Text style={styles.sub_text}>
          Please select your country to help us give you a better experience
        </Text>
        <FlatList
          data={filteredCountriesByRegion}
          renderItem={renderOption}
          keyExtractor={(item) => item.id + ""}
          numColumns={2}
          columnWrapperStyle={{
            gap: 10,
          }}
          showsVerticalScrollIndicator={false}
          scrollEnabled
          style={{ backgroundColor: "#fff" }}
        />

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: selectedCountry ? primaryColor : "#e2e2e2" },
          ]}
          onPress={handleNext}
        >
          <Text style={styles.button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  heading: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
    color: "#333",
    lineHeight: 28,
    letterSpacing: 0.1,
    textAlign: "center",
    maxWidth: "70%",
    alignSelf: "center",
    marginBottom: 10,
  },
  sub_text: {
    alignSelf: "center",
    fontFamily: "PoppinsLight",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
    color: "#898A8D",
    fontSize: 13.5,
    maxWidth: "70%",
  },

  loadingBarContainer: {
    width: "100%",
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 10,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
  },
  button_text: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "PoppinsMedium",
  },
});

export default SecondOnboardingQuestionScreen;
