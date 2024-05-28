import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface LogoutButtonProps {
  logoutFunc: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ logoutFunc }) => {
  function logout() {
    logoutFunc();
  }

  return (
    <TouchableOpacity style={styles.button} onPress={logout}>
      <Text style={styles.button_text}>Log out</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
