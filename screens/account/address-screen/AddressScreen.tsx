import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import ArrowBackSvg from "../../../assets/svgs/ArrowBackSvg";
import { theme } from "../../../constants/theme";
import { useRouter } from "expo-router";

const AddressScreen = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function navigateToAccountScreen() {
    setIsFocused(false);
    // navigation.navigate("AccountScreen");
    router.back();
  }

  const inputBorderStyle = isFocused
    ? styles.focusedBorder
    : styles.defaultBorder;

  const BackButton = (
    <TouchableOpacity
      style={styles.back_button}
      onPress={navigateToAccountScreen}
    >
      <ArrowBackSvg />
    </TouchableOpacity>
  );

  const AddressInput = (
    <View style={styles.textInput_container}>
      <TextInput
        value={text}
        placeholder="Add a new address"
        style={[styles.input_box, inputBorderStyle]}
        onChangeText={(text) => setText(text)}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );

  const ManualAddressLink = (
    <View style={styles.sub_texts}>
      <Text
        style={{
          fontSize: theme.fontSizes.small,
          lineHeight: 12,
          fontFamily: theme.fontFamily.medium,
          marginBottom: 3,
        }}
      >
        Don't see your address?
      </Text>
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: theme.fontSizes.xsmall,
          fontFamily: theme.fontFamily.medium,
          lineHeight: 10,
        }}
        // onPress={() => navigation.navigate("ManualAddressScreen")}
        onPress={() => router.push("/account")}
      >
        Create your address manually
      </Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {BackButton}
        <Text style={styles.heading}>Choose address</Text>
        {AddressInput}
        <ScrollView style={styles.scroll}>
          {/* Radio buttons with addresses */}
          {isFocused && ManualAddressLink}
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: theme.colors.white,
  },
  heading: {
    fontFamily: theme.fontFamily.bold,
    textAlign: "center",
    fontSize: theme.fontSizes.medium,
    lineHeight: 20,
    marginBottom: "5%",
  },
  scroll: {
    flexgrow: 1,
    backgroundColor: theme.colors.white,
  },
  textInput_container: {
    paddingHorizontal: "5%",
  },
  back_button: {
    marginLeft: "5%",
  },
  input_box: {
    backgroundColor: theme.colors.white,
    height: 36,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: "2.5%",
    fontFamily: theme.fontFamily.medium,
    marginBottom: "6%",
  },
  sub_texts: {
    marginLeft: "4%",
  },
  defaultBorder: {
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
  focusedBorder: {
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default AddressScreen;
