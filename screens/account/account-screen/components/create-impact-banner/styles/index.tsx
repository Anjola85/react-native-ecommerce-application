import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003D29",
    borderRadius: 10,
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    width: "100%",
    marginTop: "3%",
  },
  button: {
    backgroundColor: "#D5F457",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    maxWidth: "70%",
  },
  button_text: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "500",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: "5%",
  },
  right: {
    display: "flex",
    flexDirection: "column",

    alignItems: "flex-end",
  },
});
