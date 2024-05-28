import React, { useCallback, useImperativeHandle } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolate, Extrapolate, useAnimatedProps} from "react-native-reanimated";
import { BottomSheetProps, BottomSheetRefProps } from "./props/BottomSheetProps";
import styles from "./styles/BottomSheetStyles";

export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(({children}, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const context = useSharedValue({y: 0});

    const scrollTo = useCallback((destination: number) => {
        'worklet';

        active.value = destination !== 0;

        translateY.value = withSpring(destination, {damping: 50});
    }, []);

    const isActive = useCallback(() => {
        return active.value;
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive]);

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = {y: translateY.value};
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
            scrollTo(0)
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
            scrollTo(MAX_TRANSLATE_Y);
        }
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );

        return {
            borderRadius,
            transform: [{translateY: translateY.value}]
        }
    });

    const rBackdropStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(active.value ? 1 : 0),
        };
    }, []);

    const rBackdropProps = useAnimatedProps(() => {
        return {
            pointerEvents: active.value ? 'auto' : 'none', 
        } as any
    }, [])

    return (
        <>
            <Animated.View
                animatedProps={rBackdropProps}
                onTouchStart={() => {
                    scrollTo(0);
                }}
                style={[{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'rbg(0,0,0,0.4)',
                },
                rBackdropStyle,
            ]} 
            />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
                    <View style={styles.bottomSheetHeader}>
                        <View style={styles.bottomSheetHandle}/>
                    </View>
                    <View style={styles.bottomSheetContent}>
                    {children}
                    </View>
                </Animated.View>
            </GestureDetector>
        </>
    );
});

export default BottomSheet;
