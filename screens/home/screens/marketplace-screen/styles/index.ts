import { Platform, StyleSheet } from "react-native";

export const marketplaceScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: "#fff",
  },
});

export const headerStyles = StyleSheet.create({
  button: {
    backgroundColor: "#E6ECED",
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
    marginLeft: 20,
    marginTop: 50,
  },
  feature_container: {
    position: "absolute",
    bottom: "-70%",
    left: 0,
    right: 0,
    justifyContent: "center",
    display: "flex",
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  feature_image: {
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    padding: 20,
    width: 50,
    height: 50,
    borderRadius: 30,
    marginBottom: 5,
    zIndex: 5,
  },
  store_name: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
    color: "#000",
    zIndex: 5,
  },
});

export const subHeaderStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 40,
    paddingHorizontal: 10,
  },
  first: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  time_status: {
    alignSelf: "center",
    fontFamily: "PoppinsLight",
    fontSize: 11,
  },
  btn_container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(199, 199, 199, 0.15)",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 15,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 95,
    height: 26,
    marginRight: -30,
    zIndex: 5,

    shadow: {
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 2.5,
      elevation: 3,
    },
  },
  activeBtn: {
    backgroundColor: "#004449",
  },
  activeBtnText: {
    color: "#fff",
  },
  buttonText: {
    color: "#444",
    fontFamily: "PoppinsLight",
    fontSize: 10,
    letterSpacing: 0.2,
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "rgba(196, 196, 196, 0.5)",
    borderWidth: 0.2,
    borderRadius: 6,
    padding: 10,
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 13,
  },
  seeReviewsText: {
    color: "#3E8100",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  detailBox: {
    alignItems: "center",
  },
  detailText: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 5,
  },
  detailLabel: {
    color: "grey",
    fontSize: 12,
  },
  third: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 10,
  },
  search_box: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
});
