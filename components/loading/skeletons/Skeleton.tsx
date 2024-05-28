import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, ViewStyle, Dimensions } from "react-native";
import { SkeletonProps } from "../props/SkeletonProps";


const Skeleton = ({ width, height, style }:SkeletonProps) => {
    const shimmerAnimation = useRef(new Animated.Value(-width)).current;

    const ParseWidth = (width : number | string) => {
        if (typeof width === "string") {
            if (width.includes("%")) {
                width = width.replace("%", "");
                return (Dimensions.get("window").width * parseFloat(width)) / 100;
            }
            return parseFloat(width);
        }
        return width;
    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnimation, {
                toValue: ParseWidth(width),
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, [width]);

    return (
        <View
            style={StyleSheet.flatten([{
                width, 
                height, 
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                overflow: "hidden" 
            }, style,])}
        >
            <Animated.View 
                style={{ 
                    width: "100%",
                    height: "100%",
                    transform: [{translateX: shimmerAnimation}] 
                }}>
                <LinearGradient
                    style={{ width: "100%", height: "100%" }}
                    colors={["transparent", "rgba(0, 0, 0 ,0.05)", "transparent"]}
                    start={{ x: 1, y: 1 }}
                />
            </Animated.View>
        </View>
    );
};

export default Skeleton;
