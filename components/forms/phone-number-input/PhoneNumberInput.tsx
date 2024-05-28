import React, { useEffect, useState } from "react";
import { TextInput, View, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker, {
  CountryCode,
  DARK_THEME,
} from "react-native-country-picker-modal";
import { callingCodes, convertToPlainPhoneNumber, formatPhoneNumber } from "../../../utils/phone/phoneUtils";
import { PhoneNumberInputProps, Mobile } from "./props/PhoneInput";
import styles from "./styles/PhoneNumberInputStyles";

const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("CA");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [validLength, setValidLength] = useState<number>(14);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneValid, setIsValid] = useState<boolean>(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState<Mobile>({} as Mobile);

  const handleCountrySelect = (country: CountryCode) => {
    setCountryCode(country);
    setValidLength(
      country === "CA" ||
        country === "NG" ||
        country === "GH" ||
        country === "US" ||
        country === "GB"
        ? 14
        : 15
    );
    setPhoneNumber("");
  };

  const handlePhoneNumberChange = (text: string) => {
    if (text.length <= validLength) {
      const formattedNumber = formatPhoneNumber(text);
      setPhoneNumber(formattedNumber);
      setIsValid(formattedNumber.length === validLength);

      if (formatPhoneNumber.length === validLength - 1){
        Keyboard.dismiss();

        const formattedNumber = text.replace(/[^0-9\.]+/g, "").slice(0, 10);
        setPhoneNumber(formattedNumber);
      }
    }

    // set phone value that will be returned
    props?.getPhoneDetails?.({isPhoneValid, userPhoneNumber});
  };

  useEffect(() => {
    if (isPhoneValid) {
      const result: Mobile = {
        phoneNumber: convertToPlainPhoneNumber(phoneNumber),
        countryCode: callingCodes[countryCode],
        isoType: countryCode,
      };

      setUserPhoneNumber(result);

      // set phone value that will be returned
      props?.getPhoneDetails?.({isPhoneValid, userPhoneNumber: result});
    }
  }, [isPhoneValid]);

  const clearPhoneInput = () => {
    setPhoneNumber("");
    setUserPhoneNumber({} as Mobile);
    setIsValid(false);
  };

  return (
    <View style={[styles.container, props.style]}>
      <CountryPicker
        theme={darkMode ? DARK_THEME : undefined}
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCodeButton
        withCallingCode
        withAlphaFilter
        onSelect={(country) => handleCountrySelect(country.cca2)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => handlePhoneNumberChange(text)}
      />
      {props.closeBtn && (
        <AntDesign
          name="closecircle"
          size={18}
          color="#77777775"
          onPress={() => clearPhoneInput()}
        />
      )}
    </View>
  );
};

export default PhoneNumberInput;
