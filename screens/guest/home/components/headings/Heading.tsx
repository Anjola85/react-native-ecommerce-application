import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { headerStyles as styles } from "../../styles";

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "PoppinsRegular" }}>Hi, Stranger✨</Text>
      <TouchableOpacity style={styles.address_container}>
        <Text style={{ fontFamily: "PoppinsRegular" }}>185 Millway Av.</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.icon_container}>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
