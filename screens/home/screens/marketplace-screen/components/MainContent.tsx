import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ProductCategorySlider from "./ProductCategorySlider";
import ProductCategory from "./ProductCategory";

const MainContent = () => {
  return (
    <ScrollView
      style={styles.scroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      <ProductCategorySlider />
      <ProductCategory categoryName="Fresh Vegetables" />
      <ProductCategory categoryName="Carbs" />
      <ProductCategory categoryName="Spices" />
      <ProductCategory categoryName="Frozen" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default MainContent;
