import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { primaryColor } from "../../../../../constants/Colors";
import { RegionCardsProps } from "../../props";

const RegionCards: React.FC<RegionCardsProps> = ({ selection, options }) => {
  const [selected, setSelected] = React.useState<string | null>(null);

  function handleSeleted(name: string) {
    setSelected(name);
    selection(name);
  }

  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  const renderOption = ({
    item,
  }: {
    item: { id: string; name: string; image: any };
  }) => (
    <View style={[styles.optionContainer, { width: 130 * scale }]}>
      <TouchableOpacity
        style={[
          styles.imageContainer,
          {
            backgroundColor: selected === item.name ? primaryColor : "#F6F4F0",
            width: 90 * scale,
          },
        ]}
        onPress={() => handleSeleted(item.name)}
      >
        <Image source={item.image} style={styles.optionImage} />
      </TouchableOpacity>
      <Text style={styles.optionText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={options}
      renderItem={renderOption}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
      style={{ alignSelf: "center", width: "100%" }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: "#F6F4F0",
    borderRadius: 10,
    padding: 20,
    aspectRatio: 1.02,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    // // React Native doesn't support CSS box-shadow property
    // Instead, you can use elevation for Android:
    elevation: 3,
    // For iOS, you can use shadow properties:
    shadowColor: "rgba(0, 0, 0, 0.27)",
    shadowOffset: { width: 0, height: 2.192 },
    shadowOpacity: 0.27,
    shadowRadius: 8.304 / 2,
    marginBottom: 10,
  },

  optionImage: {
    width: 50,
    height: 50,
  },
  optionText: {
    fontSize: 13,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  columnWrapper: {
    // justifyContent: "space-between",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegionCards;
