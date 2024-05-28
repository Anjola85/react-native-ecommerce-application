import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { allStoresStyles as styles } from "../../styles";
import StoreCardLarge from "../store-cards/StoreCardLarge";
import { ScrollView } from "react-native-gesture-handler";
import { storeData } from "../../data";
import { StoreListProps } from "./props";
import { getAllBusinesses } from "../../../../api/endpoints/businessApi";
import { USER_COORDINATES } from "../../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { getItemFromCache } from "../../../../store/cache/cache";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { useGlobalState } from "../../../../store/context";
import { formatDataForStoreCard } from "../../../browse/search-result-screen/functions";
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

    console.log("FAVOURITE STORES: ", favouriteStores);

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

    if (!store) {
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

const AllStores = () => {
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

      setData(stores.payload.result.businessList);
    }
    fetchStores();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>All Stores</Text>
      </View>
      <Stores data={data} userCoordinates={coordinates} />
    </View>
  );
};

export default AllStores;
