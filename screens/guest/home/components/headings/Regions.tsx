import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { regionStyles as styles } from "../../styles";

const Regions = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity style={styles.region}>
        <Text style={styles.region_text}>Beauty</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.region}>
        <Text style={styles.region_text}>West Africa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.region}>
        <Text style={styles.region_text}>North Africa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.region}>
        <Text style={styles.region_text}>South Africa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.region}>
        <Text style={styles.region_text}>Carribean</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Regions;
