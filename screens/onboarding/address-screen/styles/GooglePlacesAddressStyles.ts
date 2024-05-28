import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        zIndex: 100,
        width: "80%",
        alignSelf: "center",
        left: 30,
    },
    textInput: {
        height: 50,
        color: "#5D5D5D",
        backgroundColor: "transparent",
    },
    row: {
        backgroundColor: "transparent",
        width: "150%",
    },
    poweredContainer: {
        backgroundColor: "transparent",
        display: "none",
    },
    listView: {
        width: "120%",
        left: -30,
    },
})
