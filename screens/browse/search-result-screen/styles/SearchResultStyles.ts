import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    loading_container: {
        paddingHorizontal: 20,
    },
    page_title: {
        fontSize: 20, 
        fontFamily: theme.fontFamily.semibold,
        textAlign: "center",
    },
    loading_skelteton_container: {
        display: 'flex' ,
        alignItems: 'center',
        width: '100%',
    },
    failed_container: {
        padding: 20,
        backgroundColor: "#fff",
        height: "100%",
    },
    failed: {
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
    },
    failed_title: {
        fontSize: theme.fontSizes.large, 
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.grey,
    },
    failed_subtitle: {
        fontSize: theme.fontSizes.label,
        color: theme.colors.secondary,
        textAlign: "center",
        maxWidth: 360,
        fontFamily: theme.fontFamily.regular,
    },
    result_container: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 40,
        marginBottom: 20,
    },
    back_icon: {
        position: "absolute",
        alignSelf: "center",
        left: 0,
    },
    result_header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 10,
    },
});
