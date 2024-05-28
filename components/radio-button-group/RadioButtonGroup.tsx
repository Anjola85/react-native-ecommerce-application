import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { primaryColor } from "../../constants/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { RadioButtonProps } from "./props/radioButtonProps";

const RadioButtons: React.FC<RadioButtonProps> = ({
  onSelectOption,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  function handleOnPress(index: number) {
    setSelectedOption(index);
    const selectedOptionText = options[index];
    onSelectOption(selectedOptionText);
  }

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableWithoutFeedback
          key={index}
          style={styles.button}
          onPress={() => handleOnPress(index)}
        >
          <View style={styles.circle}>
            {selectedOption === index && <View style={styles.checkedCircle} />}
          </View>
          <Text style={styles.text}>{option}</Text>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // container styles
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: primaryColor,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
});

export default RadioButtons;
