import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../../constants/theme";
import { MapModalStoresPageProps } from "../props";
import { STORES } from "../../../store/cache/cacheKeys";
import { isStoreOpen } from "../../../utils/time/timeUtils";
import { getItemFromCache } from "../../../store/cache/cache";
import { useStoreMapContext } from "../contexts/StoreMapContext";
import { calculateDistance } from "../../../utils/geolocation/distanceKm";
import { dummyBusinesses } from "../../../store/api/business/business_dummy_data";
import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";
import StoreCardSkeletonSmall from "../../loading/skeletons/items/StoreCardSkeletonSmall";
import MemoizedMapStoreList from "./MemoizedMapStoreList";
import styles from "../styles/MapModalStoresPageStyles";
import PillButtonGroup from "./PillButtonGroup";
import Skeleton from "../../loading/skeletons/Skeleton";

const MapModalStoresPage = ({ loading, stores, userCoordinates, onSearchIconPress, ratingFilter, onRatingsIconPress }: MapModalStoresPageProps) => {
    const [storeIndex, setStoreIndex] = useState<number>(Math.max(stores.findIndex(store => store.id === selectedStore?.id), 0));
    const [activeTab, setActiveTab] = useState<"nearby" | "open" | "ratings">("nearby");
    const [renderedStores, setRenderedStores] = useState<BusinessRespDto[]>([dummyBusinesses[0]]);
    const { selectedStore, userCity,  setSelectedStore } = useStoreMapContext();
    const [MoadalLoading, setModalLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchStores = async () => {
            const stores = await getItemFromCache(STORES) as BusinessRespDto[];
            setRenderedStores(stores);
        }
        const fetchCity = async () => {
            // fetch user city
            // setUserCity(city);
        }

        fetchStores();
        setModalLoading(false);
    }, []);

    // filter stores based on rating
    useEffect(() => {
        if (!ratingFilter)
            return;

        if(ratingFilter === -1) {
            if(stores.length === 0) {
               return;
            }
            setRenderedStores(stores);         
            return;
        }

        const byRating = (rating: string) => {
            const nRating = parseFloat(rating);
            if (isNaN(nRating)) {
                return false;
            }
            return nRating >= ratingFilter;
        }

        const filteredStores = stores.filter(store => byRating(store.rating));
        setRenderedStores(filteredStores);
    }, [ratingFilter]);


    const openStoreModal = (id: number) => {
        const found = stores.find(store => store.id === id);
        if (found) {
            setSelectedStore(found);
            setStoreIndex(stores.findIndex(store => store.id === found.id));
        }
    }

    const filterStores = (tab: "nearby" | "open" | "ratings") => {
        setActiveTab(tab);
        switch (tab) {
            case "nearby":
                // sort by distance
                const storesWithDistances = stores.map((store) => ({
                    ...store,
                    distance: calculateDistance(
                        userCoordinates, 
                        {
                            latitude: store.address.latitude,
                            longitude: store.address.longitude
                        }
                    ),
                }));
                setRenderedStores(storesWithDistances.sort((a: any, b: any) => a.distance - b.distance));
                break;
            case "open":
                // sort by open stores
                setRenderedStores(stores.filter((store: BusinessRespDto) => isStoreOpen(store)));
                break;
            case "ratings":
                // open ratings modal
                onRatingsIconPress && onRatingsIconPress();
                break;
        }
    }

    const RenderStores = () => {
        if (loading) {
            return (
                <View style={styles.loading_container}>
                    <StoreCardSkeletonSmall />
                    <StoreCardSkeletonSmall />
                </View>
            )
        }

        if (stores.length === 0) {
            return <Text style={styles.noStores}>No stores found</Text>
        }

        return (
            <MemoizedMapStoreList
              stores={renderedStores}
              onStoreCardFocus={openStoreModal}
              scrollIndex={storeIndex}
              userCoordinates={userCoordinates}
            />
        )
    }

    const getListTitle = () => {
        switch (activeTab) {
            case "nearby":
                return "Stores Nearby";
            case "open":
                return "Open Stores";
            case "ratings":
                return "Stores by Rating";
            default:
                return "Stores Nearby";
        }
    }

    const renderUserCity = () => {
        if (!userCity) {
            return <Skeleton width={150} height={30} style={{borderRadius:3, marginBottom: 6}} />
        }
        return <Text style={styles.title}>{userCity}</Text>
    }

    if (MoadalLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.content}>
            <View style={{justifyContent: "space-between", flexDirection:"row"}}>
                {renderUserCity()}
                <FontAwesome name="search" size={24} color="black" onPress={onSearchIconPress}/>
            </View>
            <PillButtonGroup onButtonPress={filterStores} theme_color={theme.colors.primary}/>
            <View style={styles.listContainer}>
                <Text style={styles.sectionTitle}>{getListTitle()}</Text>
                {RenderStores()}
            </View>
        </View>
    )
}

export default MapModalStoresPage;
