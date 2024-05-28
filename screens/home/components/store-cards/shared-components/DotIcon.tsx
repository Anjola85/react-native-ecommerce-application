import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const DotIcon = () => {
  return (
    <Entypo
      name="dot-single"
      size={10}
      color="black"
      style={{ alignSelf: "center", marginHorizontal: 3 }}
    />
  );
};

export default DotIcon;
