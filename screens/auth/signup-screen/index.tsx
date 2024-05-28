import React, { useState } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles/SignUpStyles";
import { theme } from "../../../constants/theme";
import SignUpWithEmail from "./components/SignUpWithEmail";
import SignUpWithPhone from "./components/SignUpWithPhone";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import { Link, useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();

  const [isPhoneSelected, setIsPhoneSelected] = useState(true);

  const selectEmail = () => {
    setIsPhoneSelected(false);
  };

  const selectPhone = () => {
    setIsPhoneSelected(true);
  };

  const LoginOptionSelector = () => {
    return (
      <View style={styles.selection_container}>
        <View style={[styles.selection, isPhoneSelected && styles.selected]}>
          <Text
            style={
              isPhoneSelected
                ? [{ color: "#1D1D35" }, styles.selection_text]
                : { color: "#B2B2B2" }
            }
            onPress={() => selectPhone()}
          >
            Phone Number
          </Text>
        </View>
        <View style={[styles.selection, !isPhoneSelected && styles.selected]}>
          <Text
            style={
              !isPhoneSelected
                ? [{ color: "#1D1D35" }, styles.selection_text]
                : { color: "#B2B2B2" }
            }
            onPress={() => selectEmail()}
          >
            Email
          </Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text_heading}>Sign Up</Text>

        {/* <LoginOptionSelector /> */}
        <View style={{ height: 50 }} />

        {isPhoneSelected ? <SignUpWithPhone /> : <SignUpWithEmail />}

        <View style={styles.line}>
          <View style={styles.greyline} />
          <Text style={styles.linetext}>or</Text>
          <View style={styles.greyline} />
        </View>

        <ThirdPartyAuth />

        <Text style={[styles.other_info, { marginTop: 16, marginBottom: 10 }]}>
          {" "}
          Already have an account?{" "}
          <Text
            style={styles.hyperlink}
            onPress={() => router.push("/(auth)/login")}
          >
            Log In
          </Text>
        </Text>
        <Link href={"/home"} style={styles.hyperlink}>
          Continue as guest
        </Link>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
