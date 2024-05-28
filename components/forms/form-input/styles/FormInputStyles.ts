import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: 15,
    marginBottom: 9,
    marginTop: 9,
    color: "#ff0000",
  },
  input: {
    flex: 1,
    height: 52,
    padding: 10,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    backgroundColor: "#0000000a",
  },
  invalidLabel: {
    color: "#9b095c",
    marginTop: "4%",
  },
  invalidInput: {
    backgroundColor: "#fcc4e4",
    borderColor: "#9b095c",
  },
  close_btn: {
    zIndex: 10,
    marginLeft: Platform.OS === "ios" ? "-12.5%" : "-14.5%",
    right: "5%",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: 50,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
