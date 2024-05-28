import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoreCardMedium from "../store-cards/StoreCardMedium";
import { trendingBeautyStoresStyles as styles } from "../../styles";
import { storeData } from "../../data";
import { StoreListProps } from "./props";

const Stores: React.FC<StoreListProps> = ({ data }) => {
  const cardWidth = 250;
  const marginRight = 20;
  const totalCardWidth = cardWidth + marginRight; // Total width of each card including margin
  const snapOffsets = data.map((_, index) => index * totalCardWidth); // Calculate snap offsets based on card width and index

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}
      decelerationRate="fast"
    >
      {data.map((store, index) => (
        <StoreCardMedium
          key={index}
          storeName={store.storeName}
          storeAddress={store.storeAddress}
          storeRating={store.storeRating}
          imageUri={store.imageUri}
          storeRegion={store.storeRegion}
          storeDeliveryType={store.storeDeliveryType}
          storeDistance={store.storeDistance}
          isLiked={store.isLiked}
          isNew={store.isNew}
        />
      ))}
    </ScrollView>
  );
};

const TrendingBeautyStores = () => {
  const data = storeData;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Trending Beauty Stores</Text>
      </View>
      <Stores data={storeData} />
    </View>
  );
};

export default TrendingBeautyStores;
