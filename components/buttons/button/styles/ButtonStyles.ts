import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    default_button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    text: {
        color: theme.colors.white,
    }
});
