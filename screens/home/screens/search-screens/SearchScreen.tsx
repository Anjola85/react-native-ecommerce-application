import { View, TouchableOpacity, StyleSheet } from "react-native";
import SearchScreen from "../../../browse/search-screen/SearchScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeSearchScreen = () => {
  const goBack = function () {
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        {/* <Ionicons name="ios-close" size={25} color="black" /> */}
        <AntDesign name="close" size={20} color="black" />
      </TouchableOpacity>
      <SearchScreen searchResultsLink="/home/searchresults" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  button: {
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: -30,
    zIndex: 1,
  },
});

export default HomeSearchScreen;
