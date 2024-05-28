import { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import styles from "./styles/StoreSuggestionScreenStyles";
import googleStyles from "./styles/GoogleAutoCompleteInputStyles";
import SuggestAStore from "../../../assets/svgs/SuggestAStoreSvg";
import LoadingButton from "../../../components/buttons/loading-button/LoadingButton";
import { AddressRequest } from "../../../api/api-contracts/user/requests/dto/address.request";
import { GoogleAutoCompleteAddress } from "../../onboarding/address-screen/props/AddressSelectionModalProps";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { parseGoogleAddressComponents } from "../../home/screens/address-screen/utils";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const extra = Constants.expoConfig!.extra!;

const StoreSuggestionScreen = () => {
  const [storeName, setStoreName] = useState<string>("");
  const [location, setLocation] = useState<AddressRequest>({
    unit: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    primary: false,
    id: "",
    latitude: 0,
    longitude: 0,
  });
  const autoCompleteRef = useRef<GooglePlacesAutocompleteRef>(null);
  const googleDispatchUserAddress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (!details) return;
    // const address = parseGoogleAddressComponents(details);
    // setLocation(address);
  };

  const handleStoreNameChange = (text: string) => {
    setStoreName(text);
  };

  const focusOnAutoComplete = () => {
    autoCompleteRef.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Feather
          name="arrow-left"
          size={32}
          color="black"
          style={styles.back_icon}
          onPress={() => {
            router.back();
          }}
        />
        <View style={styles.img_container}>
          <SuggestAStore />
        </View>
        <Text style={styles.heading_text}>
          Bring Home Closer - Suggest a Store to Feature!
        </Text>
        <View style={styles.input_container}>
          <View style={styles.input_wrapper}>
            <Text style={styles.input_label}>Store Name</Text>
            <TextInput
              style={styles.input}
              value={storeName}
              onChangeText={(text) => handleStoreNameChange(text)}
            />
          </View>

          <View style={styles.input_wrapper}>
            <Text style={styles.input_label}>Location</Text>
            <TouchableOpacity
              style={styles.autocomplete_container}
              onPress={focusOnAutoComplete}
              activeOpacity={1}
            >
              <GooglePlacesAutocomplete
                ref={autoCompleteRef}
                placeholder=""
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
            </TouchableOpacity>
          </View>
        </View>

        <LoadingButton
          isLoading={false}
          onPress={() => {}}
          button_style={styles.button}
          text_style={styles.button_text}
        >
          <Text>Submit</Text>
        </LoadingButton>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default StoreSuggestionScreen;
