import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../../constants/theme";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.8,
    width: width,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: "5%",
    paddingHorizontal: "2%",
  },
  heading: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fontFamily.semibold,
    marginBottom: 10,
  },
  search_result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    paddingHorizontal: "5%",
    paddingBottom: "2%",
    gap: 15,
  },
  result_heading: {
    fontSize: theme.fontSizes.label,
    fontFamily: theme.fontFamily.medium,
    marginBottom: 2,
  },
  result_subheading: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.secondary,
  },
  category_item: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    marginBottom: "2%",
  },
  category_name: {
    marginRight: 5,
    fontSize: 15,
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
  },

  not_found_title: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.grey,
  },
  not_found_subtitle: {
    fontSize: theme.fontSizes.label,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.secondary,
    textAlign: "center",
    maxWidth: 360,
  },
  search_suggestion_image_container: {
    flexDirection: "row", 
    alignItems: "center",
    gap: 10
  },
  search_suggestion_image: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginBottom: "5%",
  },
});
