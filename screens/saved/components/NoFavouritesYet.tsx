import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgComponent as ArrowSvg } from "../../../assets/svgs/arrowSvg";
import { useRouter } from "expo-router";

const NoFavouritesYet = () => {
  const router = useRouter();
  function handleBrowseStoresPress() {
    router.push("/home");
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>No Favourites added yet</Text>
        <Text style={styles.sub_text}>
          Tap the heart icon on a store to add it to your favorites and it will
          show up here
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.gray}>
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 5,
            }}
          >
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </View>
          <View
            style={{ position: "absolute", top: -80, right: 30, zIndex: 5 }}
          >
            <ArrowSvg />
          </View>
        </View>
        <View style={styles.white}></View>
      </View>
      <TouchableOpacity onPress={handleBrowseStoresPress} style={styles.button}>
        <Text style={styles.button_text}>Browse Stores</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    letterSpacing: 0.8,
    color: "#323338",
    marginBottom: 10,
  },
  sub_text: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.8,
    color: "#252C2C",
    lineHeight: 24,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  gray: {
    width: 250,
    height: 100,
    backgroundColor: "#EAEAEA",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "relative",
  },
  white: {
    width: 250,
    height: 65,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    width: 250,
    borderRadius: 20,
    padding: 15,
    borderColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323338",
  },
  button_text: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    letterSpacing: 0.8,
    color: "#fff",
  },
});

export default NoFavouritesYet;
