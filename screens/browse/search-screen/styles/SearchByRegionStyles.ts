import { StyleSheet } from "react-native";
import { theme } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  heading: {
    fontSize: 20,
    fontFamily: theme.fontFamily.semibold,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  grid: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F4F0",
    borderRadius: 10,
    // elevation: 3, // for Android shadow
    // shadowOpacity: 0.3, // for iOS shadow
    // shadowRadius: 3,
    // shadowOffset: { width: 0, height: 2.192 },
    padding: 10,
    aspectRatio: 1.02,
    display: "flex",
    maxWidth: 110,
    maxHeight: 110,
    gap: 10,
  },
  card_image_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  card_text: {
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
    textAlign: "center",
  },
  failed: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  failed_title: {
    fontSize: theme.fontSizes.large, 
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.grey,
  },
  failed_subtitle: {
    fontSize: theme.fontSizes.label,
    color: theme.colors.secondary,
    textAlign: "center",
    maxWidth: 360,
    fontFamily: theme.fontFamily.regular,
  },
  btn: {
    marginTop: 20,
  },
});
