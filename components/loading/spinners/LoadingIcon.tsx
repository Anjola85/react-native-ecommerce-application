import { Animated, Easing, } from "react-native";
import React, { useEffect } from "react";
import { LoadingIconProps } from "../props/LoadingIconProps";
import styles from "../styles/LoadingIconStyles";

const spinner = new Animated.Value(0);

const LoadingIcon = ({ style, size, duration=1000 }: LoadingIconProps) => {

    const LoadingAnimation = () => {
        spinner.setValue(0);
        Animated.sequence([
            Animated.timing(spinner, {
                toValue: 1,
                duration: duration,
                useNativeDriver: false,
                easing: Easing.linear,
            })]).start(() => LoadingAnimation());
    };

    const spin = spinner.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        LoadingAnimation();
    }, []);

    return (
        <Animated.Image
            source={require('../../../assets/svgs/loadingSvgs/spinner.png')}
            style={[style, styles.spinner, {transform: [{rotate: spin}]}, size ? {width: size, height: size} : {width: 50, height: 50}]}
        />
    );
};

export default LoadingIcon;


/**
 * HOW TO USE THIS COMPONENT
 *
 * Example 1:
 * <LoadingIcon
 *      style={padding: 10} (optional)
 *      size={50}   -> dimensions of the spinner in pixels (optional)
 *      duration={1000}  -> duration to complete 1 animation cycle in milliseconds (optional)
 * />
 *
 * Example 2:
 * <LoadingIcon />
 * 
 */
