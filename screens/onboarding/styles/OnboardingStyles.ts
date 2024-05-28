import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      paddingVertical: 30,
    },
    skip_text: {
      textAlign: "right",
      color: "#C2C2C2",
      fontSize: 14,
      fontFamily: theme.fontFamily.medium,
      fontWeight: "600",
    },
    textContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingRight: 30,
    },
    buttonContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 30,
      paddingHorizontal: 30,
  
      borderTopColor: "#E5E5E5",
      borderTopWidth: 0.2,
    },
    footer: {
      width: "100%",
      marginVertical: 20,
      textAlign: "center",
      fontWeight: "600",
      fontFamily:  theme.fontFamily.medium,
    },
    linkText: {
      color: "#A45169",
    },
    skip_button: {
        borderRadius: 50,
    },
    skip_button_text: {
        fontSize: 16,
        color: theme.colors.black,
    },
    continue_button: {
        borderRadius: 50
    },
    continue_button_text: {
        fontSize: 16,
        color: theme.colors.primary,
    },
  });
  