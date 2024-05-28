import React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "../Skeleton";

const StoreCardSkeletonSmall = () => {
    return (
        <View style={styles.skeletonContainer}>
            <Skeleton width={250} height={120} style={{borderRadius:8, marginBottom: 7}} />
            <Skeleton width={200} height={30} style={{borderRadius:3, marginBottom: 3}} />
            <Skeleton width={200} height={20} style={{borderRadius:3, marginBottom: 3}} />
            <Skeleton width={100} height={20} style={{borderRadius:3}} />
        </View>
    );
};

const styles = StyleSheet.create({
    skeletonContainer: {
        width: 250,
        height: 220,
        flexDirection: "column",
        backgroundColor: "white",
        marginBottom: 16,
    },
});

export default StoreCardSkeletonSmall;
