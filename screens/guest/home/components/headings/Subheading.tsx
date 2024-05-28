import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { subHeaderStyles as styles } from "../../styles";
import StoreSearchBar from "./StoreSearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Subheading = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "88%" }}>
        <StoreSearchBar />
      </View>
      <TouchableOpacity style={styles.map_btn}>
        <MaterialCommunityIcons name="map-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Subheading;
