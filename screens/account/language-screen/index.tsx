import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import LanguageSelector from "./components/LanguageSelector";

const LanguageScreen = () => {
  const [languageSelected, setLanguageSelected] = React.useState("English");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Header title="Language" hasSeperator={true} hasButton />
      </View>
      <LanguageSelector
        language="English"
        selected={languageSelected === "English"}
        onPress={() => setLanguageSelected("English")}
      />
      <LanguageSelector
        language="French"
        selected={languageSelected === "French"}
        onPress={() => setLanguageSelected("French")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default LanguageScreen;
