import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        // height: '10%',
        height: 200,
    },
    header_component: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    header_text: {
        fontSize: theme.fontSizes.large,
        fontFamily: theme.fontFamily.bold,
        // marginLeft: 10,
        // flexGrow: 1,
        // textAlign: 'center',   
    },
    close_btn: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },
    footer_component: {
        // position: 'absolute',
        // bottom: 0,
        // width: '100%',
        // marginTop: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 40,
        borderTopColor: theme.colors.lightGrey,
        borderTopWidth: 1,
    },
    footer_button: {
        width: '40%',
        // padding: 10,
        // borderRadius: 10,
        // backgroundColor: theme.colors.primary,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    filter_category: {
        marginTop: 20,
    },

    filter_category_text: {
        fontFamily: theme.fontFamily.medium,
        fontSize: theme.fontSizes.label,
        color: theme.colors.darkGrey,
        marginBottom: 10,
    },

    radio_button_container: {
        width: "90%",
        maxWidth: 500,
        marginTop: "5%",
      },
      address_option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "2%",
      },
      radio_button: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      },
      radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.colors.lightGrey,
        marginRight: "1%",
        justifyContent: "center",
        alignItems: "center",
      },
      radio_button_text: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: theme.fontSizes.label,
        color: theme.colors.darkGrey,
      },
});
