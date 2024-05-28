import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
    },
    address_container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    address: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
    },
    main_address: {
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.black,
    },
    secondary_address: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: "#B2B2B2",
    },
    info_container: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.lightGrey,
        borderRadius: 10,
        gap: 10,
        marginBottom: 40,
    },
    info_text: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.darkGrey,
        width: "90%",
    },
    btn: {
        backgroundColor: theme.colors.primary,
    },
    btn_text: {
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white,
    },
})
