import { Animated } from "react-native"
import { useState, useRef } from "react"
import MapView, { Marker, PROVIDER_GOOGLE, LatLng, Region } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions';
import styles, { mapStyle } from "../styles/mapStyle"
import { centralizeTrip, getUserRegion, handleRegionChangeComplete } from "../functions/map_functions"
import { useStoreMapContext } from "../contexts/StoreMapContext"
import { theme } from "../../../constants/theme";
import { StoreMapViewProps } from "../props"
import StoreMarker from "./StoreMarker"
import Constants from "expo-constants"

const extra = Constants.expoConfig!.extra!

const StoreMapView = ({ stores, userCoordinates, loading }: StoreMapViewProps) => {
    const mapRef = useRef<MapView>(null);
    const markerOpacity = useRef(new Animated.Value(0)).current;
    const [polylineCoordinates, setPolylineCoordinates] = useState<Array<{ latitude: number; longitude: number }>>([]);
    const [destination, setDestination] = useState<LatLng>(userCoordinates);
    const { selectedStore, setSelectedStore } = useStoreMapContext();

    // have a use effect, if the store preview modal is closed, it should
    // focus on the user's location, 
    // the dependency will be the selectedStore

    const centralizeMarker = (marker:LatLng) => {
        setDestination(marker);
    
        centralizeTrip(
            mapRef,
            marker,
            userCoordinates,
            polylineCoordinates
        );
        return;
    };

    const focusOnUser = () => {
        centralizeMarker(userCoordinates);
    };

    const handleMarkerPress = async (id: string, marker: LatLng) => {
        const found = stores.find(store => store.id === id);
        if (found) {
            setSelectedStore(found);
            centralizeMarker(marker);
            // navigation.navigate("StoreProfileScreen", {store, hasBackButton: true})
        }
        else {
            setSelectedStore(null);
        }
    };

    const RenderStoreMarkers = () => {
        if (loading) 
            return null;

        return (
            <>
                {stores.map((store) => (
                    <StoreMarker
                        key={store.id}
                        store={store}
                        storeImg={require("../../../assets/images/store-2.png")}
                        onPress={() => handleMarkerPress(
                            store.id,
                            {latitude: store.address.latitude, longitude: store.address.longitude}
                        )}
                    />
                ))}
            </>
        )
    }

    const RenderTripRoute = () => {
        if (destination === userCoordinates)
            return null;

        return (
            <MapViewDirections
                origin={userCoordinates}
                destination={destination}
                apikey={extra.GOOGLE_API_KEY}
                strokeWidth={4}
                strokeColor={theme.colors.primary}
                onReady={route => setPolylineCoordinates(route.coordinates)}
            />
        )
    }

    const RenderUserMarker = () => {
        return (
            <Marker
                coordinate={{latitude: userCoordinates.latitude, longitude: userCoordinates.longitude}}
                onPress={() => centralizeMarker(userCoordinates)}
            />
        )
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            ref={mapRef}
            initialRegion={getUserRegion(userCoordinates)}
            onRegionChangeComplete={(region: Region) => handleRegionChangeComplete(region, markerOpacity)}
            style={styles.map}
            onPress={focusOnUser}
        >
            { RenderStoreMarkers() }
            { RenderUserMarker() }
            { RenderTripRoute() }
        </MapView>
    )
}

export default StoreMapView
