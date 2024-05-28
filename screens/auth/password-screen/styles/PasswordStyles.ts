import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

const margin_left = "5%";

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#fff",
    },
    back_button: {
      marginLeft: margin_left,
      marginBottom: "2%",
    },
    text: {
      color: "#000",
      fontSize: theme.fontSizes.medium,
    },
    text_heading: {
      fontFamily: theme.fontFamily.bold,
      fontSize: theme.fontSizes.large,
      marginBottom: "1.5%",
      lineHeight: 26,
    },
    content: {
      marginLeft: margin_left,
      marginBottom: "20%",
    },
    button_container: {
      marginLeft: margin_left,
    },
    continue_button: {
        backgroundColor: theme.colors.primary,
        width: "90%",
        maxWidth: 400,
        borderRadius: 7,
    },
    form_input: {
        marginBottom: 25,
        width: "90%",
        maxWidth: 400,
    },
    error_message: {
        color: "#9b095c",    
        fontSize: 15,
        marginBottom: 9,
        marginTop: 9,
    },
  });
