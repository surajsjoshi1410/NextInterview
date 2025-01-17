// Unit tests for: UserDetailPieChart

import React from "react";
import { Pie } from "react-chartjs-2";
import UserDetailPieChart from "../UserDetailPieChart";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";

import "@testing-library/jest-dom";

// Mock the necessary Chart.js components
vi.mock("react-chartjs-2", () => ({
  Pie: vi.fn(() => <div>Mocked Pie Chart</div>),
}));

// vi.mock("../UserDetailPieChart.styles", () => ({
//   FeedbackContainer: vi.fn(({ children }) => <div>{children}</div>),
// }));

describe("UserDetailPieChart() UserDetailPieChart method", () => {
  // Happy path tests
  describe("Happy Paths", () => {
    it("should render performance and feedback pie charts with given data", () => {
      // Arrange
      const performanceData = { datasets: [], labels: [] };
      const feedbackData = { datasets: [], labels: [] };
      const options = {};

      // Act
      const { getByText } = render(
        <UserDetailPieChart
          performanceData={performanceData}
          feedbackData={feedbackData}
          options={options}
        />
      );

      // Assert
      expect(getByText("Users Performance Scores")).toBeInTheDocument();
      expect(getByText("Overall Feedback Analytics")).toBeInTheDocument();
      expect(Pie).toHaveBeenCalledTimes(2);
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    it("should handle empty performance and feedback data gracefully", () => {
      // Arrange
      const performanceData = { datasets: [], labels: [] };
      const feedbackData = { datasets: [], labels: [] };
      const options = {};

      // Act
      const { getByText } = render(
        <UserDetailPieChart
          performanceData={performanceData}
          feedbackData={feedbackData}
          options={options}
        />
      );

      // Assert
      expect(getByText("Users Performance Scores")).toBeInTheDocument();
      expect(getByText("Overall Feedback Analytics")).toBeInTheDocument();
    });

    it("should render without crashing when no options are provided", () => {
      // Arrange
      const performanceData = { datasets: [], labels: [] };
      const feedbackData = { datasets: [], labels: [] };

      // Act
      const { getByText } = render(
        <UserDetailPieChart
          performanceData={performanceData}
          feedbackData={feedbackData}
        />
      );

      // Assert
      expect(getByText("Users Performance Scores")).toBeInTheDocument();
      expect(getByText("Overall Feedback Analytics")).toBeInTheDocument();
    });
  });
});

// End of unit tests for: UserDetailPieChart
