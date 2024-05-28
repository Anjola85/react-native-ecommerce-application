import { StyleSheet } from "react-native";
import { primaryColor } from "../../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingContainer: {
    backgroundColor: primaryColor,
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },
  heading: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 24,
    letterSpacing: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  scroll: {
    flexGrow: 1,
    maxWidth: "100%",
    display: "flex",
    paddingHorizontal: 30,
  },
  subheading: {
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    color: "#183A25",
    marginBottom: 30,
  },
});

export const questionLinkStyles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 15,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {},

  top_seperator: {
    height: 2,
    backgroundColor: "#E8E8E8",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  bottom_seperator: {
    height: 2,
    backgroundColor: "#E8E8E8",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  question: {
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    color: "#1b3c28",
    marginBottom: 10,
  },
  subText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: "#333",
    marginBottom: 10,
  },
});
