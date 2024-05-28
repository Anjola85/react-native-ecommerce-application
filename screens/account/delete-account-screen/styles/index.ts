import { StyleSheet } from "react-native";
import { primaryColor } from "../../../../constants/Colors";

export const deleteAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: primaryColor,
    width: "75%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export const helpUsImproveStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: 20,
  },

  button: {
    width: "85%",
    borderRadius: 10,
    marginTop: 15,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: primaryColor,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "PoppinsMedium",
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    marginBottom: 8,
    letterSpacing: 0.5,
    color: "#333",
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 26,
    fontFamily: "PoppinsRegular",
    color: "#3E4347",
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    height: 300,
    textAlignVertical: "top",
    marginBottom: "10%",
    width: "98%",
    alignSelf: "center",
  },
  scroll: {
    flex: 1,
    maxWidth: "100%",
    flexDirection: "column",
    paddingHorizontal: 20,
  },

  // Add these styles to your existing styles object
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  popButton: {},
  popCancelButton: {},
  popButtonText: {},
  popDeleteButton: {},
});
