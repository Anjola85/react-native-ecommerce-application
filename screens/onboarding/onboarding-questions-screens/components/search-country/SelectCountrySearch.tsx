import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchCountryFlag from "./SearchCountryFlag";
import { countries } from "../../data";
import { useRouter } from "expo-router";

interface SelectCountrySearchProps {
  setCountry: (country: string) => void;
}

const SelectCountrySearch: React.FC<SelectCountrySearchProps> = ({
  setCountry,
}) => {
  // const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const router = useRouter();

  function handleCountrySelection(country: string) {
    setCountry(country);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="ios-search" size={20} color="#000" />
        <TextInput placeholder="Search Country" style={styles.searchInput} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flagsContainer}
      >
        {countries.map((country, index) => (
          <SearchCountryFlag
            country={country.name}
            key={index}
            onPress={() => handleCountrySelection(country.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 40,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, // for Android
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  flagsContainer: {
    flexDirection: "row",
  },
});

export default SelectCountrySearch;
