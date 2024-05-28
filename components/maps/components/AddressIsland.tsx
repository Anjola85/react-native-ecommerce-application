import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AddressIslandProps } from "../props";
import styles from "../styles/AddressIslandStyles";

const LocationPill = ({ address, showBackButton=false, onBackButtonPress }:AddressIslandProps) => {
    return (
        <View style={styles.location_pill_container}>
            { showBackButton && <Feather name="arrow-left" size={30} color="black" style={styles.back_arrow} onPress={onBackButtonPress}/> }

            <View style={styles.location_pill}>
                <Feather name="map-pin" size={12} color="white" />
                <Text style={styles.location_pill_text}>{address}</Text>
            </View>
        </View>
    )
}

export default LocationPill
