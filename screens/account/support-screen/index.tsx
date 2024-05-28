import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { primaryColor } from "../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { ExternalLink } from "../../../components/external-link/ExternalLink";
import { styles } from "./styles";
import QuestionLink from "./components/QuestionLink";

const SupportScreen = () => {
  const router = useRouter();

  function goBack() {
    router.back();
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headingContainer}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="#fff"
          onPress={goBack}
          style={{ marginBottom: 30 }}
        />
        <Text style={styles.heading}>How can we help ?</Text>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <Text style={styles.subheading}>Popular Questions</Text>
        <View style={{ marginBottom: 30 }}>
          <QuestionLink
            question="How Quiikmart works"
            subText="What we do, the communities we serve"
          />
          <QuestionLink
            question="Profile and Account settings"
            subText="Personal settings, login problems and notifications"
          />
          <QuestionLink
            question="Senior Navigation and Insights"
            subText="Special support for customers over age 60"
          />
          <QuestionLink
            question="Fees and Pricing"
            subText="Item pricing, referrals, taxes"
          />
          <QuestionLink
            question="Get to Know Us"
            subText="About us, journey and insights"
            hasBottomSeperator
          />
        </View>

        <ExternalLink
          href="https://quiikmart.com"
          style={{
            color: primaryColor,
            marginBottom: 20,
            fontFamily: "PoppinsMedium",
            textDecorationLine: "underline",
          }}
        >
          Need to get in touch with us ?
        </ExternalLink>
        <Text
          style={{ fontFamily: "PoppinsRegular", fontSize: 13, lineHeight: 20 }}
        >
          Our Quiikmart Customer Experience team is here to help and answer all
          your questions.
        </Text>
      </ScrollView>
    </View>
  );
};

export default SupportScreen;
