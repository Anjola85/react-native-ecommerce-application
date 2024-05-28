import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text_heading: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.black,
        marginBottom: 16,
    },
    search_bar: {
        backgroundColor: theme.colors.lightGrey,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 10,
        marginBottom: 40,
    },
    search_bar_text: {
        fontSize: theme.fontSizes.label,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.grey,
    },
    btn: {
        backgroundColor: theme.colors.primary,
    },
    btn_text: {
        fontSize: theme.fontSizes.label,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white,
    },
})
