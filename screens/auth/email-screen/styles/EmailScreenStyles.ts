import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    height: "100%",
  },
  back_button: {
    marginLeft: "5%",
    marginBottom: 30,
  },
  text: {
    color: "#000",
    fontSize: theme.fontSizes.medium,
  },
  text_heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: 18,
    marginBottom: "1.5%",
    lineHeight: 26,
  },
  content: {
    marginLeft: "5%",
    marginBottom: "20%",
  },
  button_container: {
    marginLeft: "5%",
  },
  continue_button: {
    backgroundColor: theme.colors.primary,
    width: "90%",
    maxWidth: 400,
    borderRadius: 7,
    height: 50,
  },
  form_input: {
    marginBottom: 25,
    width: "90%",
    maxWidth: 400,
  },
  error_message: {
    color: "#9b095c",
    fontSize: 15,
    marginBottom: 9,
    marginTop: 9,
  },
  continue_button_text: {
    color: "#fff",
    fontFamily: theme.fontFamily.medium,
    fontSize: 15,
  },
});
