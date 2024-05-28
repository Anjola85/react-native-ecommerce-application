import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { storeSearchBarStyles as styles } from "../../styles";

const StoreSearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <Text style={styles.input}>Search stores, groceries and more</Text>
      <TouchableOpacity style={styles.searchIcon}>
        {/* <Ionicons name="ios-search" size={20} color="#000" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default StoreSearchBar;
