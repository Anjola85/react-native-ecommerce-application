import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { storeSearchBarStyles as styles } from "../../styles";
import { router } from "expo-router";

const StoreSearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const goToSearchScreen = () => {
    router.push("/home/search");
  };

  return (
    <TouchableOpacity
      style={styles.searchSection}
      onPress={goToSearchScreen}
      activeOpacity={1}
    >
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={goToSearchScreen}
        activeOpacity={1}
      >
        <AntDesign name="search1" size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default StoreSearchBar;
