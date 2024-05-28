import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { primaryColor } from "../../../../constants/Colors";
import { storeCardMediumStyles as styles } from "../../styles";
import NewTag from "./shared-components/NewTag";
import DotIcon from "./shared-components/DotIcon";
import { StoreCardMediumProps } from "./props";
import {
  capitalizeFirstLetter,
  capitalizeText,
  minimizeTextByCharacters,
  keepStringBeforeFirstComma,
} from "../../../../utils/string/stringUtils";

const StoreCardMedium: React.FC<StoreCardMediumProps> = ({
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
  const screenWidth = Dimensions.get("window").width;
  const maxScreenSize = 430;
  const textLimit = (screenWidth / maxScreenSize / 0.93) * 21;

  const handleCardPress = () => {
    router.push(`/home/marketplace?storeId=${businessId}`);
  };

  const toggleHeart = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    toggle(businessId);
  };

  const HeartIcon = (
    <View style={styles.heart_icon_container}>
      <TouchableOpacity onPress={toggleHeart}>
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={24}
          color={isLiked ? "#FF0000" : "#fff"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        { backgroundColor: isPressed ? "#F2F2F2" : "#fff" },
      ]}
      onPress={handleCardPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.image_container}>
        <Image
          // source={{ uri: imageUri }}
          source={require("../../../../assets/images/supermarket-435452_1920.png")}
          style={styles.image}
        />
        {isNew && <NewTag />}
        {HeartIcon}
      </View>
      <View
        style={[
          styles.content,
          { backgroundColor: isPressed ? "#EAEAEA" : "#fff" },
        ]}
      >
        <View style={styles.main_content}>
          <View style={styles.header}>
            <Text style={styles.store_name}>
              {minimizeTextByCharacters(capitalizeText(storeName), textLimit)}
            </Text>
            <View style={styles.store_rating}>
              <Text style={styles.store_rating_text}>
                {Number(storeRating).toFixed(1)}
              </Text>
              <AntDesign name="star" size={10} color="gold" />
            </View>
          </View>
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
            <Text
              style={styles.store_address_text}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {" "}
              {keepStringBeforeFirstComma(storeAddress)}
            </Text>
            <DotIcon />
            <Text style={[styles.store_address_text, { color: "#1E804C" }]}>
              {storeDeliveryType}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreCardMedium;
