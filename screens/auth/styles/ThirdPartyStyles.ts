import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
  signup_buttons: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
  },
  signup: {
    backgroundColor: "#fff",
    width: "70%",
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 10,
  },
  signup_text: {
    color: "#1D1D35",
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  text: {
    fontFamily: theme.fontFamily.medium,
    color: "#000",
    fontSize: 17,
  },
});
