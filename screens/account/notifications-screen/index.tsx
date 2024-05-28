import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import Notification from "./components/Notification";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Header title="Notifications" hasButton />
      </View>
      <Notification
        title="Email"
        subtitle="Be the first to learn about new stores, great tips, updates and even
          community news"
        btnFunction={() => console.log("Email Switch Clicked")}
      />
      <Notification
        title="Push Notifications"
        subtitle="Get notified about store's availability, new updates, promotions and more"
        btnFunction={() => console.log("Push Switch Clicked")}
      />
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

export default NotificationsScreen;
