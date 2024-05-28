import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { subHeaderStyles as styles } from "../../styles";
import StoreSearchBar from "./StoreSearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Subheading = () => {
  const router = useRouter();

  function goToMap() {
    router.push("home/livemap");
  }
  return (
    <View style={styles.container}>
      <View style={{ width: "88%" }}>
        <StoreSearchBar />
      </View>
      <TouchableOpacity style={styles.map_btn} onPress={goToMap}>
        <MaterialCommunityIcons name="map-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Subheading;
