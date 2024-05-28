import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        paddingBottom: 20,
    },
    image: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 80,
        objectFit: "cover",
    },
});
