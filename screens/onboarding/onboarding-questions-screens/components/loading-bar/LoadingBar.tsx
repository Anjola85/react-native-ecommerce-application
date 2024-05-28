import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { LoadingBarProps } from "../../props";

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
  // Animated value for width
  const [widthAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress, // Assuming progress is a number between 0 and 100
      duration: 500,
      useNativeDriver: false, // 'width' is not supported by native animated module
    }).start();
  }, [progress, widthAnim]);

  const widthInterpolated = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"], // Width will be between 0% and 100%
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.loadingBar, { width: widthInterpolated }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "90%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    alignSelf: "center",
  },
  loadingBar: {
    height: "100%",
    backgroundColor: "green",
    borderRadius: 5,
  },
});

export default LoadingBar;
