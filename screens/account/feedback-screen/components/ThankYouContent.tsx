import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgComponent as ThankYouSvg } from "../../../../assets/svgs/ThankYouSvg";

const ThankYouContent = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <ThankYouSvg width={175} height={175} />
      </View>

      <Text style={styles.heading}>Thank You!</Text>
      <Text style={styles.sub_heading}>
        By giving us feedback, you help us improve Quickmart to create a better
        experience for you.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ffffff",
    paddingTop: "5%",
    alignItems: "center",
    paddingHorizontal: "10%",
  },

  heading: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 29,
    textAlign: "center",
    color: "#601124",
    marginVertical: 10,
    marginTop: 20,
    letterSpacing: 1,
  },
  sub_heading: {
    color: "rgba(39, 38, 38, 0.6)",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26,
  },
});

export default ThankYouContent;
