import React, { useState, useRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from "react-native";
import { NotificationSwitchProps } from "../props/NotificationSwitchProps";

const NotificationSwitch: React.FC<NotificationSwitchProps> = ({
  initialValue,
  btnFunction,
}) => {
  const value = initialValue || false;
  const [switchValue, setSwitchValue] = useState<boolean>(value);
  const toggleAnim = useRef(new Animated.Value(switchValue ? 1 : 0)).current;

  const handleToggle = () => {
    Animated.timing(toggleAnim, {
      toValue: switchValue ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    btnFunction();
    setSwitchValue(!switchValue);
  };

  const toggleStyle = {
    transform: [
      {
        translateX: toggleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [2, 22],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <View style={[styles.switch, switchValue ? styles.on : styles.off]}>
        <Animated.View style={[styles.toggle, toggleStyle]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#064E3B",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  on: {
    backgroundColor: "#064E3B",
  },
  off: {
    backgroundColor: "#C4C4C4",
  },
});

export default NotificationSwitch;
