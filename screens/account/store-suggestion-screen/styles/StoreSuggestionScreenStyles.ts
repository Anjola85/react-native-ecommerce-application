import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    back_icon: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    img_container: {

    },
    heading_text: {
        fontSize: 18,
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.black,
        textAlign: 'center',
        marginBottom: 10,
    },
    input_container: {
        width: "100%",
        marginBottom: 40,
    },
    input_wrapper: {
        marginBottom: 20,
    },
    input_label: {
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.black,
    },
    input: {
        borderWidth: 1,
        borderColor: "#B2B2B2",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#0000000a",
        color: "#000000",
        fontSize: 16,
    },
    autocomplete_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    autocomplete_text_input: {
        alignSelf: "center",
        height: 55,
        marginLeft: 10,
    },
    button: {
        width: 100,
        height: 45,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    button_text: {
        fontSize: 16,
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.white,
    },
})
