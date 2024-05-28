import { View, StyleSheet } from "react-native";
import React from "react";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { FeedbackIconContainerProps } from "../props";

const FeedbackIconContainer: React.FC<FeedbackIconContainerProps> = ({
  thumbsUp,
  thumbsDown,
  handleThumbsUp,
  handleThumbsDown,
}) => {
  const ThumbsUp = () => {
    const thumbsUpSelected = (
      <Entypo name="thumbs-up" size={26} color="black" />
    );

    const thumbsUpUnselected = (
      <FontAwesome5
        name="thumbs-up"
        size={22}
        color="black"
        onPress={handleThumbsUp}
      />
    );

    return thumbsUp ? thumbsUpSelected : thumbsUpUnselected;
  };

  const ThumbsDown = () => {
    const thumbsDownSelected = (
      <Entypo name="thumbs-down" size={26} color="black" />
    );

    const thumbsDownUnselected = (
      <Feather
        name="thumbs-down"
        size={24}
        color="black"
        onPress={handleThumbsDown}
      />
    );

    return thumbsDown ? thumbsDownSelected : thumbsDownUnselected;
  };

  return (
    <View style={styles.icon_container}>
      <ThumbsUp />
      <ThumbsDown />
    </View>
  );
};
const styles = StyleSheet.create({
  icon_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
    marginBottom: "4%",
    gap: 50,
    height: 30,
  },
});

export default FeedbackIconContainer;
