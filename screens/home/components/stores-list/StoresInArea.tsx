import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { storeInAreaStyles as styles } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import StoreCardMedium from "../store-cards/StoreCardMedium";
import { StoreListProps } from "./props";
import { storeData } from "../../data";
import { useRouter } from "expo-router";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { findNearbyBusinesses } from "../../../../api/endpoints/businessApi";
import { getItemFromCache } from "../../../../store/cache/cache";
import { USER_COORDINATES } from "../../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { default_user_coordinates } from "../../../../constants/default";
import { useGlobalState } from "../../../../store/context";
import { formatDataForStoreCard } from "../../../browse/search-result-screen/functions";
import {
  addFavourite,
  removeFavourite,
} from "../../../../api/endpoints/userApi";
import { FavouriteRespDto } from "../../../../api/api-contracts/user/responses/favourite.response";

const Stores: React.FC<StoreListProps> = ({ data, userCoordinates }) => {
  const cardWidth = 250;
  const marginRight = 20;
  const totalCardWidth = cardWidth + marginRight; // Total width of each card including margin
  const snapOffsets = data.map((_, index) => index * totalCardWidth); // Calculate snap offsets based on card width and index

  const { globalState, setGlobalState } = useGlobalState();

  const isStoreLiked = (businessId: number): boolean => {
    const favouriteStores = globalState.favouriteStores;

    if (!favouriteStores) {
      console.log("favouriteStores  in Stores Area is null");
      return false;
    }

    if (favouriteStores.length === 0) {
      console.log("favouriteStores  in Stores Area is empty");
      return false;
    }

    return (
      favouriteStores?.some((item) => {
        return item.business.id === businessId;
      }) || false
    );
  };

  async function toggleHeartPress(businessId: number) {
    const favouriteStores = globalState.favouriteStores;

    const store = data.find((business) => business.id === businessId);

    console.log("store Name Found that: ", store?.name);

    if (!store || !favouriteStores) {
      console.log("store not found");
      return;
    }

    if (isStoreLiked(businessId)) {
      const newFavouriteStores = favouriteStores.filter(
        (item) => item.business.id !== businessId
      );
      await removeFavourite(businessId);
      setGlobalState({ ...globalState, favouriteStores: newFavouriteStores });
    } else {
      const favouriteStore = (await addFavourite(
        businessId
      )) as FavouriteRespDto;
      setGlobalState({
        ...globalState,
        favouriteStores: [...favouriteStores, favouriteStore],
      });
    }
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}
      decelerationRate="fast"
    >
      {data.map((storeData, index) => {
        const store = formatDataForStoreCard(
          storeData,
          userCoordinates,
          isStoreLiked(storeData.id)
        );

        return (
          <StoreCardMedium
            businessId={store.id}
            key={index}
            storeName={store.storeName}
            storeRating={Number(store.storeRating)}
            imageUri={store.imageUri}
            storeDistance={store.storeDistance}
            isLiked={store.isLiked}
            isNew={store.isNew}
            storeRegion={store.storeRegion}
            storeDeliveryType="Free delivery"
            storeAddress={store.storeAddress}
            toggle={toggleHeartPress}
          />
        );
      })}
    </ScrollView>
  );
};

const StoresInArea = () => {
  const [data, setData] = useState<BusinessRespDto[]>([] as BusinessRespDto[]);
  const [coordinates, setCoordinates] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });

  const router = useRouter();

  function goToVertical() {
    router.push({
      pathname: "/verticalscreen",
      params: { source: "/home", value: "Stores in your area" },
    });
  }

  useEffect(() => {
    async function fetchStores() {
      const userCoordinates = (await getItemFromCache(
        USER_COORDINATES
      )) as LatLng;
      setCoordinates(userCoordinates);

      const stores = await findNearbyBusinesses({
        latitude: userCoordinates.latitude || default_user_coordinates.latitude,
        longitude:
          userCoordinates.longitude || default_user_coordinates.longitude,
      });

      setData(stores.payload.result.businessList);
    }
    fetchStores();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Stores in your area</Text>
        <TouchableOpacity style={styles.arrow_btn} onPress={goToVertical}>
          <AntDesign name="arrowright" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <Stores data={data} userCoordinates={coordinates} />
    </View>
  );
};

export default StoresInArea;
