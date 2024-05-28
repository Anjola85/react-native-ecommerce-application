import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { StoreFavouritesCardProps } from "../../home/components/store-cards/props";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { storeFavouritesCardStyles as styles } from "../../home/styles";
import DotIcon from "../../home/components/store-cards/shared-components/DotIcon";
import { minimizeTextByCharacters } from "../../../utils/string/stringUtils";

const StoreFavouritesCard: React.FC<StoreFavouritesCardProps> = ({
  businessId,
  storeName,
  storeDeliveryTimeMins,
  storeRating,
  imageUri,
  storeRegions,
  storeDistance,
  isLiked,
  storeDeliveryFee,
  onCardPress,
  toggle,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  function handleCardPress() {
    console.log("pressed");
    onCardPress && onCardPress();
  }

  const HeartIcon = (
    <View
      style={{
        position: "absolute",
        top: 3,
        right: 3,
        zIndex: 5,
      }}
    >
      <TouchableOpacity onPress={() => toggle(businessId)}>
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

  const textLimit = (screenWidth / maxScreenSize / 0.93) * 26;

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
          source={require("../../../assets/images/supermarket-435452_1920.png")}
          style={styles.image}
        />

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
          <Text
            style={styles.store_name}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {minimizeTextByCharacters(storeName, textLimit)}
          </Text>

          <Text style={styles.second_desc}>
            ${storeDeliveryFee.toFixed(2)} Delivery Fee <DotIcon />{" "}
            {storeDeliveryTimeMins} mins
          </Text>
          <View style={styles.store_rating}>
            <Text style={styles.store_rating_text}>{storeRating}</Text>
            <AntDesign name="star" size={12} color="gold" />
          </View>
          <Text style={styles.second_desc}>56 orders placed</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreFavouritesCard;
