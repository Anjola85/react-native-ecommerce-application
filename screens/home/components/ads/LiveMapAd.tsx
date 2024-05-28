import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { primaryColor } from "../../../../constants/Colors";
import { SvgComponent as MapHolderSvg } from "../../../../assets/svgs/MapHolderSvg";
import { liveMapStyles as styles } from "../../styles";
import { useRouter } from "expo-router";

const LiveMapAd = () => {
  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  const router = useRouter();

  function handleView() {
    router.push("home/livemap");
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleView}>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: 14 * scale }]}>
          Our live maps help you locate all the stores closest to you in one
          click
        </Text>
        <Text style={[styles.sub_text, { fontSize: 12.5 * scale }]}>
          Find all your neighborhood favorites
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>View</Text>
        </TouchableOpacity>
      </View>
      <MapHolderSvg width={99 * scale} height={99 * scale} />
    </TouchableOpacity>
  );
};

export default LiveMapAd;
