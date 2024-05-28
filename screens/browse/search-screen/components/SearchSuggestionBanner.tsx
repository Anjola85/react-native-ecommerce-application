import React from "react";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { getTodaysTimeObject } from "../../../../utils/time/timeUtils";
import { SearchSuggestionBannerProps } from "../props/SearchSuggestionBannerProps";
import styles from "../styles/SearchScreenStyles";

const SearchSuggestionBanner = ({ store, onPress }: SearchSuggestionBannerProps) => {
    const router = useRouter();
    const today = getTodaysTimeObject(store);

    const navigateToStore = () => {
      onPress && onPress();
        
      router.push("/home/marketplace?storeId=" + store.id);
    };

  return (
    <TouchableOpacity
      style={styles.search_result}
      onPress={() => navigateToStore()}
    >
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text style={styles.result_heading} numberOfLines={1}>
          {store.name}
        </Text>
        <Text style={styles.result_subheading}>
         {`${today?.open_time?.toString()} - ${today?.close_time?.toString()}`}
        </Text>
      </View>
      <View style={styles.search_suggestion_image_container}>
        <Image
          source={require(`../data/store-img1.png`)}
          style={styles.search_suggestion_image}
        />
        <Feather
          name="chevron-right"
          size={22}
          color="rgba(29, 29, 53, 0.81)"
        />
      </View>
    </TouchableOpacity>
  );
}

export default SearchSuggestionBanner;
