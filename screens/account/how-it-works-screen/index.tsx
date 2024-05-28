import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import { useRouter } from "expo-router";
import { SvgComponent as LocationBasedSvg } from "../../../assets/svgs/InvitePeopleSvg";
import { SvgComponent as ArrowSvg } from "../../../assets/svgs/arrowSvg";
import { SvgComponent as FilterSvg } from "../../../assets/svgs/filterSvg";
import { SvgComponent as RoadSvg } from "../../../assets/svgs/roadSvg";
import { howItWorksScreenData } from "./data";

const HowItWorks = () => {
  const router = useRouter();

  function handleShareFeedback() {
    router.push("/account/feedback");
  }
  const width = Dimensions.get("window").width;

  const scale = width / 430;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Header title="How Quiikmart Works" hasButton />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, { marginBottom: 70 }]}>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>
              {howItWorksScreenData[0].title}
            </Text>
            <Text
              style={[
                styles.contentDescription,
                {
                  maxWidth: `${70 * scale}%`,
                  fontSize: styles.contentDescription.fontSize * scale,
                },
              ]}
            >
              {howItWorksScreenData[0].description}
            </Text>
          </View>

          <LocationBasedSvg
            width={150 * scale}
            height={150 * scale}
            style={[styles.svg, { right: 0, top: "20%" }]}
          />
        </View>

        <View style={[styles.card, { alignSelf: "flex-end" }]}>
          <View style={[styles.content, { maxWidth: "75%" }]}>
            <Text style={styles.contentTitle}>
              {howItWorksScreenData[1].title}
            </Text>
            <Text
              style={[
                styles.contentDescription,
                { fontSize: styles.contentDescription.fontSize * scale },
              ]}
            >
              {howItWorksScreenData[1].description}
            </Text>
          </View>

          <ArrowSvg
            width={120 * scale}
            height={120 * scale}
            style={[styles.svg, { left: "-30%", top: "-35%" }]}
          />
        </View>

        <View style={[styles.card]}>
          <View style={[styles.content, { maxWidth: "60%" }]}>
            <Text style={styles.contentTitle}>
              {howItWorksScreenData[2].title}
            </Text>
            <Text
              style={[
                styles.contentDescription,
                { fontSize: styles.contentDescription.fontSize * scale },
              ]}
            >
              {howItWorksScreenData[2].description}
            </Text>
          </View>

          <FilterSvg
            height={132 * scale}
            width={132 * scale}
            style={[styles.svg, { right: 0, top: "-25%" }]}
          />
        </View>

        <View style={[styles.card, { alignSelf: "flex-end" }]}>
          <View style={[styles.content, { maxWidth: "70%" }]}>
            <Text style={styles.contentTitle}>
              {howItWorksScreenData[3].title}
            </Text>
            <Text
              style={[
                styles.contentDescription,
                { fontSize: styles.contentDescription.fontSize * scale },
              ]}
            >
              {howItWorksScreenData[3].description}
            </Text>
          </View>

          <RoadSvg
            height={120 * scale}
            style={[styles.svg, { left: "-30%", top: "-55%" }]}
          />
        </View>

        <Text onPress={handleShareFeedback} style={styles.share_feedback_btn}>
          Share your feedback with us?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scroll: {
    flex: 1,
  },
  card: {
    flexDirection: "column",
    flex: 1,
    position: "relative",
    marginBottom: 70,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  contentTitle: {
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
  },
  contentDescription: {
    fontFamily: "PoppinsRegular",
    lineHeight: 24,
    color: "rgba(39, 38, 38, 0.82)",
    fontSize: 13,
  },
  share_feedback_btn: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: "#3CBF77",
    alignSelf: "center",
    marginTop: 0,
  },
  svg: {
    position: "absolute",
  },
  reverse: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
});

export default HowItWorks;
