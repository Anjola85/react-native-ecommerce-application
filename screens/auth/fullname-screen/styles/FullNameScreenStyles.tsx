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
      fontFamily: theme.fontFamily.medium,
      color: "#000",
      fontSize: theme.fontSizes.medium,
    },
    text_heading: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.large,
      fontWeight: "700",
      lineHeight: 26,
      marginBottom: "1%",
    },
    text_subheading: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.small,
      lineHeight: 14,
    },
    title: {
      marginBottom: "5%",
    },
    content: {
      marginLeft: margin_left,
    },
    input_title: {
      marginBottom: "1%",
      fontWeight: "400",
      fontSize: theme.fontSizes.medium,
    },
    button_container: {
      marginLeft: margin_left,
      marginTop: "10%",
    },
    continue_button: {
        backgroundColor: theme.colors.primary,
        width: "90%",
        maxWidth: 400,
        borderRadius: 7,
    },
    error_message: {
        color: "#9b095c",    
        fontSize: 15,
        marginBottom: 9,
        marginTop: 9,
    },
  });
