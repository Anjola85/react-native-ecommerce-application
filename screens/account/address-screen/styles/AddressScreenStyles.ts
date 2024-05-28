import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: "10%",
      backgroundColor: theme.colors.white,
    },
    heading: {
      fontFamily: theme.fontFamily.bold,
      textAlign: "center",
      fontSize: theme.fontSizes.medium,
      lineHeight: 20,
      marginBottom: "5%",
    },
    scroll: {
      flexgrow: 1,
      backgroundColor: theme.colors.white,
    },
    textInput_container: {
      paddingHorizontal: "5%",
    },
    back_button: {
      marginLeft: "5%",
    },
    input_box: {
      backgroundColor: theme.colors.white,
      height: 36,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: "2.5%",
      fontFamily: theme.fontFamily.medium,
      marginBottom: "6%",
    },
    sub_texts: {
      marginLeft: "4%",
    },
    defaultBorder: {
      borderColor: "rgba(0, 0, 0, 0.08)",
    },
    focusedBorder: {
      borderColor: "rgba(0, 0, 0, 0.3)",
    },
});
