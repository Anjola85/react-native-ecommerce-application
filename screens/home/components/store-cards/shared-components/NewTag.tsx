import { View, Text } from "react-native";
import React from "react";

const NewTag = () => {
  return (
    <View
      style={{
        // backgroundColor: "#FFFDC3",
        backgroundColor: "#005150",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        marginBottom: -3,
        position: "absolute",
        top: 15,
        left: 0,
      }}
    >
      <Text
        style={{
          // color: "#005150",
          color: "#fff",
          fontFamily: "PoppinsMedium",
          fontSize: 12,
          letterSpacing: 0.5,
        }}
      >
        New
      </Text>
    </View>
  );
};

export default NewTag;
