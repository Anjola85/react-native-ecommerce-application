import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    map: {
        height: "100%",
        width: "100%",
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
    noStores: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fontFamily.regular,
        textAlign: "center",
        marginTop: 16,
        color: "#6E6E6E",
    },
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
})
