import { View, Platform, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { isDuplicateAddress, parseGoogleAddressComponents } from "../utils";
import { GoogleAutoCompleteSearchBoxProps } from "../../../props/GoogleAutoCompleteSearchBoxProps";
import CloseButton from "./CloseButton";
const extra = Constants.expoConfig!.extra!;

const GoogleAutoCompleteSearchBox: React.FC<
  GoogleAutoCompleteSearchBoxProps
> = ({
  selectedExistingAddresses,
  addAddress,
  setSearchText,
  searchText,
  clearAddressInput,
  setIsFocused,
}) => {
  const router = useRouter();

  function googleDispatchUserAddress(
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) {
    if (!details) return;

    const address = parseGoogleAddressComponents(details);

    clearAddressInput();

    router.push({
      pathname: `/home/editAddress`,
      params: { source: "/home/address", value: JSON.stringify(address) },
    });

    if (!isDuplicateAddress(address, selectedExistingAddresses)) {
      console.log("added address: ", address);
      addAddress(address);
    }
  }

  const textInputProps = {
    onChangeText: setSearchText,
    value: searchText,
    clearButtonMode: Platform.OS === "ios" ? "while-editing" : "never",
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: () => {
      setIsFocused(false);
    },
  };

  const query = {
    key: extra.GOOGLE_API_KEY,
    language: "en",
  };

  return (
    // Container for the search box
    <View style={googleStyles.selection_container}>
      <GooglePlacesAutocomplete
        placeholder="Enter an address"
        textInputProps={textInputProps}
        renderRightButton={() => (
          <CloseButton
            searchText={searchText}
            clearAddressInput={clearAddressInput}
          />
        )}
        styles={{ ...googleStyles }}
        query={query}
        fetchDetails={true}
        onPress={googleDispatchUserAddress}
      />
    </View>
  );
};

const googleStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    zIndex: 100,
    width: "100%",
    alignSelf: "center",
    left: 30,
  },
  selection_container: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 12,
    overflowY: "visible",
    width: "100%",
    height: 45,
    justifyContent: "space-between",
    borderRadius: 20,
  },
  textInputContainer: {
    width: "100%",
    marginLeft: -30,
    backgroundColor: "transparent",
  },
  textInput: {
    height: 40,
    color: "black",
    marginLeft: 14,
    backgroundColor: "transparent",
    fontSize: 16,
  },
  row: {
    backgroundColor: "transparent",
  },
  poweredContainer: {
    backgroundColor: "transparent",
    display: "none",
  },
  listView: {
    width: "120%",
    left: -30,
  },
});

export default GoogleAutoCompleteSearchBox;
