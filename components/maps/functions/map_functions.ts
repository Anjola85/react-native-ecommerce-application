import MapView, { LatLng, Region } from 'react-native-maps';
import { Animated } from 'react-native';
import { useRef, RefObject } from 'react';
import { INITIAL_ZOOM_KM } from './constants';
import { calculateDistance } from '../../../utils/geolocation/distanceKm';

export const getUserRegion = (location: LatLng): Region => {
    return {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
};

export const handleRegionChangeComplete = (region: Region, markerOpacity: Animated.Value) => {
    const isZoomedIn = calculateZoomLevel(region.latitudeDelta);
    Animated.timing(markerOpacity, {
        toValue: isZoomedIn ? 1 : 0,
        duration: 500, // Animation duration in milliseconds
        useNativeDriver: false,
    }).start();
};

const calculateZoomLevel = (latitudeDelta: number) => {
    // Approximate 10km in latitude for 10km radius
    const tenKmInLatitude = 0.09;
    const threeKmInLatitude = 0.027;
    return latitudeDelta <= tenKmInLatitude;
};

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

export const getDeltaFromKilometers = (kilometers: number): { latitudeDelta: number; longitudeDelta: number } => {
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

export const centralizeTrip = (
    mapRef: RefObject<MapView>,
    origin: LatLng,
    destination: LatLng,
    polylineCoordinates: Array<LatLng>
    ) => {
    const midpoint = calculateMidpoint(polylineCoordinates);

    if (
        !midpoint
        ||
        !destination
        ||
        destination === origin
    ) return;

    const zoom_distance = calculateDistance(origin, destination);
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
