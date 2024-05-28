import React from "react";
import { View, useWindowDimensions } from "react-native";
import { SliderItemProps } from "../props/SliderItemProps";
import styles from "../styles/SliderItemStyles";



const SliderItem = ({ item }: SliderItemProps) => {
  const { width } = useWindowDimensions();
  const ImageComponent = item.image;
  const TitleComponent = item.title;

  const scale = width / 150;

  return (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <ImageComponent width={scale * 99} height={scale * 99 + 50} />
      </View>
    </View>
  );
};

export default SliderItem;
