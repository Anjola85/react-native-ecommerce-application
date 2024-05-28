import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegionModal from "../../../../components/custom-modals/RegionModal";
import { Country } from "../../../../screens/onboarding/onboarding-questions-screens/props";
import { countries } from "../../../onboarding/onboarding-questions-screens/data";
import { addToCache, getItemFromCache } from "../../../../store/cache/cache";
import {
  SELECTED_COUNTRY,
  SELECTED_REGION,
} from "../../../../store/cache/cacheKeys";
import { useGlobalState } from "../../../../store/context";

export default function FlagDropdown() {
  const [isVisible, setIsVisible] = useState(false);
  const [regionalCountries, setRegionalCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const { globalState, setGlobalState } = useGlobalState();

  function countrySelect(string: string) {
    const country = countries.find((country) => country.countryName === string);
    if (country != selectedCountry) {
      setSelectedCountry(country);
      addToCache({ key: SELECTED_COUNTRY, value: country });
      setGlobalState({ ...globalState, country: country!.countryName });
    }
    setIsVisible(false);
  }

  const customModalRef = useRef<CustomModalProps>(null);

  function changeRegion() {
    console.log("change region");
    customModalRef?.current?.openModal();
  }

  useEffect(() => {
    async function fetchCountrySelection() {
      const selectedRegion = await getItemFromCache(SELECTED_REGION);

      console.log("selectedRegionflag: ", selectedRegion);

      const chosenCountry = (await getItemFromCache(
        SELECTED_COUNTRY
      )) as Country;

      console.log("chosenCountryflag: ", chosenCountry);

      let country = {} as Country | undefined;

      const chosenCountryBelongsToRegion =
        chosenCountry && chosenCountry.region === selectedRegion;

      console.log(
        "chosenCountryBelongsToRegion: ",
        chosenCountryBelongsToRegion
      );

      if (chosenCountryBelongsToRegion) {
        country = chosenCountry;
      } else {
        country = countries.find(
          (country) => country.region === selectedRegion
        );
      }

      console.log("selected countryflag: ", selectedRegion);

      setRegionalCountries(
        countries.filter((country) => country.region === selectedRegion)
      );

      if (country && country != selectedCountry) {
        setSelectedCountry(country);
      }

      console.log("(FlagDropdown) selected country: ", country);
    }
    fetchCountrySelection();
  }, [globalState.country, globalState.region]);
  // }, [selectedCountry]);

  return (
    <View style={styles.container}>
      <RegionModal ref={customModalRef} />
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={styles.current_country}
      >
        <View
          style={{
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 50,
            padding: 2,
          }}
        >
          <Image
            source={selectedCountry?.flag}
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <>
          <View style={styles.triangle} />
          <View style={styles.dropdown}>
            <FlatList
              data={regionalCountries}
              keyExtractor={(item) => item.countryName}
              renderItem={({ item }) => {
                const isSelected =
                  selectedCountry?.countryName === item.countryName;

                return (
                  <TouchableOpacity
                    style={[
                      styles.item,
                      { backgroundColor: isSelected ? "#f1f1f1" : "white" },
                    ]}
                    onPress={() => countrySelect(item.countryName)}
                  >
                    <Image
                      source={item.flag}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                      }}
                    />
                    <Text style={styles.country}>{item.countryName}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity onPress={changeRegion}>
              <Text style={styles.region}>Change region</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginLeft: 10,
  },
  current_country: {
    width: 27,
    height: 27,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -1,
  },
  dropdown: {
    position: "absolute",
    top: 40, // Adjust this value as needed
    left: -120,
    right: 0,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    width: 150,
    zIndex: 6,
    maxHeight: 200,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  flag: {
    fontSize: 24,
  },
  country: {
    marginLeft: 10,
    fontFamily: "PoppinsLight",
    fontSize: 12.5,
    letterSpacing: 0.3,
  },
  region: {
    fontFamily: "PoppinsLight",
    fontSize: 12,
    letterSpacing: 0.3,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "#204B38",
  },
  triangle: {
    position: "absolute",
    top: 30,
    right: 5,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderBottomWidth: 10,
    borderBottomColor: "white",
    borderStyle: "solid",
    alignSelf: "center",
    zIndex: 7,
  },
});
