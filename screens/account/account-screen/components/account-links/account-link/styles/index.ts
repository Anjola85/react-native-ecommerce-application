import { Platform, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  link: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  link_text: {
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.15,
    marginLeft: 15,
  },
  button: {
    backgroundColor: "#f2f2f2",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    button: {
      backgroundColor: "white",
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      shadow: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
      },
    },
    marginTop: -20,
  },
});
