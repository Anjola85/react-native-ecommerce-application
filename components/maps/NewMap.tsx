import { useState, useEffect } from "react";
import { MapProps } from "./props";
import { router } from "expo-router";
import { LatLng } from "react-native-maps";
import { View, Text, Animated } from "react-native";
import { getItemFromCache } from "../../store/cache/cache";
import { StoreMapContext } from "./contexts/StoreMapContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { default_user_coordinates } from "../../constants/default";
import { loadBusinessesToCache } from "../../store/functions/business";
import { STORES, USER_COORDINATES } from "../../store/cache/cacheKeys";
import { getAddressFromCoordinates } from "../../utils/address/addressUtils";
import { BusinessRespDto as BusinessResponse } from "../../api/api-contracts/user/responses/business.response";
import AddressIsland from "./components/AddressIsland";
import StoreMapModal from "./components/StoreMapModal";
import StoreMapView from "./components/StoreMapView";
import styles from "./styles/mapStyle";

const Map = ({ showBackButton = true }: MapProps) => {
  const [userStreet, setUserStreet] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [stores, setStores] = useState<BusinessResponse[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [assetsLoading, setAssetsLoading] = useState<boolean>(true);
  const [selectedStore, setSelectedStore] = useState<BusinessResponse | null>(null);
  const [userCoordinates, setUserCoordinates] = useState<LatLng>(default_user_coordinates)
  const [showAddressPill, setShowAddressPill] = useState<boolean>(false);
  const slideAnimation = new Animated.Value(-100);

  useEffect(() => {
    const fetchEssentialInformation = async () => {
      // fetch user location (location services)
      const cood = (await getItemFromCache(USER_COORDINATES)) as LatLng;
      if (cood) {
        setUserCoordinates(cood);
      }
      // fetch user address
      const fetchedAddress = await getAddressFromCoordinates(userCoordinates.latitude, userCoordinates.longitude);
      if (fetchedAddress) {
        setUserStreet(fetchedAddress.street || "");
        setUserCity(fetchedAddress.district || fetchedAddress.city || "");
        setShowAddressPill(true); 
      }
      setPageLoading(false);
    };
    const fetchStores = async () => {
      let stores: BusinessResponse[] = (await getItemFromCache(
        STORES
      )) as BusinessResponse[];
      if (!stores) {
        loadBusinessesToCache();
        stores = ((await getItemFromCache(STORES)) as BusinessResponse[]) || [];
      }
      setStores(stores);
      setAssetsLoading(false);
    };
    fetchEssentialInformation();

    fetchStores();
  }, []);

  useEffect(() => {
    if (showAddressPill) {
    Animated.timing(slideAnimation, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
    }
  }, [showAddressPill]);

  if (pageLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <StoreMapContext.Provider value={{ selectedStore, setSelectedStore, userCity, setUserCity }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <AddressIsland
            showBackButton={showBackButton}
            address={userStreet}
            onBackButtonPress={() => router.back()}
          />
          <StoreMapView
            stores={stores}
            loading={assetsLoading}
            userCoordinates={userCoordinates}
          />
          <StoreMapModal
            stores={stores}
            loading={assetsLoading}
            userCoordinates={userCoordinates}
          />
        </View>
      </BottomSheetModalProvider>
    </StoreMapContext.Provider>
  );
};

export default Map;
