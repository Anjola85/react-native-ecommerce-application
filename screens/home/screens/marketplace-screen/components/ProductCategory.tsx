import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { productsData } from "../data";

interface ProductProps {
  name: string;
  price: number;
  image: any;
}

const Product: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <View
      style={{
        width: 110,
        height: 120,
      }}
    >
      <View
        style={{
          width: 90,
          height: 90,
          position: "relative",
        }}
      >
        <Image
          source={image}
          style={{
            width: 90,
            height: 90,
          }}
        />
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 3,
          }}
          intensity={15}
          tint="light"
        />
      </View>
      <Text
        style={{
          fontFamily: "PoppinsRegular",
          fontSize: 12,
          letterSpacing: 0.4,
        }}
      >
        ${price.toFixed(2)}
      </Text>
      <Text
        style={{ fontFamily: "PoppinsLight", fontSize: 9, color: "#92939C" }}
      >
        {name}
      </Text>
    </View>
  );
};

interface ProductCategoryProps {
  categoryName: string;
}
const ProductCategory: React.FC<ProductCategoryProps> = ({ categoryName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <View style={styles.products_container}>
        {productsData.map((product, index) => {
          if (product.category === categoryName) {
            return (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  products_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
    letterSpacing: 0.2,
  },
});
export default ProductCategory;
