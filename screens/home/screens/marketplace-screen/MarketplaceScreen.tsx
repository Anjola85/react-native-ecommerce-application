import { View } from "react-native";
import React, { useCallback, useEffect } from "react";

import { marketplaceScreenStyles as styles } from "./styles";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import MainContent from "./components/MainContent";
import { getItemFromCache } from "../../../../store/cache/cache";
import { STORES } from "../../../../store/cache/cacheKeys";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { useLocalSearchParams } from "expo-router";
import { useGlobalState } from "../../../../store/context";

const MarketplaceScreen = () => {
  const item = useLocalSearchParams();
  const [refreshing, setRefreshing] = React.useState(false);
  const [store, setStore] = React.useState<BusinessRespDto | null>(null);
  const { globalState, setGlobalState } = useGlobalState();

  console.log("item: ", item.storeId);
  // get store by id from cache or global state for testing
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      // TODO: re-fetch store items from api
      console.log("refreshing...");
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    async function fetchStoreData() {
      const stores = (await getItemFromCache(STORES)) as BusinessRespDto[];
      console.log("storessss: ", stores[0]);
      const store =
        stores && stores.find((store) => store.id === Number(item.storeId));

      if (store) {
        setStore(store);
      }
    }
    fetchStoreData();
  }, []);

  return (
    <View style={styles.container}>
      <Header storeName={store?.name as string} storeId={store?.id as number} />
      <SubHeader store={store} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          <MainContent />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default MarketplaceScreen;
