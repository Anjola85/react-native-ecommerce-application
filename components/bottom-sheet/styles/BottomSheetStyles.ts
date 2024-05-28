import { StyleSheet, Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default StyleSheet.create({
    bottomSheet: {
        position: "absolute",
        top: SCREEN_HEIGHT - 50,
        width: "100%",
        height: SCREEN_HEIGHT,
        backgroundColor: "white",
        // borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bottomSheetHeader: {
        alignItems: "center",
        paddingTop: 10,
    },
    bottomSheetHandle: {
        width: 40,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#ccc",
    },
    bottomSheetContent: {
        flex: 1,
        width: "100%",
    },
});
