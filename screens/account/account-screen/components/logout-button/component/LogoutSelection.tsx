import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import {
  clearCache,
  clearTempCache,
} from "../../../../../../store/cache/cache";

interface LogoutSelectionProps {
  cancelLogoutFunc: () => void;
  logoutFunc: () => void;
}

const screenWidth = Dimensions.get("window").width;

const scale = screenWidth / 430;

const LogoutSelection: React.FC<LogoutSelectionProps> = ({
  cancelLogoutFunc,
  logoutFunc,
}) => {
  function cancelLogout() {
    cancelLogoutFunc();
  }

  async function logout() {
    await clearCache();
    router.replace("/(auth)/login");
    logoutFunc();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Out</Text>
      <Text style={{ marginBottom: 20, alignSelf: "center" }}>
        Are you sure you want to log out?
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#EBEBEB" }]}
          onPress={cancelLogout}
        >
          <Text style={styles.button_text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={[styles.button_text, { color: "#fff" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18 * scale,
    fontFamily: "PoppinsMedium",
    marginBottom: 10,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#204B38",
    paddingVertical: `${4.5 * scale}%`,
    width: "100%",
    borderRadius: 10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  button_text: {
    color: "#333333",
    fontSize: 18 * scale,
    fontFamily: "PoppinsMedium",
  },
});

export default LogoutSelection;
