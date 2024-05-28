import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../../../constants/theme";
import { formatAddress } from "../../../../utils/address/addressUtils";
import { minimizeTextByCharacters } from "../../../../utils/string/stringUtils";
import { StoreCardProps } from "../props/StoreCardProps";
import styles from "../styles/StoreCardStyles";

const StoreCard: React.FC<StoreCardProps> = ({ store, onPress }) => {
  const {
    id,
    storeName,
    storeAddress,
    storeOpeningHours,
    storeClosingHours,
    storeDistance,
    storeImage,
    storeCategory,
    storeRating,
    liked,
  } = store;

  //   const {
  //     addFavouriteStoreToFavouritesCache,
  //     removeFavouriteStoreFromFavouritesCache,
  //     getFavouriteStoreFromFavouritesCache,
  //   } = userData();

  //   const setStoreLikes = useStores((state: any) => state.setStoreLikes);

  function handleLike() {
    // if (!liked) {
    //   addFavouriteStoreToFavouritesCache(store);
    // } else {
    //   removeFavouriteStoreFromFavouritesCache(id);
    // }
    // setStoreLikes(id);
  }

  const StoreImage = (
    <View style={{ marginBottom: 5 }}>
      {/* <CustomImage
        imageSource={storeImage}
        style={[
          {
            width: "100%",
            height: 110,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginBottom: 5,
          },
        ]}
        imagePress={handleStoreProfile}
      /> */}
      <Image
        source={storeImage}
        style={{
          width: "100%",
          height: 110,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginBottom: 5,
        }}
      />
      {liked ? (
        <Entypo
          name="heart"
          size={20}
          color="red"
          style={{
            position: "absolute",
            right: 5,
            top: 0,
            borderRadius: 50,
            padding: 5,
          }}
          onPress={handleLike}
        />
      ) : (
        <Entypo
          name="heart-outlined"
          size={20}
          color="#ffffff"
          style={{
            position: "absolute",
            right: 5,
            top: 0,
            padding: 5,
          }}
          onPress={handleLike}
        />
      )}
    </View>
  );

  const StoreDistance = (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Entypo
        name="location"
        size={theme.fontSizes.small}
        color={theme.colors.primary}
      />
      <Text
        style={{ color: theme.colors.primary, fontSize: theme.fontSizes.small }}
      >
        {storeDistance}
      </Text>
    </View>
  );

  const StoreNameAndDistance = (
    <View style={styles.heading}>
      <Text
        style={{
          fontSize: theme.fontSizes.medium,
          fontFamily: theme.fontFamily.medium,
          width: "90%",
        }}
      >
        {minimizeTextByCharacters(storeName, 33)}
      </Text>
      {StoreDistance}
    </View>
  );

  const StoreRating = (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Text style={{ fontSize: 10 }}>{Number(storeRating).toFixed(1)}</Text>
      <Entypo
        name="star"
        size={12}
        color={theme.colors.gold}
        style={{ marginLeft: 3 }}
      />
    </View>
  );

  const Address = (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "#A6A6A6", fontSize: 12 }}>
        {formatAddress(storeAddress).split(",")[0]}
      </Text>
      {StoreRating}
    </View>
  );

  const ContentHeading = (
    <View style={styles.store_info}>
      {StoreNameAndDistance}
      {Address}
    </View>
  );

  const StoreContent = (
    <View style={styles.store_content}>{ContentHeading}</View>
  );

  function handleStoreProfile() {
    if (onPress) onPress();
    else
      console.log(
        "Function handleStoreProfile() not implemented in PopularStoreCard.tsx"
      );
  }
  return (
    <TouchableOpacity style={styles.background} onPress={handleStoreProfile}>
      {StoreImage}
      {StoreContent}
    </TouchableOpacity>
  );
};

export default StoreCard;
