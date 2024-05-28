import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AllStores from "../../home/components/stores-list/AllStores";
import GroceryStores from "../../home/components/stores-list/GroceryStores";
import StoresInArea from "../../home/components/stores-list/StoresInArea";
import TrendingBeautyStores from "../../home/components/stores-list/TrendingBeautyStores";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import Heading from "./components/headings/Heading";
import Subheading from "./components/headings/Subheading";
import Regions from "./components/headings/Regions";
import InviteFriendsAd from "./components/ads/InviteFriendsAd";
import LiveMapAd from "./components/ads/LiveMapAd";

const ContinueAsGuestHomeScreen = () => {
  const router = useRouter();

  function handleSignUpPress() {
    router.push("/(auth)/signup");
  }

  function handleLogInPress() {
    router.push("/(auth)/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ minHeight: 151 }}>
        <Heading />
        <Subheading />
        <Regions />
      </View>
      <View style={{ flexGrow: 1, backgroundColor: "#fff" }}>
        <ScrollView
          scrollEnabled={false}
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          <InviteFriendsAd />
          <StoresInArea />
          <LiveMapAd />
          <GroceryStores />
          <TrendingBeautyStores />
          <AllStores />
        </ScrollView>
      </View>
      <BlurView style={styles.absolute} intensity={20} tint="light">
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.sign_up_btn}
            onPress={handleSignUpPress}
          >
            <Text style={styles.btn_text}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.log_in_btn}
            onPress={handleLogInPress}
          >
            <Text style={styles.btn_text}>Log In</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

//    {/* You can add additional overlay content here if needed */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: "100%",
    flexGrow: 1,
  },
  scroll: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",
  },
  absolute: {
    position: "absolute",
    top: "35%",
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button_container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginTop: "-10%",
    minHeight: 80,
    width: "100%",
    justifyContent: "center",
    gap: 10,
  },
  sign_up_btn: {
    backgroundColor: "#601124",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  log_in_btn: {
    backgroundColor: "#B7949C",
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 30,
    marginLeft: 10,
  },
  btn_text: {
    color: "#fff",
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default ContinueAsGuestHomeScreen;
