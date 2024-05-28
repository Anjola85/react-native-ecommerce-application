import { Platform, StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: "25%",
        backgroundColor: "#fff",
    },
    container: {
        borderColor: "#E5E5E5",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#FAFAFA",
        paddingVertical: 20,
        height: "100%",
        width: "100%",
        position: "relative",
        flexGrow: 1,
    },
    back_button: {
        backgroundColor: "#FBFBFB",
        marginLeft: "2%",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: "6%",
        fontFamily: theme.fontFamily.bold,
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
    },
    btn_text: {
        fontFamily: theme.fontFamily.medium,
    },
    btn_container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
    },
    input_box: {
        backgroundColor: theme.colors.white,
        height: 55,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1,
        paddingHorizontal: "2.5%",
        fontFamily: theme.fontFamily.medium,
    },
    back_arrow: {
      position: "absolute",
      top: "5%",
      left: "2%",
      zIndex: 1,
    },
    button: {
      backgroundColor: "white",
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
})
