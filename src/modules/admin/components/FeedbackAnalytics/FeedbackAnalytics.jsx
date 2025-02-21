// FeedbackAnalytics.jsx
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { FeedbackAnalyticsWrap, Title } from "./FeedbackAnalytics.styles";

const FeedbackAnalytics = () => {
  // Example data
  const feedbackData = [
    { label: "Positive", value: 0, color: "#20c997" }, // or teal/green
    { label: "Neutral", value: 0, color: "#007bff" }, // or blue
    { label: "Negative", value: 0, color: "#ffc107" }, // or yellow
  ];

  // Combined total if needed (should be 100 in this example)
  const totalFeedback = feedbackData.reduce((sum, item) => sum + item.value, 0);

  // For "Last week" metric
  const lastWeekChange = "0%";

  return (
    <FeedbackAnalyticsWrap>
      <Title>Feedback Analytics</Title>
      <div className="feedbackContainer">
        {/* Left side: legend */}
        <div className="legendArea">
          {feedbackData.map((item) => (
            <div key={item.label} className="legendItem">
              <span
                className="legendDot"
                style={{ backgroundColor: item.color }}
              />
              <b style={{ fontSize: "1.1rem" }}>{item.label}</b> – {item.value}%
            </div>
          ))}

          <div className="lastWeekBadge">
            Last week{" "}
            <span className="changeValue">
              {lastWeekChange} <span className="trendIcon">📈</span>
            </span>
          </div>
        </div>

        {/* Right side: pie chart */}
        <div className="chartArea">
          <PieChart
            data={feedbackData.map(({ label, value, color }) => ({
              title: label,
              value,
              color,
            }))}
            // Custom styling
            style={{ height: "150px", width: "180px" }}
            lineWidth={100}
            paddingAngle={4}
            rounded={false}
            animate={true}
          />
        </div>
      </div>
    </FeedbackAnalyticsWrap>
  );
};

export default FeedbackAnalytics;
