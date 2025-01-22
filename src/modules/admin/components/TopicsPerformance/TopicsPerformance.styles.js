import styled from "styled-components";

export const TopicsPerformanceWrapper = styled.div`
/* TopicsPerformance.css */

/* Container around the entire table */
.topicsPerformanceContainer {
  background-color: #fff;
  border-radius: 8px;
border: 1px solid #F5F5F5;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 60%;
  font-family: "Helvetica", sans-serif;
  margin-left: 20px;
}

/* The table itself */
.topicsTable {
  width: 100%;
  border-collapse: collapse;
}

.topicsTable th,
.topicsTable td {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

/* Header row styling */
.topicsTable thead tr {
  background-color: #edf8ed; /* Light green header */
}

.headerCell {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  position: relative;
}

/* If you want an info icon next to “Overall Assessments Score” */
.infoIcon {
  margin-left: 0.3rem;
  font-size: 0.8rem;
  color: #888;
}

/* Table body styling */
.topicsTable tbody tr:hover {
  background-color: #fafafa;
}

/* For the first column: topic image + text */
.topicCell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.topicThumbnail {
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.topicName {
  font-size: 0.9rem;
  color: #444;
}

/* For the score and feedback cells */
.scoreCell {
  font-size: 0.9rem;
  color: #444;
}

.feedbackCell {
  font-size: 0.9rem;
  color: #444;
}

`;