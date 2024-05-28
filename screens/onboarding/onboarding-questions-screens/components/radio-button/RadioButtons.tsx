import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { RadioButtonProps } from "../../../../../components/radio-button-group/props/radioButtonProps";
import { primaryColor } from "../../../../../constants/Colors";

const screenWidth = Dimensions.get("window").width;

const scale = screenWidth / 430;

const RadioButtons: React.FC<RadioButtonProps> = ({
  onSelectOption,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  function handleOnPress(index: number) {
    setSelectedOption(index);
    const selectedOptionText = options[index].title;
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
          <View style={{ maxWidth: "98%" }}>
            <View style={styles.content_container}>
              <Image source={option.image} style={[styles.optionImage]} />
              <View style={styles.text_container}>
                <Text style={[styles.text_heading, { fontSize: 13 * scale }]}>
                  {option.title}
                </Text>
                <Text style={[styles.text, { fontSize: 11 * scale }]}>
                  {option.sub_title}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.circle, { width: 20 * scale, height: 20 * scale }]}
          >
            {selectedOption === index && <View style={styles.checkedCircle} />}
          </View>
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
    // justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "rgba(196, 196, 196, 0.21)",
    borderRadius: 12,

    height: 110,
  },
  content_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_container: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "85%",
  },
  text_heading: {
    fontFamily: "PoppinsSemiBold",
    color: "#333",
    letterSpacing: 0.3,
    fontSize: 13,
    marginBottom: 5,
  },
  text: {
    fontFamily: "PoppinsLight",
    fontSize: 11,
    lineHeight: 20,
    letterSpacing: 0.5,
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

  optionImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default RadioButtons;
