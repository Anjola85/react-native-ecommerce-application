import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "./components/Slider";
import styles from "./styles/OnboardingStyles";
import { Link, useRouter } from "expo-router";

const OnboardingScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Link href="/(tabs)" replace asChild>
        <Button title="Go to Home" />
      </Link>

      <Button
        title="Go to Next"
        onPress={() => router.push("/(auth)/signup")}
      />
      <Button
        title="Go to Questions"
        onPress={() => router.push("/(onboarding)/first-question")}
      /> */}
      <Slider />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
