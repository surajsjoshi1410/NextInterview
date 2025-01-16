import React from "react";
import { CardWrapper } from "./MetricCard.styles";

const MetricCard = () => {
  return (
    <CardWrapper>
      <p className="feedback-title">Feedback for</p>
      <h2 className="metric-title">Diagnosing and Investigating Metrics</h2>
      <hr />
      <p className="feedback-detail">Feedback Entries Across all -</p>
      <h1 className="feedback-value">300</h1>
      <hr />
      <p className="feedback-detail">
        Feedback Impression - <span className="positive">Positive</span>
      </p>
    </CardWrapper>
  );
};

export default MetricCard;
