export interface FeedbackIconContainerProps {
  thumbsUp: boolean;
  thumbsDown: boolean;
  handleThumbsUp: () => void;
  handleThumbsDown: () => void;
}

export interface FeedbackInputTextProps {
  thumbsUp: boolean;
  submitFeedback: (feedback: string) => void;
  MAX_TEXT_LENGTH: number;
}

export interface FeedbackModalProps {
  increase: () => void;
  feedbackSubmit: boolean;
  setFeedbackSubmit: (submit: boolean) => void;
}
