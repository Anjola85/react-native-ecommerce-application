import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text_heading: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fontFamily.semibold,
        marginBottom: 6,
        color: theme.colors.darkRed,
    },
    text_subheading: {
        fontSize: theme.fontSizes.label,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.darkGrey,
        marginBottom: 6,
    },
    address_container: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    selection_container: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'center',
        backgroundColor: theme.colors.lightGrey,
        paddingHorizontal: 12,

        overflowY: 'visible',
        width: '90%',
        height: 55,
        justifyContent: 'space-between',
    },
    autocomplete_text_input: {
        alignSelf: "center",
        height: 55,
        marginLeft: 10,
    },
})
