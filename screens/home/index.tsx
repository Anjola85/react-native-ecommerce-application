/**
 * Home Screen
 * This is the main screen of the app that users see when they open the app.
 */

import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "./components/headings/Heading";
import Subheading from "./components/headings/Subheading";
import Regions from "./components/headings/Regions";
import StoresInArea from "./components/stores-list/StoresInArea";
import LiveMapAd from "./components/ads/LiveMapAd";
import GroceryStores from "./components/stores-list/GroceryStores";
import AllStores from "./components/stores-list/AllStores";
import { getItemFromCache, addToCache } from "../../store/cache/cache";
import {
  USER_HAS_ONBOARDED,
  USER_COORDINATES,
  FAVOURITE_STORES,
} from "../../store/cache/cacheKeys";
import { useRouter } from "expo-router";
import { useGlobalState } from "../../store/context";
import { useLocationService } from "../../utils/geolocation/useLocation";
import { deepEqual } from "../../utils/array-checker";
import { FavouriteRespDto } from "../../api/api-contracts/user/responses/favourite.response";
import { loadBusinessesToCache } from "../../store/functions/business";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [userHasOnboarded, setUserHasOnboarded] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const router = useRouter();
  const { location, errorMsg } = useLocationService();
  const { globalState, setGlobalState } = useGlobalState();

  useEffect(() => {
    const fetchUserHasOnboarded = async () => {
      const hasOnboarded = await getItemFromCache(USER_HAS_ONBOARDED, true);
      setUserHasOnboarded(Boolean(hasOnboarded));
    };

    fetchUserHasOnboarded();
  }, []);

  useEffect(() => {
    if (!userHasOnboarded && !redirected) {
      const timeoutId = setTimeout(() => {
        router.push("/home/first-question");
        setRedirected(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [userHasOnboarded, redirected, router]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await loadBusinessesToCache();
      console.log("refreshing...");
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (errorMsg) {
      console.log("Error getting location: ", errorMsg);
    } else if (location) {
      const userCoordinates = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      addToCache({ key: USER_COORDINATES, value: userCoordinates });
    }
  }, [location, errorMsg]);

  useEffect(() => {
    const loadFavouritesData = async () => {
      const favourites = (await getItemFromCache(
        FAVOURITE_STORES
      )) as FavouriteRespDto[];
      if (favourites && !deepEqual(favourites, globalState.favouriteStores)) {
        setGlobalState({
          ...globalState,
          favouriteStores: [...favourites],
        });
      }
    };

    loadFavouritesData();
  }, [globalState.favouriteStores, setGlobalState]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Heading />
        <Subheading />
        <Regions />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <ScrollView
          style={styles.innerScrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.innerScrollViewContainer}
        >
          {/* <InviteFriendsAd /> */}
          <StoresInArea />
          <LiveMapAd />
          <GroceryStores />
          {/* <TrendingBeautyStores /> */}
          <AllStores />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: "100%",
    flexGrow: 1,
  },
  header: {
    minHeight: 190,
    zIndex: 6,
  },
  scrollView: {
    zIndex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  innerScrollView: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  innerScrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
