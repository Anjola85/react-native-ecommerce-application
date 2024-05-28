import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
    noStores: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fontFamily.regular,
        textAlign: "center",
        marginTop: 16,
        color: "#6E6E6E",
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 2,
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fontFamily.bold,
        marginBottom: 6,
    },
    listContainer: {
        marginTop: 16,
        overflowX: 'scroll'
    },
    sectionTitle: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fontFamily.semibold,
        marginBottom: 8,
    },
    loading_container: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
});
