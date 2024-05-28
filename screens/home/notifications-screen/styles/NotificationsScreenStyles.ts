import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        paddingBottom: 40,
        paddingTop: 10,
    },
    heading_text: {
        fontSize: 20,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.black,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    btn: {
        margin: 10,
        backgroundColor: "white",
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    notification_list: {

    },
});