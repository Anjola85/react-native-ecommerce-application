import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      paddingTop: 50,
    },
    text_heading: {
      fontFamily: theme.fontFamily.bold,
      fontSize: 20,
    },
    text: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 16,
    },
    pin_input: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      marginBottom: 40,
      maxWidth: 500,
    },
    pin_input_box: {
      width: "20%",
      aspectRatio: 1,
      textAlign: "center",
      backgroundColor: "#c4c4c436",
      fontSize: theme.fontSizes.subheading,
    },
    error_message: {
      color: "#9b095c",    
      fontSize: 15,
      marginBottom: 9,
      marginTop: 9,
    },
  });
