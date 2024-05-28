import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

export default StyleSheet.create({
    location_pill_container: {
        position: "absolute",
        top: "5%",
        width: "100%",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        display: "flex",
    },
    location_pill: {
        // backgroundColor: "#1D1D35",
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    location_pill_text: {
        color: "white",
        fontSize: 13,
        marginLeft: 6,
        fontFamily: theme.fontFamily.regular,
    },
    back_arrow: {
        position: "absolute",
        top: "25%",
        left: "5%",
        zIndex: 1,
    },
});
