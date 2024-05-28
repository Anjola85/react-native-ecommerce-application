import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { DismissKeyboardProps } from "./props";

const DismissKeyboardView: React.FC<DismissKeyboardProps> = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
