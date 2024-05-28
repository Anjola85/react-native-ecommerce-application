import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
    store_card: {
        width: 250,
        height: 220,
        flexDirection: "column",
        backgroundColor: "white",
        marginBottom: 16,
    },
    store_info: {
        width: "70%",
        height: "100%",
        justifyContent: "space-between",
        marginLeft: 16,
    },
    store_name: {
        fontSize: 16,
        fontFamily: theme.fontFamily.semibold,
        paddingVertical: 4,
    },
    store_address: {
        fontSize: 12,
        fontFamily: theme.fontFamily.regular,
        color: "#979797",
    },
    tags: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        paddingVertical: 4,
    },
    tag: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F4",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    tag_text: {
        fontSize: 10,
        fontFamily: theme.fontFamily.regular,
        color: "#5E5E60",
        marginLeft: 4,
    },
    imageContainer: {
        position: 'relative', 
        width: '100%',
        height: 120,
        borderRadius: 8,
        overflow: 'hidden',
      },
      store_img: {
        width: '100%',
        height: '100%',
      },
      overlay: {
        height: "100%",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      overlayText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: theme.fontFamily.regular,
        maxWidth: '80%',
      },
});
