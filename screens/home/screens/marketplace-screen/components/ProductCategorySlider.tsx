import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ProductCategorySlider = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity style={styles.product_category}>
        <Text
          style={[
            styles.product_category_text,

            {
              color: "#601124",
              fontFamily: "PoppinsMedium",
            },
          ]}
        >
          All Products
        </Text>
        <View>
          <View
            style={{
              width: 50,
              height: 3,
              backgroundColor: "#601124",
              marginTop: 5,
              marginLeft: 15,
              borderRadius: 3,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Frozen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Dairy & Eggs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Carbs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.product_category}>
        <Text style={styles.product_category_text}>Spices</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 40,
    paddingTop: 5,
    marginVertical: 20,
  },
  product_category: { marginHorizontal: 5 },
  product_category_text: { fontFamily: "PoppinsRegular", fontSize: 13 },
});

export default ProductCategorySlider;
