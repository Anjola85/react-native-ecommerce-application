import React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "../Skeleton";

const SearchItemSkeleton = () => {
    return (
        <View style={styles.skeletonContainer}>
            <View style={styles.skeletonContent}>
                <Skeleton width={260} height={26} style={{borderRadius:3}} />
                <Skeleton width={180} height={18} style={{borderRadius:3}} />
            </View>
            <Skeleton width={35} height={35} style={{borderRadius:50}} />

        </View>
    );
};

const styles = StyleSheet.create({
    skeletonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingHorizontal: "5%",
        paddingVertical: "2%",
        borderBottomColor: "#F5F5F5",
    },
    skeletonContent: {
        flexDirection: "column",
        width: "80%",
        gap: 6,
    },
});

export default SearchItemSkeleton;
