import React, { useState } from "react";
import { View, Text } from "react-native";
import FeedbackIconContainer from "./FeedbackIconContainer";
import FeedbackInputText from "./FeedbackInputText";
import { modalStyles as styles } from "../styles";
import { FeedbackModalProps } from "../props";
import ThankYouContent from "./ThankYouContent";
import { getItemFromCache } from "../../../../store/cache/cache";
import { USER_ID } from "../../../../store/cache/cacheKeys";
import { postFeedback } from "../../../../api/endpoints/feedbackApi";

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  increase,
  feedbackSubmit,
  setFeedbackSubmit,
}) => {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [feedback, setFeedback] = useState("");

  const MAX_TEXT_LENGTH = 500;
  const ratingButtonClicked = thumbsUp || thumbsDown;

  function handleThumbsUp() {
    setThumbsUp((previousState) => !previousState);
    setThumbsDown(false);
    increase();
  }

  function handleThumbsDown() {
    setThumbsUp((previousState) => !previousState);
    setThumbsDown(true);
    increase();
  }

  function submit(feedback: string) {
    setFeedback(feedback);
    sendFeedbackToServer(feedback, thumbsUp, thumbsDown);
    setFeedbackSubmit(true);
    console.log(feedback);
  }

  const sendFeedbackToServer = async function(feedback: string, thumbsUp: boolean, thumbsDown: boolean) {
    let rating: number = -1;
    if (thumbsUp) {
      rating = 5;
    } else if (thumbsDown) {
      rating = 2;
    } else {
      console.log("Rating not set");
    }
    const userId = await getItemFromCache(USER_ID) as number;
    if (userId && rating !== -1) {
      const feedbackData = {
        user: userId,
        rating: rating,
        content: feedback,
      };
      postFeedback(feedbackData);
    } else {
      console.log("User id not found");
    }
  }

  const FeedbackContent = () => {
    return (
      ratingButtonClicked && (
        <>
          <FeedbackInputText
            thumbsUp={thumbsUp}
            MAX_TEXT_LENGTH={MAX_TEXT_LENGTH}
            submitFeedback={submit}
          />
        </>
      )
    );
  };

  return (
    <View style={styles.container}>
      {feedbackSubmit ? (
        <ThankYouContent />
      ) : (
        <>
          <Text style={styles.heading}>How was this experience?</Text>

          <Text style={styles.sub_heading}>
            Leave us a thumbs up or thumbs down.
          </Text>

          <FeedbackIconContainer
            thumbsUp={thumbsUp}
            thumbsDown={thumbsDown}
            handleThumbsUp={handleThumbsUp}
            handleThumbsDown={handleThumbsDown}
          />

          <FeedbackContent />
        </>
      )}
    </View>
  );
};

export default FeedbackModal;
