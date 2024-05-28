import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 30,
      height: 42,
      width: "100%",
      marginBottom: "4%",
      alignItems: "center",
      paddingLeft: "5%",
      paddingRight: "5%",
      borderWidth: 1,
      borderColor: "#878787",
    },
    input: {
      flex: 1,
      marginLeft: "2%",
      color: "#878787",
    },
    icon: {
      marginLeft: "5%",
      transform: [{ rotate: "90deg" }],
    },
  });
  