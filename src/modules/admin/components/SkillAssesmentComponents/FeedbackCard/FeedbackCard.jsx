import React from "react";
import {
  FeedbackCardWrapper,
  Title,
  FeedbackEntries,
  FeedbackImpression,
} from "./FeedbackCard.styles";

const FeedbackCard = () => {
  const feedbackEntries = 300;
  const feedbackImpression = "Positive";

  return (
    <FeedbackCardWrapper>
      <Title>
        Feedback for <strong>Skill Assessment Test</strong>
      </Title>
      <FeedbackEntries>Feedback Entries Across all - {feedbackEntries}</FeedbackEntries>
      <FeedbackImpression impression={feedbackImpression.toLowerCase()}>
        Feedback Impression - {feedbackImpression}
      </FeedbackImpression>
    </FeedbackCardWrapper>
  );
};

export default FeedbackCard;
