import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LanguageSelectorProps } from "../props/LanguageSelectorProps";

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onPress,
  language,
  image = require("../../../../assets/images/adaptive-icon.png"),
  selected,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected ? styles.selected : {}]}
    >
      <Image source={image} style={styles.icon} />
      <Text style={styles.text}>{language}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DBDBDB",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    width: "90%",
    marginBottom: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: "#004225",
  },
});

export default LanguageSelector;
