import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import React, { useState } from "react";
import { storeCardSmallStyles as styles } from "../../styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { primaryColor } from "../../../../constants/Colors";
import { StoreCardSmallProps } from "./props";
import { useRouter } from "expo-router";
import { minimizeTextByCharacters } from "../../../../utils/string/stringUtils";

const StoreCardSmall: React.FC<StoreCardSmallProps> = ({
  storeName,
  storeRating,
  smallImageUri,
  imageUri,
  storeRegion,

  storeDistance,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  function handleCardPress() {
    console.log("pressed");
    router.push("/home/marketplace");
  }
  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        isPressed
          ? { backgroundColor: "#EAEAEA" }
          : { backgroundColor: "#fff" },
      ]}
      onPress={handleCardPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.image_container}>
        <Image
          source={require("../../../../assets/images/store-large.png")}
          style={styles.image}
        />
      </View>
      <View
        style={[
          styles.content,
          isPressed
            ? { backgroundColor: "#EAEAEA" }
            : { backgroundColor: "#fff" },
        ]}
      >
        <View style={[styles.small_image_container]}>
          <Image
            source={require("../../../../assets/images/store-large.png")}
            style={[
              styles.small_image,
              isPressed
                ? { backgroundColor: "#EAEAEA" }
                : { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            ]}
          />
        </View>
        <Text style={styles.store_name}>
          {minimizeTextByCharacters(storeName, 19)}
        </Text>
        <Text style={styles.store_category_text}>{storeRegion}</Text>

        <View style={styles.store_rating}>
          <AntDesign name="star" size={11} color="gold" />
          <Text style={styles.store_rating_text}>
            {Number(storeRating).toFixed(1)}
          </Text>
          <Entypo name="location" size={11} color={primaryColor} />
          <Text style={styles.store_rating_text}>
            {Number(storeDistance).toFixed(1)} km
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreCardSmall;
