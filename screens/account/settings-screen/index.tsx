import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import { AccountLinkContainer } from "../account-screen/components";
import { accountSettingsLinks } from "../account-screen/data";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account Settings" hasButton />
      <ScrollView style={styles.scroll}>
        <AccountLinkContainer data={accountSettingsLinks} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  scroll: {
    flexGrow: 1,
    maxWidth: "100%",
    display: "flex",
  },
});
export default SettingsScreen;
