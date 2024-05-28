import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import { SvgComponent as FeedBackPeopleSvg } from "../../../assets/svgs/FeedBackPeopleSvg";
import { primaryColor } from "../../../constants/Colors";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import FeedbackModal from "./components/FeedbackModal";

const FeedBackScreen = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);
  const [index, setIndex] = useState(-1);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  function handleFeedbackButton() {
    console.log("feedback");
    console.log(feedbackSubmitted);
    setFeedbackSubmitted(false);
    handleOpenBottomSheet();
  }

  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.snapToIndex(0);
  }

  function increaseTo1() {
    setIndex(1);
  }

  function handleCloseBottomSheet() {
    bottomSheetRef.current?.close();
  }

  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <View style={{ marginBottom: 40 * scale }}>
          <Header title="Help Us Improve" hasButton />
        </View>
        <Text
          style={[
            styles.text,
            { marginBottom: styles.text.marginBottom * scale },
          ]}
        >
          We value your opinion and are committed to making our app the best it
          can be for you. We would love to hear your thoughts to help us improve
          your experience
        </Text>
      </View>
      <FeedBackPeopleSvg
        width={320 * scale}
        height={320 * scale}
        style={{ marginBottom: 100 * scale }}
      />
      <TouchableOpacity
        style={styles.feedbackButton}
        onPress={handleFeedbackButton}
      >
        <Text style={styles.buttonText}>Give Feedback</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
      >
        <FeedbackModal
          increase={increaseTo1}
          feedbackSubmit={feedbackSubmitted}
          setFeedbackSubmit={setFeedbackSubmitted}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingBottom: 20,
  },
  text: {
    color: "rgba(39, 38, 38, 0.60)",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "PoppinsLight",
    lineHeight: 24,
    marginBottom: 50,
  },
  feedbackButton: {
    backgroundColor: primaryColor,
    width: "90%",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
});

export default FeedBackScreen;
