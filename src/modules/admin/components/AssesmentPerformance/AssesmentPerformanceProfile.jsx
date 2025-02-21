import React from "react";

import { AssesmentPerformanceProfileWrapper } from "./AssesmentPerformanceProfile.styles";

const AssesmentPerformanceProfile = () => {
  // Example data
  const totalQuizzesTaken = "0 (Avg. 0%)";
  const bestScore = "0%";
  const leastScore = "0%";

  const bestScoreQuiz = {};

  const leastScoreQuiz = {};

  return (
    <AssesmentPerformanceProfileWrapper>
      <div className="assessment-container">
        <div className="stats-row">
          <div className="stat-box">
            <p className="stat-label">Total Quizzes taken</p>
            <p className="stat-value">{totalQuizzesTaken}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Best Score</p>
            <p className="stat-value">{bestScore}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Least Score</p>
            <p className="stat-value">{leastScore}</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="detail-row">
          <div className="badge">{bestScoreQuiz.label}</div>
          <span className="quiz-text">
            <span className="quiz-text-one">{bestScoreQuiz.quizName}</span> –{" "}
            <span className="quiz-text-two">{bestScoreQuiz.score}</span>
          </span>
        </div>
        <div className="detail-row">
          <div className="badgeTwo">{leastScoreQuiz.label}</div>
          <span className="quiz-text">
            <span className="quiz-text-one">{leastScoreQuiz.quizName}</span> –{" "}
            <span className="quiz-text-two">{leastScoreQuiz.score}</span>
          </span>
        </div>
      </div>
    </AssesmentPerformanceProfileWrapper>
  );
};

export default AssesmentPerformanceProfile;
