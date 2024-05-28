import { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import LoadingIcon from "../../../../components/loading/spinners/LoadingIcon";
import StoreCardLarge from "../../../home/components/store-cards/StoreCardLarge";
import { SearchResultListProps } from "../props/SearchResultListProps";
import { formatDataForStoreCard } from "../functions";
import styles from "../styles/SearchResultListStyles";
import { getItemFromCache } from "../../../../store/cache/cache";
import { FAVOURITE_STORES } from "../../../../store/cache/cacheKeys";
import { useGlobalState } from "../../../../store/context";
import { FavouriteRespDto } from "../../../../api/api-contracts/user/responses/favourite.response";
import {
  addFavourite,
  removeFavourite,
} from "../../../../api/endpoints/userApi";

const SearchResultList = ({
  stores,
  onPageReload,
  userLocation,
}: SearchResultListProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<BusinessRespDto[]>(stores);
  const [userFavorites, setUserFavorites] = useState<BusinessRespDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  // const [data, setData] = useState([] as FavouriteRespDto[]);

  const { globalState, setGlobalState } = useGlobalState();

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);

    // const response = await fetch(
    // setData([...data, ...response.data]);
    setPage(page + 1);
    console.log(page);

    setIsLoading(false);
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20; // how far from the bottom
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      console.log("refreshing...");
      onPageReload && onPageReload();
    } finally {
      setRefreshing(false);
    }
  }, []);

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
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      onScroll={({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isCloseToBottom(nativeEvent)) {
          fetchData();
        }
      }}
      scrollEventThrottle={1400}
      style={{ gap: 10 }}
    >
      {data.map((item) => {
        const data = formatDataForStoreCard(
          item,
          userLocation,
          isStoreLiked(item.id)
        );
        return (
          <StoreCardLarge
            key={data.id}
            businessId={data.id}
            storeName={data.storeName}
            storeAddress={data.storeAddress}
            storeRating={data.storeRating}
            imageUri={data.imageUri}
            storeDistance={data.storeDistance}
            storeDeliveryType={data.storeBusinessType}
            storeRegion={data.storeRegion}
            isLiked={data.isLiked}
            isNew={data.isNew}
            toggle={toggleHeartPress}
          />
        );
      })}
      {isLoading ? (
        <LoadingIcon
          style={{ marginVertical: 10, alignSelf: "center" }}
          size={50}
        />
      ) : (
        <View style={{ height: 50 }} />
      )}
    </ScrollView>
  );
};

export default SearchResultList;
