import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: theme.colors.lightGrey,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.lightGrey,
        height: 75,
    },
    emoji: {
        fontSize: 26,
        marginTop: 5,
    },
    message_container: {
        flex: 1,
        gap: 5,
    },
    message: {
        fontSize: 12,
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.black,
    },
    time: {
        fontSize: 10,
        fontFamily: theme.fontFamily.regular,
        color: "#979797",
    },
    read: {
        backgroundColor: theme.colors.white,
    },
    unread: {
        backgroundColor: 'rgba(198, 221, 133, 0.3)',
    }
})
