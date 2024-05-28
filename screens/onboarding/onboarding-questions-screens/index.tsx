import { Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingBar from "./components/loading-bar/LoadingBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegionCards from "./components/card-lists/RegionCards";
import { primaryColor } from "../../../constants/Colors";
import { regionalOptions } from "./data";
import { useRouter } from "expo-router";
import { addToCache } from "../../../store/cache/cache";
import {
  SELECTED_REGION,
  USER_COUNTRY_OF_ORIGIN,
} from "../../../store/cache/cacheKeys";
import { useGlobalState } from "../../../store/context";

const FirstOnboardingQuestionScreen = () => {
  const [progress, setProgress] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const router = useRouter();
  const { globalState, setGlobalState } = useGlobalState();

  async function selection(name: string) {
    setSelectedRegion(name);
    setGlobalState({ ...globalState, region: name });
    addToCache({ key: SELECTED_REGION, value: name });
    setProgress(33);
  }

  function handleNext() {
    if (selectedRegion === null) {
      return;
    }

    router.push("/home/second-question");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingBarContainer}>
        <LoadingBar progress={progress} />
      </View>

      <Text style={styles.question}>Which of these describe your region</Text>
      <Text style={styles.sub_text}>{"(Select one)"}</Text>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <RegionCards options={regionalOptions} selection={selection} />
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                selectedRegion === null
                  ? "#e2e2e2"
                  : styles.button.backgroundColor,
            },
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
  question: {
    fontFamily: "PoppinsSemiBold",
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
    color: "#333",
  },
  scroll: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
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

export default FirstOnboardingQuestionScreen;
