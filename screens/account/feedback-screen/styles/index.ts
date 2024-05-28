import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#fff",
  },
  heading: {
    fontSize: 18,
    lineHeight: 20,
    color: "rgba(1, 1, 1, 0.78)",
    textAlign: "center",
    marginTop: "8%",
    marginBottom: "1.5%",
  },
  sub_heading: {
    lineHeight: 16,
    textAlign: "center",
  },
});

export const feedbackInputStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2.5%",
  },
  remText: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    color: "rgba(39, 38, 38, 0.6)",
    marginBottom: 10,
  },
  input: {
    height: 120,
    width: 380,
    borderWidth: 1,
    borderColor: "rgba(217, 217, 217, 0.52)",
    borderRadius: 12,
    padding: 10,
    paddingTop: 15,
    marginBottom: "2.5%",
    alignSelf: "center",
  },
  btn: {
    borderRadius: 7,
    backgroundColor: "#000",
    width: "90%",
    padding: 15,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_text: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
});
