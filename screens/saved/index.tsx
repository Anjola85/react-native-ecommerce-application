import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { storeData } from "../home/data";
import StoreCardLarge from "../home/components/store-cards/StoreCardLarge";
import { savedStyles as styles } from "./styles";
import NoFavouritesYet from "./components/NoFavouritesYet";
import Header from "../../components/header/Header";
import StoreFavouritesCard from "./components/StoreFavouritesCard";
import { useRouter } from "expo-router";
import { useGlobalState } from "../../store/context";
import { getItemFromCache } from "../../store/cache/cache";
import { FAVOURITE_STORES } from "../../store/cache/cacheKeys";
import { BusinessRespDto } from "../../api/api-contracts/user/responses/business.response";
import { FavouriteRespDto } from "../../api/api-contracts/user/responses/favourite.response";
import { capitalizeFirstLetter } from "../../utils/string/stringUtils";
import { deepEqual } from "../../utils/array-checker";
import { addFavourite, removeFavourite } from "../../api/endpoints/userApi";
import { formatDataForStoreCard } from "../browse/search-result-screen/functions";

const SavedScreen = () => {
  // const data: any[] = [];
  // const data = storeData;
  // const [data, setData] = useState([] as FavouriteRespDto[]);

  const { globalState, setGlobalState } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    async function loadFavouritesData() {
      const favourites = (await getItemFromCache(
        FAVOURITE_STORES
      )) as FavouriteRespDto[];

      const cacheFavouritesAndGlobalStateIsSame = deepEqual(
        favourites,
        globalState.favouriteStores
      );

      if (favourites && !cacheFavouritesAndGlobalStateIsSame) {
        const newState = { ...globalState, favouriteStores: [...favourites] }; // Spread the array and map its elements to ensure a deep copy

        setGlobalState(newState);
      } else {
        console.log("no change in favourites");
      }
    }

    loadFavouritesData();
  }, [globalState.favouriteStores]);

  // TODO: favourites error: .filter is not a function
  const recentlyAddedData = globalState.favouriteStores.filter(
    (store) => store.updatedAt > Date.now()
  );

  function handlePress() {
    router.push("/account/marketplace");
  }

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

    const store = favouriteStores.find(
      (business) => business.business.id === businessId
    );

    console.log("store Name Found that: ", store?.business.name);

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

  const hasRecentlyAdded = recentlyAddedData.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Header title="Favourites" hasButton />
      </View>

      {globalState.favouriteStores && globalState.favouriteStores.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View>
            {hasRecentlyAdded && (
              <>
                <Text style={styles.subheading}>Recently added</Text>
                {recentlyAddedData
                  .map((storeData, index) => {
                    const store = formatDataForStoreCard(
                      storeData.business,
                      undefined,
                      isStoreLiked(storeData.business.id)
                    );
                    return (
                      <StoreFavouritesCard
                        businessId={store.id}
                        key={index}
                        storeName={capitalizeFirstLetter(store.storeName)}
                        storeRating={Number(store.storeRating)}
                        imageUri={store.imageUri}
                        storeRegions={store.regions}
                        storeDistance={store.storeDistance}
                        storeDeliveryFee={0.99}
                        isLiked={store.isLiked}
                        isNew={store.isNew}
                        // storeDeliveryTimeMins={store.r}
                        onCardPress={handlePress}
                        toggle={toggleHeartPress}
                      />
                    );
                  })
                  .filter((store) => store.props.isLiked === true)}
                <Text style={styles.subheading}>More Favourites</Text>
              </>
            )}
            {globalState.favouriteStores
              .map((storeData, index) => {
                const store = formatDataForStoreCard(
                  storeData.business,
                  undefined,
                  isStoreLiked(storeData.business.id)
                );
                return (
                  <StoreFavouritesCard
                    businessId={store.id}
                    key={index}
                    storeName={capitalizeFirstLetter(store.storeName)}
                    storeRating={Number(store.storeRating)}
                    imageUri={store.imageUri}
                    storeRegions={store.regions}
                    storeDistance={store.storeDistance}
                    storeDeliveryFee={0.99} // HARDCODED TODO
                    isLiked={store.isLiked}
                    isNew={store.isNew}
                    storeDeliveryTimeMins={30} // HARDCODED TODO
                    onCardPress={handlePress}
                    toggle={toggleHeartPress}
                  />
                );
              })
              .filter((store) => store.props.isLiked === true)}
          </View>
        </ScrollView>
      ) : (
        <NoFavouritesYet />
      )}
    </SafeAreaView>
  );
};

export default SavedScreen;
