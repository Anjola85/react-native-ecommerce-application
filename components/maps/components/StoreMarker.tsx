import React from 'react';
import { Image, StyleSheet } from "react-native";
import { Marker, LatLng } from "react-native-maps";
import { BusinessResponse } from '../../../api/api-contracts/user/responses/business.response';
import MarkerSvg from '../../../assets/svgs/MarkerSvg';

interface MarkerProps {
    storeImg: any;
    store: BusinessResponse;
    onPress?: (coordinates: LatLng) => void;
}

const StoreMarker = ({ storeImg, onPress, store }:MarkerProps) => {
    const handlePress = (coordinates: LatLng) => {
        onPress && onPress(coordinates)
    }
    const coordinates: LatLng = {
        latitude: store.address.latitude,
        longitude: store.address.longitude
    }
    return (
        <Marker
            coordinate={coordinates}
            title={store.name}
            description={store.description}
            onPress={() => handlePress(coordinates)}
        >
            <>
                <Image source={storeImg} style={styles.store_img} />
                <MarkerSvg />
            </>
        </Marker>
    )
}

const styles = StyleSheet.create({
    store_img: {
        position:'absolute',
        top: 6,
        right:10,
        borderRadius:50,
        width:60,
        height:60,
    }
})

export default StoreMarker;
