import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    paddingHorizontal: 10, // Add some horizontal padding
  },
  title: {
    // flex: 1,
    fontSize: 23,
    fontWeight: "500",
    marginVertical: 10,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "PoppinsMedium",
  },
  seperator: {
    height: 1,
    backgroundColor: "#E8E8E8",
    // boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default headerStyles;
