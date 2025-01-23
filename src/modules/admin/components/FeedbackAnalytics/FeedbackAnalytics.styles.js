import styled from "styled-components";
import theme from "../../../../theme/Theme";


export const FeedbackAnalyticsWrap=styled.div`
/* FeedbackAnalytics.css */
.feedbackContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
border-radius: 8px;
border: 1px solid #F5F5F5;
  padding: 1rem;
  max-width: 100%;
  margin: 1rem auto;
  // height:250px;
  font-family: "Helvetica", sans-serif;
}

.legendArea {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legendItem {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #444;
}

.legendDot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.lastWeekBadge {
  display: inline-block;
  background-color: #f5f5f5;
  color: #666;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  margin-top: 0.5rem;
}

.changeValue {
  color: #00b894; /* or a color that indicates “positive” change */
//   color:${theme.colors.secondary}
  margin-left: 0.3rem;
}

.trendIcon {
  margin-left: 0.2rem;
}

.chartArea {
  /* space for the chart on the right side */
}


`