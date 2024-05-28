import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import StoreCardSmall from "../store-cards/StoreCardSmall";
import { AntDesign } from "@expo/vector-icons";
import { groceryStoresStyles as styles } from "../../styles";
import { storeData } from "../../data";
import { StoreListProps } from "./props";
import { useRouter } from "expo-router";
import { getItemFromCache } from "../../../../store/cache/cache";
import { USER_COORDINATES } from "../../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { getAllBusinesses } from "../../../../api/endpoints/businessApi";
import { formatDataForStoreCard } from "../../../browse/search-result-screen/functions";

const Stores: React.FC<StoreListProps> = ({ data, userCoordinates }) => {
  const cardWidth = 160;
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
      {data.map((storeData, index) => {
        const store = formatDataForStoreCard(storeData, userCoordinates, false);
        return (
          <StoreCardSmall
            key={index}
            businessId={store.id}
            storeName={store.storeName}
            storeRating={store.storeRating}
            smallImageUri={store.smallImageUri}
            imageUri={store.imageUri}
            storeRegion={store.storeRegion}
            storeDistance={store.storeDistance}
          />
        );
      })}
    </ScrollView>
  );
};

const GroceryStores = () => {
  const [data, setData] = useState<BusinessRespDto[]>([] as BusinessRespDto[]);
  const [coordinates, setCoordinates] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    async function fetchStores() {
      const userCoordinates = (await getItemFromCache(
        USER_COORDINATES
      )) as LatLng;
      setCoordinates(userCoordinates);

      const stores = await getAllBusinesses();

      const fetchedBusinesses = stores.payload.result
        .businessList as BusinessRespDto[];

      fetchedBusinesses.sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });

      setData(fetchedBusinesses);
    }
    fetchStores();
  }, []);

  const router = useRouter();

  function goToVertical() {
    router.push({
      pathname: "/verticalscreen",
      params: { source: "/home", value: "Grocery stores" },
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Popular Grocery Stores</Text>
        <TouchableOpacity style={styles.arrow_btn} onPress={goToVertical}>
          <AntDesign name="arrowright" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <Stores data={data} userCoordinates={coordinates} />
    </View>
  );
};

export default GroceryStores;
