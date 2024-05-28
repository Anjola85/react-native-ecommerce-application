import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { primaryColor } from "../../../../constants/Colors";
import { storeCardLargeStyles as styles } from "../../styles";
import NewTag from "./shared-components/NewTag";
import DotIcon from "./shared-components/DotIcon";
import { StoreCardLargeProps } from "./props";

import { useRouter } from "expo-router";
import {
  capitalizeFirstLetter,
  capitalizeText,
  keepStringBeforeFirstComma,
  minimizeTextByCharacters,
} from "../../../../utils/string/stringUtils";
import * as Haptics from "expo-haptics";

const StoreCardLarge: React.FC<StoreCardLargeProps> = ({
  businessId,
  storeName,
  storeAddress,
  storeRating,
  imageUri,
  storeRegion,
  storeDeliveryType,
  storeDistance,
  isLiked,
  toggle,
  isNew,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  function handleCardPress() {
    router.push(`/home/marketplace?storeId=${businessId}`);
  }

  function toggleHeart() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // medium vibration
    toggle(businessId);
  }

  const HeartIcon = (
    <View
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 5,
      }}
    >
      <TouchableOpacity onPress={toggleHeart}>
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={24}
          color={isLiked ? "#FF0000" : "#fff"}
        />
      </TouchableOpacity>
    </View>
  );

  const screenWidth = Dimensions.get("window").width;

  const maxScreenSize = 430;

  const textLimit = (screenWidth / maxScreenSize / 0.93) * 35;

  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        isPressed
          ? { backgroundColor: "#EAEAEA" }
          : { backgroundColor: "transparent" },
      ]}
      onPress={handleCardPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.image_container}>
        <Image
          source={require("../../../../assets/images/supermarket-435452_1920.png")}
          style={styles.image}
        />
        {isNew && <NewTag />}
        {HeartIcon}
      </View>

      <View
        style={[
          styles.content,
          isPressed
            ? { backgroundColor: "#EAEAEA" }
            : { backgroundColor: "transparent" },
        ]}
      >
        <View style={styles.main_content}>
          <Text style={styles.store_name}>
            {minimizeTextByCharacters(capitalizeText(storeName), textLimit)}
          </Text>

          <View style={styles.store_category}>
            <Text style={styles.store_category_text}>
              {capitalizeFirstLetter(storeRegion)}
            </Text>

            <DotIcon />

            <Text style={styles.store_category_text}>
              {Number(storeDistance).toFixed(1)} km
            </Text>
          </View>

          <View style={styles.store_address}>
            <Entypo name="location" size={11} color={primaryColor} />

            <Text style={styles.store_address_text}>
              {" "}
              {keepStringBeforeFirstComma(storeAddress)}
            </Text>

            <DotIcon />

            <Text style={[styles.store_address_text, { color: "#1E804C" }]}>
              {storeDeliveryType}
            </Text>
          </View>
        </View>

        <View style={styles.store_rating}>
          <Text style={styles.store_rating_text}>
            {" "}
            {Number(storeRating).toFixed(1)}
          </Text>
          <AntDesign name="star" size={12} color="gold" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreCardLarge;
