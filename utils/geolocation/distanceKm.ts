import { LatLng } from "react-native-maps";

export const calculateDistance = (p1: LatLng, p2: LatLng) => {
    const R = 6371; // Radius of Earth in km

    const lat1Rad = (p1.latitude * Math.PI) / 180;
    const lat2Rad = (p2.latitude * Math.PI) / 180;
    const lon1Rad = (p1.longitude * Math.PI) / 180;
    const lon2Rad = (p2.longitude * Math.PI) / 180;

    const dLon = lon2Rad - lon1Rad;
    const dLat = lat2Rad - lat1Rad;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    const rounded = Math.round(d * 10) / 10;

    return rounded;
}
