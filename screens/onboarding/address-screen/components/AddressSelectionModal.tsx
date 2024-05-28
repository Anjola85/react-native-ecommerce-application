import { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import styles from "../styles/AddressSelectionModalStyles";
import googleStyles from "../styles/GooglePlacesAddressStyles";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { buildAddressObject } from "../../../../utils/address/addressUtils";
import {
  AddressSelectionModalProps,
  GoogleAutoCompleteAddress,
} from "../props/AddressSelectionModalProps";
import Constants from "expo-constants";
const extra = Constants.expoConfig!.extra!;

const AddressSelectionModal = ({
  onAddressSelected,
  onAddressSelectionCancelled,
}: AddressSelectionModalProps) => {
  const autoCompleteRef = useRef<GooglePlacesAutocompleteRef>(null);
  const googleDispatchUserAddress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    const address: GoogleAutoCompleteAddress = {
      addressObject: buildAddressObject(data.description),
      main_address: data.structured_formatting.main_text,
      secondary_address: data.structured_formatting.secondary_text,
    };
    clearAdderessInput();
    onAddressSelected(address);
  };
  const clearAdderessInput = () => {
    autoCompleteRef.current?.setAddressText("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text_heading}>Where are you located?</Text>
        <Text style={styles.text_subheading}>
          Tell us where you are located and we'll find stores nearby
        </Text>
        <View style={styles.address_container}>
          <AntDesign
            name="arrowleft"
            size={22}
            color="#601124"
            onPress={onAddressSelectionCancelled}
          />
          <View style={styles.selection_container}>
            <Feather name="search" size={18} color="#77777775" />
            <GooglePlacesAutocomplete
              ref={autoCompleteRef}
              placeholder="Search for address"
              query={{
                key: extra.GOOGLE_API_KEY,
                language: "en",
              }}
              onPress={googleDispatchUserAddress}
              textInputProps={{
                placeholderTextColor: "rgba(0, 0, 0, 0.7)",
                style: styles.autocomplete_text_input,
                clearButtonMode: "never",
              }}
              renderRightButton={() => <View />}
              styles={{ ...googleStyles }}
            />
            <AntDesign
              name="closecircle"
              size={18}
              color="#77777775"
              onPress={clearAdderessInput}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddressSelectionModal;
