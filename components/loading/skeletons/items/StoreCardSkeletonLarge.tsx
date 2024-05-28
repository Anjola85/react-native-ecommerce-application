import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Skeleton from "../Skeleton";

interface StoreSkeletonProps {
    style?: Record<string, unknown>;
}
const StoreCardSkeletonLarge = ({ style }:StoreSkeletonProps) => {
    const width = Dimensions.get("window").width;
    return (
        <Skeleton width={width - 50} height={170} style={{borderRadius:8, ...style}} />   
    )
}

export default StoreCardSkeletonLarge
