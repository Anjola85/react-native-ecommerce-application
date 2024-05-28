import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        top: 0,
        zIndex: 100,
        width: "100%",
    },
    textInputContainer: {
        backgroundColor: "#0000000a",
        borderWidth: 1,
        borderColor: "#B2B2B2",
        borderRadius: 5,
        color: "#000000",
        width: "100%",
    },
    textInput: {
        height: 50,
        color: "#5D5D5D",
        width: 100,
        fontSize: 16,
    },
    selection_container: {
        width: "100%",
        flexDirection: "row",
        overflowY: "visible",
    },
    row: {
        width: "150%",
    },
    poweredContainer: {
        backgroundColor: "transparent",
        display: "none",
    },
    listView: {
        width: "120%",
    },
})
