import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingBar from "./components/loading-bar/LoadingBar";
import { primaryColor } from "../../../constants/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRouter, useNavigation } from "expo-router";
import RadioButtons from "./components/radio-button/RadioButtons";
import { wantToOptions } from "./data";
import { addToCache } from "../../../store/cache/cache";
import {
  SELECTED_REASON_FOR_QUIIKMART,
  USER_HAS_ONBOARDED,
} from "../../../store/cache/cacheKeys";
import { ApiResponse } from "../../../api/api-contracts/user/responses/response";
import { signupApi } from "../../../api/endpoints/authApi";
import { SignupRequest } from "../../../api/api-contracts/user/requests/signup.request";
import { getUserSignupDataFromCache } from "../../../store/cache/cacheUtils";

const ThirdOnboardingQuestion = () => {
  const [progressBar, setProgressBar] = useState(66);
  const [selectedOption, setselectedOption] = useState<string | null>(null);
  const router = useRouter();
  const navigation = useNavigation();

  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  async function handleNext() {
    if (!selectedOption) return;

    setProgressBar(100);

    // make call to API
    const data: SignupRequest = await getUserSignupDataFromCache();
    const apiResponse: ApiResponse = await signupApi(data);
    console.log("apiResponse: ", apiResponse);
    if (apiResponse.status) {
      await addToCache({ key: USER_HAS_ONBOARDED, value: true });
      router.push("/(tabs)/home");
    } else {
      console.log("restarting onboarding");
      router.replace("/(tabs)/home/first-question");
    }
  }

  function selection(name: string) {
    setselectedOption(name);
    addToCache({ key: SELECTED_REASON_FOR_QUIIKMART, value: name });
    setProgressBar(99);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingBarContainer}>
        <LoadingBar progress={progressBar} />
      </View>
      <Text
        style={[styles.heading, { fontSize: styles.heading.fontSize * scale }]}
      >
        Tell us what you want to use Quiikmart for
      </Text>
      <Text
        style={[
          styles.sub_text,
          { fontSize: styles.sub_text.fontSize * scale },
        ]}
      >
        Be honest, we want to make sure we give you the best experience. Select
        One
      </Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          padding: 15,
        }}
        showsVerticalScrollIndicator={false}
      >
        <RadioButtons options={wantToOptions} onSelectOption={selection} />
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              selectedOption === null
                ? "#e2e2e2"
                : styles.button.backgroundColor,
          },
        ]}
        onPress={handleNext}
      >
        <Text style={styles.button_text}>Next</Text>
      </TouchableOpacity>
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
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    color: "#333",
    lineHeight: 28,
    letterSpacing: 0.1,
    textAlign: "center",
    maxWidth: "60%",
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
export default ThirdOnboardingQuestion;
