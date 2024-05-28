import { useEffect, useState } from "react";
import { Text, Platform } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import styles from "./styles/NotificationsScreenStyles";
import NotificationList from "./components/NotificationList";
import ManageNotifications from "./components/ManageNotifications";
import { getItemFromCache } from "../../../store/cache/cache";
import { USER_FIRST_NAME } from "../../../store/cache/cacheKeys";
import { capitalizeFirstLetter } from "../../../utils/string/stringUtils";

const NotificationsScreen = () => {
  const [firstName, setFirstName] = useState<string>("User");

  useEffect(() => {
    async function getFirstName() {
      const name = (await getItemFromCache(USER_FIRST_NAME)) as string;
      if (name) setFirstName(name);
    }
    getFirstName();
  }, []);

  const closeScreen = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Ionicons 
              name="ios-close"
              size={32}
              color="black"
              style={styles.btn}
              onPress={() => {
                router.back();
              }}
            /> */}
      {
        Platform.OS === "android" ? (
          <AntDesign 
            name="close"
            size={32}
            color="black"
            onPress={closeScreen}
            style={styles.btn}
          />
        ) : null 
      }
      <Text style={styles.heading_text}>
        Hello, {capitalizeFirstLetter(firstName)}
      </Text>
      <ManageNotifications />
      <NotificationList />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
