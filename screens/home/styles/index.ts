import { StyleSheet } from "react-native";
import { primaryColor } from "../../../constants/Colors";

export const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    maxHeight: 50,
    paddingTop: 5,
    zIndex: 6,
  },
  address_container: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 70,
  },
  icon_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export const storeSearchBarStyles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingRight: 8,
    paddingLeft: 12,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 6,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: "#424242",
  },
  searchIcon: {
    padding: 10,
  },
});

export const subHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    paddingTop: 5,
    marginBottom: 10,
    zIndex: 1,
  },
  map_btn: {
    backgroundColor: "#D5F457",
    borderRadius: 20,
    padding: 5,
  },
});

export const regionStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  optionContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 85,
    alignSelf: "flex-start",
  },
  imageContainer: {
    backgroundColor: "#F6F4F0",
    borderRadius: 25,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    width: 40,
    height: 40,
  },
  optionImage: {
    width: 20,
    height: 20,
  },
  optionText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.2,
    textAlign: "center",
  },
});

export const inviteFriendStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    height: 85,
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    // maxWidth: "50%",
  },
  title: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    marginBottom: 5,
  },
  sub_text: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "PoppinsRegular",
    maxWidth: "70%",
    lineHeight: 18,
  },
});

export const storeInAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    paddingVertical: 10,
  },
  arrow_btn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 4,
  },
  header_text: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    color: "#424242",
  },
});

export const storeCardMediumStyles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 200,
    width: 250,
    marginRight: 20,
    backgroundColor: "#fff",
    // borderRadius: 8.304,
    // borderWidth: 0.415,
    // borderColor: "rgba(199, 199, 199, 0.19)",
    // // React Native doesn't support CSS box-shadow property
    // Instead, you can use elevation for Android:
    elevation: 3,
    // For iOS, you can use shadow properties:
    shadowColor: "rgba(0, 0, 0, 0.27)",
    shadowOffset: { width: 0, height: 2.192 },
    shadowOpacity: 0.27,
    shadowRadius: 8.304 / 2,
  },
  image_container: {
    height: 120,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8.304,
    borderTopRightRadius: 8.304,
    position: "relative",
  },

  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: "100%",
  },
  content: {
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 3,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8.304,
    borderBottomRightRadius: 8.304,
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "space-between",
  },
  main_content: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  store_name: {
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    marginBottom: 3,
    width: "85%",
  },
  store_category: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    marginBottom: 3,
  },
  store_category_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: "#7D7B8E",
  },
  store_address: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    maxWidth: "60%",
  },
  store_address_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: "#7D7B8E",
  },
  store_rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    marginTop: 3,
  },
  store_rating_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 11,
  },
  heart_icon_container: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 5,
  },
});

export const liveMapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E7C685",
    borderRadius: 12,
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  content: {
    maxWidth: "80%",
  },
  title: {
    fontSize: 14,
    color: primaryColor,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 5,
    textAlign: "left",
  },
  sub_text: {
    fontSize: 12.5,
    color: "#333",
    fontFamily: "PoppinsRegular",
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#D5F457",
    padding: 5,
    borderRadius: 10,
    width: 60,
    marginTop: 10,
  },
  button_text: {
    fontSize: 12,
    color: "#1d1d35",
    fontFamily: "PoppinsMedium",
    textAlign: "center",
  },
});

export const storeCardSmallStyles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 200,
    width: 160,
    marginRight: 20,
    borderRadius: 8.304,
    backgroundColor: "#fff",
    // borderWidth: 0.415,
    // borderColor: "rgba(199, 199, 199, 0.19)",
    // // React Native doesn't support CSS box-shadow property
    // Instead, you can use elevation for Android:
    elevation: 3,
    // For iOS, you can use shadow properties:
    shadowColor: "rgba(0, 0, 0, 0.27)",
    shadowOffset: { width: 0, height: 2.192 },
    shadowOpacity: 0.27,
    shadowRadius: 8.304 / 2,
  },
  image_container: {
    height: 80,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8.304,
    borderTopRightRadius: 8.304,
  },

  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: "100%",
  },
  content: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    borderBottomLeftRadius: 8.304,
    borderBottomRightRadius: 8.304,
  },
  small_image_container: {
    alignSelf: "center",
    zIndex: 2,
    marginTop: -30,
    marginBottom: 5,
  },
  small_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  store_name: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    marginBottom: 5,
    textAlign: "center",
  },
  store_category_text: {
    color: "#8D8B9C",
    fontSize: 12,
    marginBottom: 10,
    fontFamily: "PoppinsRegular",
  },
  store_rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 8,
  },
  store_rating_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 11,
    color: "#8A8898",
  },
});

export const groceryStoresStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    paddingVertical: 10,
  },
  arrow_btn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 4,
  },
  header_text: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    color: "#424242",
  },
});

export const trendingBeautyStoresStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    paddingVertical: 10,
  },
  header_text: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    color: "#424242",
  },
});

export const allStoresStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    paddingVertical: 10,
  },
  header_text: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15.5,
    color: "#424242",
  },
});

export const storeCardLargeStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxHeight: 230,
    marginBottom: 20,
  },
  image_container: {
    height: 150,
    width: "100%",
    borderRadius: 8.304,
    marginBottom: 5,
    position: "relative",
  },

  image: {
    borderRadius: 8.304,
    width: "100%",
    height: "100%",
  },
  content: {
    backgroundColor: "red",
    padding: 10,
    paddingTop: 3,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8.304,
    borderBottomRightRadius: 8.304,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  main_content: {},
  store_name: {
    fontFamily: "PoppinsMedium",
    fontSize: 15.5,
    marginBottom: 3,
  },
  store_category: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    marginBottom: 3,
  },
  store_category_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: "#7D7B8E",
    marginBottom: 3,
  },
  store_address: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  store_address_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: "#7D7B8E",
  },
  store_rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    marginTop: 3,
  },
  store_rating_text: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    color: "#333",
  },
});

export const storeFavouritesCardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  image_container: {
    height: 85,
    width: 125,
    borderRadius: 8.304,
    marginBottom: 5,
    position: "relative",
  },

  image: {
    borderRadius: 8.304,
    width: "100%",
    height: "100%",
  },
  content: {
    backgroundColor: "red",
    borderBottomLeftRadius: 8.304,
    borderBottomRightRadius: 8.304,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  main_content: {
    marginTop: -6,
  },
  store_name: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    marginBottom: 3,
  },
  second_desc: {
    fontFamily: "PoppinsLight",
    fontSize: 11.5,
    color: "#7D7B8E",
  },
  store_rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    marginTop: 3,
  },
  store_rating_text: {
    fontFamily: "PoppinsRegular",
    fontSize: 11,
    color: "#333",
  },
});
