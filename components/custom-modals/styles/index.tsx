import { StyleSheet } from "react-native";

export const regionModalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    width: "100%",
    height: 315,
  },
  heading: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
    color: "#333",
    lineHeight: 28,
    letterSpacing: 0.1,
    marginBottom: 10,
  },
  optionContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  imageContainer: {
    backgroundColor: "#F6F4F0",
    borderRadius: 25,
    padding: 20,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    width: 50,
    height: 50,
  },
  optionImage: {
    width: 25,
    height: 25,
  },
  optionText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.2,
    maxWidth: 80,
    textAlign: "center",
  },
});
