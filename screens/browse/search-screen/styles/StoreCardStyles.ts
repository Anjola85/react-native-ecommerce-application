import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "#fff",
      width: "100%",
      height: 170,
      borderRadius: 5,
      borderColor: "#f2f2f2",
      borderWidth: 1,
      marginBottom: 20,
    },
    store_info: {
      display: "flex",
      maxWidth: "100%",
    },
    heading: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },
    store_content: {
      paddingHorizontal: 10,
    },
    tag: {
      borderRadius: 20,
      backgroundColor: "#1D1D35",
      paddingVertical: 3,
      paddingHorizontal: 10,
    },
    content_tags: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
});
