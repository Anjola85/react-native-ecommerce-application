import { View, Text } from "react-native";
import React, { useState } from "react";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { FeedbackInputTextProps } from "../props";
import { TouchableOpacity } from "react-native-gesture-handler";
import { feedbackInputStyles as styles } from "../styles";

const FeedbackInputText: React.FC<FeedbackInputTextProps> = ({
  thumbsUp,
  submitFeedback,
  MAX_TEXT_LENGTH,
}) => {
  const [feedback, setFeedback] = useState("");

  function handleTextChange(text: string) {
    if (text.length <= 500) {
      setFeedback(text);
    }
  }

  function submit() {
    submitFeedback(feedback);
  }

  const SubmitFeedbackButton = () => (
    <TouchableOpacity onPress={submit} style={styles.btn}>
      <Text style={[styles.btn_text, { color: "#fff" }]}>Submit Feedback</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BottomSheetTextInput
          multiline
          placeholder={
            thumbsUp
              ? "What did you like about it ..."
              : "How can we improve Quickmart?"
          }
          onChangeText={handleTextChange}
          value={feedback}
          maxLength={MAX_TEXT_LENGTH}
          style={styles.input}
          placeholderTextColor="#A6A6A6"
          autoCorrect={false}
        />
        <Text style={styles.remText}>{`${
          MAX_TEXT_LENGTH - feedback.length
        } characters remaining`}</Text>
      </View>
      <SubmitFeedbackButton />
    </View>
  );
};

export default FeedbackInputText;
