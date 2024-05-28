import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#B2B2B2",
      borderRadius: 5,
      padding: 10,
      backgroundColor: "#0000000a",
    },
    input: {
      flex: 1,
      marginLeft: 10,
      // color: "#B2B2B2",
      color: "#000000",
      // fontFamily: theme.fontFamily.regular,
      fontSize: 16,
    },
});
