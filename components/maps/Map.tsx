
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, Platform , TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import MapView, { Marker, PROVIDER_GOOGLE, Region, LatLng } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import StoreMarker from './components/StoreMarker';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Feather, FontAwesome } from '@expo/vector-icons';
import PillButtonGroup from './components/PillButtonGroup';
import SearchScreen from '../../screens/browse/search-screen/SearchScreen';
import StoreProfileScreen from '../../screens/browse/store-profile-screen/StoreProfileScreen';
import MemoizedMapStoreList from './components/MemoizedMapStoreList';
import styles, { mapStyle } from './styles/mapStyle';
import { isStoreOpen } from '../../utils/time/timeUtils';
import { calculateDistance } from '../../utils/geolocation/distanceKm';
import { BusinessResponse } from '../../api/api-contracts/user/responses/business.response';
import AddressIsland from './components/AddressIsland';
import StarFiltering from './components/StarFiltering';
import StoreCardSkeletonSmall from '../loading/skeletons/items/StoreCardSkeletonSmall';
import { theme } from '../../constants/theme';
import CustomBottomSheet from '../../components/bottom-sheet/BottomSheet';
import { BottomSheetRefProps } from '../bottom-sheet/props/BottomSheetProps';
import { MapProps } from './props';
import { getAllBusinesses } from '../../api/endpoints/businessApi';
import { getItemFromCache } from '../../store/cache/cache';
import { STORES } from '../../store/cache/cacheKeys';
import Constants from "expo-constants";
const extra = Constants.expoConfig!.extra!;

const theme_color: string = theme.colors.primary;



const Map = ({ showBackButton }:MapProps) => {
    const router = useRouter();
    const [storePage, setStorePage] = useState(true);
    const [searchPage, setSearchPage] = useState(false);
    const [modalLevel, setModalLevel] = useState<string>(Platform.OS === 'ios' ? "45%" : "50%");
    const [stores, setStores] = useState<BusinessResponse[]>([]);

    const mapRef = React.useRef<MapView>(null);

    const INITIAL_ZOOM_KM = 15;

    const userLocation: LatLng = {
        latitude: 43.728576551969574, 
        longitude: -79.42554837092757
    }
    const MapRegion = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.18156051149883723, 
        longitudeDelta: 0.12127574533224106,
    };

    const userRegion = {
        latitude: userLocation.latitude - getDeltaFromKilometers(INITIAL_ZOOM_KM).latitudeDelta / 5, 
        longitude: userLocation.longitude,
        ...getDeltaFromKilometers(INITIAL_ZOOM_KM), // Adjust as needed
    }

    const [destination, setDestination] = useState<LatLng>(userLocation);
    const [storeIndex, setStoreIndex] = useState<number>(0);

    const [currentRegion, setCurrentRegion] = useState<Region>(userRegion);

    const markerOpacity = useRef(new Animated.Value(0)).current;


    const calculateZoomLevel = (latitudeDelta: number) => {
      // Approximate 10km in latitude for 10km radius
      const tenKmInLatitude = 0.09;
      const threeKmInLatitude = 0.027;
      return latitudeDelta <= tenKmInLatitude;
    };
  
    const handleRegionChangeComplete = (region: Region) => {
    //   setCurrentRegion(region); 
    // Commented out to prevent the map from moving when the user moves,
    // TODO: The stores are re rendered when the user drags the map which is undesired.

        const isZoomedIn = calculateZoomLevel(region.latitudeDelta);
        Animated.timing(markerOpacity, {
            toValue: isZoomedIn ? 1 : 0,
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: false,
        }).start();
    };

    const handleMarkerPress = async (index: number, marker: LatLng) => {
        if (index < 0 || index >= renderedStores.length) return;
        
        if (index === storeIndex) {
            const store = renderedStores[index];
            // navigation.navigate("StoreProfileScreen", {store, hasBackButton: true})
        }
        setStoreIndex(index);
        centralizeMarker(marker);
    }

    const centralizeMarker = (marker:LatLng) => {
        setDestination(marker);

        centralizeTrip();
        return;
    
        // Calculate the latitudeDelta to move the marker 20% from the top of the screen
        const latitudeDelta = 0.012608852938029713;
        const longitudeDelta = 0.008427165448665619;

        // Calculate the new latitude and longitude to place the marker 20% from the top of the screen
        const latitude = marker.latitude - latitudeDelta / 5;
    
        // Animate the map to the new region
        mapRef.current?.animateToRegion({
          latitude,
          longitude: marker.longitude,
          latitudeDelta,
          longitudeDelta,
        }, 1000); // 1000ms is the animation duration in milliseconds
      };

    const handleRegionChange = (region: Region) => {
        // console.log(region);
    }
     
    const goToStorePage = () => {
        setStorePage(true);
        setSearchPage(false);
        setModalLevel(Platform.OS === 'ios' ? "45%" : "50%");
    }

    const goToSearchPage = () => {
        setStorePage(false);
        setSearchPage(true);
        setModalLevel("85%");
    }

    const goToMarker = (id: number) => {
        const store = renderedStores.find((marker) => marker.id === String(id))
        if (!store) return;
        centralizeMarker({latitude: store.address.latitude, longitude: store.address.longitude});
    }

    const filteringBottomRef = useRef<BottomSheetRefProps>(null);
    const filteringModalRef = useRef<BottomSheetModal>(null);
    const snapPointsFiltering = [0, "50%"];
    const openFilterModal = () => {
        filteringBottomRef?.current?.scrollTo(-410);
    }
    const [filterRating, setFilterRating] = useState<number>(-1);

    // Stores are rendered based on the zoom level. 
    // Currently, the zoom level is set to 50km;
    // meaning that stores will only be rendered if the user is zoomed in to 50km or closer.
    const RenderStoreMarkers = () => {
        const isZoomed = calculateZoomLevel(currentRegion?.latitudeDelta)
        return (
            <>
                {/* {isZoomed && testMarkers.map((store, index) => ( */}
                {renderedStores.map((store, index) => (
                    <StoreMarker
                        key={store.id}
                        store={store}
                        storeImg={require("../../assets/images/store-2.png")}
                        onPress={() => handleMarkerPress(
                            renderedStores.findIndex((marker) => marker.id === store.id),
                            {latitude: store.address.latitude, longitude: store.address.longitude})}
                    />
                ))}
            </>
        )
    }

    const [activeButton, setActiveButton] = useState<string>("Nearby")
    const PillButtons = () => {
        const options = [
            {
                name: "Nearby",
                component: (
                <>
                    <Feather name="navigation" size={12} color={`${activeButton === "Nearby" ? "#fff" : "#000"}`} />
                    <Text style={[styles.option_text, activeButton === "Nearby" ? {color: "#fff"} : {color: "#000"}]}>Nearby</Text>
                </>
                )
            },
            {
                name: "Open",
                component: (
                    <>
                        <Feather name="clock" size={12} color={`${activeButton === "Open" ? "#fff" : "#000"}`} />
                        <Text style={[styles.option_text, activeButton === "Open" ? {color: "#fff"} : {color: "#000"}]}>Open</Text>
                    </>
                )
            },
            {
                name: "Ratings",
                component: (
                <>
                    <Feather name="star" size={12} color={`${activeButton === "Ratings" ? "#fff" : "#000"}`} />
                    <Text style={[styles.option_text, activeButton === "Ratings" ? {color: "#fff"} : {color: "#000"}]}>Ratings</Text>
                    <Feather name="chevron-down" size={14} style={{marginLeft:6}} color={`${activeButton === "Ratings" ? "#fff" : "#000"}`} />
                </>
                )
            },
        ]
    
        const handleButtonPress = (option: string) => {
            setActiveButton(option)

            if (option === "Ratings") {
                openFilterModal();
            }
        }
    
        return (
            <View style={styles.pill_container}>
                {options.map((button, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.option, activeButton === button.name ? {backgroundColor: theme_color, borderColor: theme_color,} : { backgroundColor: "#fff", borderColor: "#EFEFEF",}]} 
                        onPress={() => handleButtonPress(button.name)}
                    >
                        {button.component}
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    // load stores
    useEffect(() => {
        const fetchStores = async () => {
            const stores: BusinessResponse[] = await getItemFromCache(STORES) as BusinessResponse[];
            if (stores) {
                setStores(stores);
            } else {
                const response = await getAllBusinesses();
                setStores(response.payload.business);
            }
        }

        setStoresLoading(true);
        fetchStores();
        setStoresLoading(false);
    }, [])

    useEffect(() => {
        const updateStoreList = async () => {
            switch (activeButton) {
                case "Nearby":
                    // Calculate distances and sort the stores
                    const storesWithDistances = stores.map((store: BusinessResponse) => ({
                        ...store,
                        distance: calculateDistance(
                            userLocation, 
                            {
                                latitude: store.address.latitude,
                                longitude: store.address.longitude
                            }
                        ),
                    }));
                    setRenderedStores(storesWithDistances.sort((a: any, b: any) => a.distance - b.distance));
                    break;
                case "Open":
                    setRenderedStores(stores.filter((store: BusinessResponse) => isStoreOpen(store)));
                    break;
                case "Ratings":
                    break;
            }
        }
   
        const updateStoreData = async () => {
            setStoresLoading(true);
            await updateStoreList();
            setStoresLoading(false);
        };
        
        updateStoreData();
    }, [activeButton])

    useEffect(() => {
        filteringModalRef.current?.present();
        // bottomSheetModalRef.current?.present();
    }, [])

    const [renderedStores, setRenderedStores] = useState<BusinessResponse[]>(stores);
    const [storesLoading, setStoresLoading] = useState<boolean>(false);

    const [storeProfile, setStoreProfile] = useState<BusinessResponse>(stores[0]);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = [0, "95%"];
    const openStoreModal = (id: string) => {
        const store = renderedStores.find((store) => store.id === id);
        if (!store) return;
        // navigation.navigate("StoreProfileScreen", {store, hasBackButton: true})
    }
    const StoresPage = () => { 
        const RenderedStores = () => {
            if (storesLoading) {
                return (
                    <View style={{overflow: "hidden",display: "flex", flexDirection: "row", gap: 20}}>
                        <StoreCardSkeletonSmall />
                        <StoreCardSkeletonSmall />
                    </View>
                )
            }

            if (renderedStores.length === 0) {
                return <Text style={styles.noStores}>No stores found</Text>
            }

            return <MemoizedMapStoreList stores={renderedStores} onStoreCardFocus={openStoreModal} scrollIndex={storeIndex} userCoordinates={userLocation}/>
        }

        return (
            <View style={styles.content}>
                <View style={{justifyContent: "space-between", flexDirection:"row"}}>
                    <Text style={styles.title}>North York</Text>
                    <FontAwesome name="search" size={24} color="black" onPress={goToSearchPage}/>
                </View>
                <PillButtons />
                <View style={styles.listContainer}>
                    {activeButton === "Nearby" && <Text style={styles.sectionTitle}>Stores Nearby</Text>}
                    {activeButton === "Open" && <Text style={styles.sectionTitle}>Open Stores</Text>}
                    {RenderedStores()}
                </View>
            </View>
        )
    }
      
    function getDeltaFromKilometers(kilometers: number): { latitudeDelta: number; longitudeDelta: number } {
        // Approximate conversions for latitude and longitude degrees per kilometer
        const degreesPerKilometer = {
            latitude: 0.009,
            longitude: 0.009,
        };
  
        const latitudeDelta = kilometers * degreesPerKilometer.latitude;
        const longitudeDelta = kilometers * degreesPerKilometer.longitude;
    
        return {
            latitudeDelta,
            longitudeDelta,
        };
    }
    const [polylineCoordinates, setPolylineCoordinates] = useState<Array<{ latitude: number; longitude: number }>>([]);

    const calculateMidpoint = (coordinates: Array<{ latitude: number; longitude: number }>) => {
        if (coordinates.length === 0) {
          return null;
        }
      
        const latSum = coordinates.reduce((sum, coord) => sum + coord.latitude, 0);
        const lonSum = coordinates.reduce((sum, coord) => sum + coord.longitude, 0);
      
        const midpoint = {
          latitude: latSum / coordinates.length,
          longitude: lonSum / coordinates.length,
        };
      
        return midpoint;
    };
    const midpoint = calculateMidpoint(polylineCoordinates);

    const centralizeTrip = async () => {
        if (
            !midpoint
            ||
            !destination
            ||
            destination === userLocation
        ) return;

        const zoom_distance = calculateDistance(userLocation, destination);
        const level = zoom_distance < INITIAL_ZOOM_KM ? INITIAL_ZOOM_KM : INITIAL_ZOOM_KM + zoom_distance
        const { latitudeDelta, longitudeDelta} = getDeltaFromKilometers(zoom_distance + 5)

        const centerRegion = {
            latitude: midpoint.latitude - latitudeDelta / 3, //Push the marker up a bit
            longitude: midpoint.longitude,
            latitudeDelta,
            longitudeDelta,
        }
        mapRef.current?.animateToRegion(centerRegion);
    }


    useEffect(() => {
        centralizeTrip();
    }, [midpoint])

    useEffect(() => {
        filterRating === -1 ?
        setRenderedStores(stores)
        :
        setRenderedStores(stores.filter((store: BusinessResponse) => parseFloat(store.rating) >= filterRating));
    }, [filterRating])

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <AddressIsland showBackButton={showBackButton} address="66 Algoma Drive" onBackButtonPress={() => router.back()}/>
                <MapView
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                ref={mapRef}
                // region={MapRegion}
                onRegionChangeComplete={handleRegionChangeComplete}
                onRegionChange={handleRegionChange}
                style={styles.map}
                initialRegion={userRegion}
                // onPress={() => setDestination(userLocation)}
                >
                    { RenderStoreMarkers() }

                    {/* User Marker  */}
                    <Marker
                        coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}}
                        onPress={() => centralizeMarker(userLocation)}
                    />
                {
                    userLocation.latitude && (
                        <MapViewDirections
                            origin={userLocation}
                            destination={destination}
                            apikey={extra.GOOGLE_API_KEY}
                            strokeWidth={4}
                            strokeColor={theme.colors.primary}
                            onReady={route => setPolylineCoordinates(route.coordinates)}
                        />
                    )  
                }
                </MapView>
                { 
                <BottomSheet snapPoints={[modalLevel]} index={0} animateOnMount={true}>
                    {storePage && <StoresPage />}
                    {searchPage && <SearchScreen wantCategories={false} onSearchClose={goToStorePage}/>}
                </BottomSheet>}
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    >
                        <StoreProfileScreen
                            business={storeProfile}
                            showBackButton={true}
                            onBackButtonPress={() => bottomSheetModalRef.current?.snapToIndex(0)}
                        />
                </BottomSheetModal>
                {/* <CustomBottomSheet ref={filteringBottomRef}>
                    <StarFiltering 
                        onClose={(rating: number) => {
                            filteringBottomRef?.current?.scrollTo(0);
                            setFilterRating(rating)
                        }} 
                    />
                </CustomBottomSheet> */}
            </View>
        </BottomSheetModalProvider>
    )
}

export default Map;
