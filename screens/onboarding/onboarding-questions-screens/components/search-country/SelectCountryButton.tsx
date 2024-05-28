import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectCountryButtonProps } from "../../props";

const width = Dimensions.get("window").width;

const scale = width / 430;

const SelectCountryButton: React.FC<SelectCountryButtonProps> = ({
  imageUri,
  country,
  selectCountryFunction,
  selectedCountry,
}) => {
  function onPress() {
    selectCountryFunction(country);
  }

  const isSelected = selectedCountry === country;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isSelected
            ? "#e2e2e2"
            : styles.button.backgroundColor,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={imageUri} style={styles.image} />
        <Text style={[styles.country]}>{country}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, // for Android
    width: width / 2 - 30 * scale,
    height: 60,
    marginBottom: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  country: {
    fontSize: 13.5,
    fontFamily: "PoppinsMedium",
    letterSpacing: 0.1,
    textAlign: "left",
    flexWrap: "wrap",
    display: "flex",
    color: "#333",
    maxWidth: "90%",
  },
});
export default SelectCountryButton;
