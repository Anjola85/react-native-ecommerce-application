import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 120,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    flexdirection: "row",
    gap: 11,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  tos_container: {
    width: "70%",
    alignSelf: "center",
    marginBottom: 40,
  },
  tos: {
    color: "#000",
    fontSize: 11,
    lineHeight: 13,
    textAlign: "center",
    fontFamily: theme.fontFamily.regular,
  },
  title: {
    textAlign: "center",
    lineHeight: 29,
    fontSize: 21,
    fontFamily: theme.fontFamily.semibold,
  },
  text: {
    minHeight: 50,
    marginVertical: 20,
    paddingHorizontal: 30,
    width: "90%",
    alignSelf: "center",
    fontFamily: theme.fontFamily.regular,
  },
  subtext: {
    color: theme.colors.secondary,
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  continue_btn: {
    width: 280,
    marginBottom: 25,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginHorizontal: "auto",
    alignSelf: "center",
    padding: 0,
    borderRadius: 30,
  },
  continue_btn_text: {
    margin: 0,
    padding: 0,
    fontFamily: theme.fontFamily.regular,
  },
});
