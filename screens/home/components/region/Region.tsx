import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { RegionProps } from "./props";
import { primaryColor } from "../../../../constants/Colors";

const Region: React.FC<RegionProps> = ({
  selected,
  handleSelected,
  name,
  image,
}) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity
        style={[
          styles.imageContainer,
          {
            backgroundColor: selected === name ? primaryColor : "#F6F4F0",
          },
        ]}
        onPress={() => handleSelected(name)}
      >
        <Image source={image} style={styles.optionImage} />
      </TouchableOpacity>
      <Text style={styles.optionText}>{name}</Text>
    </View>
  );
};

export default Region;
