import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
    pill_container: {
        flexDirection: 'row',
        gap: 4,
        marginBottom: 6,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
        borderWidth: 1.5,
    },
    option_text: {
        fontSize: 11,
        marginLeft: 4,
        fontFamily: theme.fontFamily.regular,
    },
});
