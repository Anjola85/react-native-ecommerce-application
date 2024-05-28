import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    text_heading: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 18,
      },
      text_subheading: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 24,
        alignSelf: "flex-start",
        marginTop: 10,
      },
    selection_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        maxWidth: 500,
        marginTop: 20,
      },
      selection: {
        width: "45%",
        marginBottom: 20,
        alignItems: "center",
        paddingBottom: 10,
      },
      selected: {
        borderBottomWidth: 1.5,
        borderBottomColor: "#1D1D35",
      },
      selection_text: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: theme.fontFamily.regular,
      },
      line: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginTop: 25,
      },
      linetext: {
        textAlign: "center",
        width: 25,
        color: "#B2B2B2",
      },
      greyline: {
        flex: 1,
        height: 1,
        backgroundColor: "#0000000a",
      },

      input_title: {
        marginBottom: "1%",
        fontWeight: "400",
        fontSize: 14,
        paddingBottom: 15,
        textAlign: "left",
        width: "90%",
        maxWidth: 400,
        fontFamily: theme.fontFamily.regular,
      },

      error_message: {
        color: "#9b095c",    
        fontSize: 15,
        marginBottom: 9,
        marginTop: 9,
        fontFamily: theme.fontFamily.regular,
      },

      login_button: {
        width: "90%",
        maxWidth: 400,
        marginTop: 5,
        height: 60,
        justifyContent: "center",
        display: "flex",
      },

      login_button_text: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 18,
        margin: 0,
        padding: 0,
      },

      forgot_password: {
        color: "#B2B2B2",
        fontSize: 15,
        width: "90%",
        maxWidth: 400,
        fontFamily: theme.fontFamily.regular,
      },

      email_form_input: {
          marginBottom: 15,
          width: "90%",
          maxWidth: 400,
          marginTop: -25,
      },

      password_form_input: {
        marginBottom: 10,
        width: "90%",
        maxWidth: 400,
        marginTop: -15,
      },
      hyperlink: {
        color: theme.colors.primary,
        fontFamily: theme.fontFamily.regular,
        fontSize: 14,
      },

      other_info: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 14,
      }
});
