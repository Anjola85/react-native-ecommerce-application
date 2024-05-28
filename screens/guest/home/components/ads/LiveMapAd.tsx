import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { SvgComponent as MapHolderSvg } from "../../../../../assets/svgs/MapHolderSvg";
import { liveMapStyles as styles } from "../../styles";

const LiveMapAd = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Our live maps help you locate all the stores closest to you in one
          click
        </Text>
        <Text style={styles.sub_text}>
          Find all your neighborhood favorites
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>View</Text>
        </TouchableOpacity>
      </View>
      <MapHolderSvg />
    </TouchableOpacity>
  );
};

export default LiveMapAd;
