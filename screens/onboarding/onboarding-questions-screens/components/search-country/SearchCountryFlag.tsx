import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SearchCountryFlagProps {
  image?: any;
  country: string;
  onPress: () => void;
}

const SearchCountryFlag: React.FC<SearchCountryFlagProps> = ({
  country,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.flagButton} onPress={onPress}>
      <Image
        source={require(".././../../../../assets/images/search-country/ghana-flag.png")}
        style={styles.flagImage}
      />
      <Text style={styles.country}>{country}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flagButton: {
    alignItems: "center",
    marginRight: 16,
  },
  flagImage: {
    width: 30,
    height: 20,
    marginBottom: 6,
  },
  country: {
    fontSize: 12.5,
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.5,
  },
});

export default SearchCountryFlag;
