import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StoreListProps } from "../../components/stores-list/props";
import { ScrollView } from "react-native-gesture-handler";
import StoreCardLarge from "../../components/store-cards/StoreCardLarge";
import { storeData } from "../../data";
import { allStoresStyles as styles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/header/Header";
import { useLocalSearchParams } from "expo-router";
import { formatDataForStoreCard } from "../../../browse/search-result-screen/functions";
import { useGlobalState } from "../../../../store/context";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { USER_COORDINATES } from "../../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { getItemFromCache } from "../../../../store/cache/cache";
import { default_user_coordinates } from "../../../../constants/default";
import {
  findNearbyBusinesses,
  getAllBusinesses,
} from "../../../../api/endpoints/businessApi";
import {
  addFavourite,
  removeFavourite,
} from "../../../../api/endpoints/userApi";
import { FavouriteRespDto } from "../../../../api/api-contracts/user/responses/favourite.response";

const Stores: React.FC<StoreListProps> = ({ data, userCoordinates }) => {
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

    if (!store) {
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
    <ScrollView showsHorizontalScrollIndicator={false}>
      {data.map((storeData, index) => {
        const store = formatDataForStoreCard(
          storeData,
          userCoordinates,
          isStoreLiked(storeData.id)
        );
        return (
          <StoreCardLarge
            key={index}
            businessId={store.id}
            storeName={store.storeName}
            storeAddress={store.storeAddress}
            storeRating={store.storeRating}
            imageUri={store.imageUri}
            storeRegion={store.storeRegion}
            storeDeliveryType="Free delivery"
            storeDistance={store.storeDistance}
            isLiked={store.isLiked}
            isNew={store.isNew}
            toggle={toggleHeartPress}
          />
        );
      })}
    </ScrollView>
  );
};

const VerticalScreen = () => {
  const item = useLocalSearchParams();

  const title = item.value as string;

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

      let stores = null;

      if (title === "Stores in your area") {
        stores = await findNearbyBusinesses({
          latitude:
            userCoordinates.latitude || default_user_coordinates.latitude,
          longitude:
            userCoordinates.longitude || default_user_coordinates.longitude,
        });

        setData(stores.payload.result.businessList);
      } else {
        stores = await getAllBusinesses();

        const fetchedBusinesses = stores.payload.result
          .businessList as BusinessRespDto[];

        fetchedBusinesses.sort((a, b) => {
          return Number(b.rating) - Number(a.rating);
        });
      }

      setData(stores.payload.result.businessList);
    }
    fetchStores();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Header title={title} hasButton />
        </View>
        <Stores data={data} userCoordinates={coordinates} />
      </View>
    </SafeAreaView>
  );
};

export default VerticalScreen;
