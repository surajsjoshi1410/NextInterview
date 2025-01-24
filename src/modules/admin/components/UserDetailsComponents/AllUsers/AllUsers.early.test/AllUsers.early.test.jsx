// Unit tests for: AllUsers

import React from "react";
import AllUsers from "../AllUsers";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Mocking the styled components
// jest.mock("../AllUsers.styles", () => ({
//   Section: ({ children }) => <div>{children}</div>,
//   Table: ({ children }) => <table>{children}</table>,
//   TableHeader: ({ children }) => <th>{children}</th>,
//   TableRow: ({ children }) => <tr>{children}</tr>,
//   TableCell: ({ children }) => <td>{children}</td>,
//   UserCell: ({ children }) => <div>{children}</div>,
// }));

describe("AllUsers() AllUsers method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the table headers correctly", () => {
      // Test to ensure the table headers are rendered as expected
      render(<AllUsers users={[]} />);
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Score")).toBeInTheDocument();
      expect(screen.getByText("Feedback")).toBeInTheDocument();
    });

    it("should render user details correctly", () => {
      // Test to ensure user details are rendered correctly
      const users = [
        {
          name: "John Doe",
          email: "john@example.com",
          score: 85,
          feedback: "Great job!",
          image: "john.jpg",
        },
      ];
      render(<AllUsers users={users} />);
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
      expect(screen.getByText("85")).toBeInTheDocument();
      expect(screen.getByText("Great job!")).toBeInTheDocument();
      expect(screen.getByAltText("John Doe")).toHaveAttribute(
        "src",
        "john.jpg"
      );
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should handle an empty users array gracefully", () => {
      // Test to ensure the component handles an empty users array without errors
      render(<AllUsers users={[]} />);
      const rows = screen.queryAllByRole("row");
      expect(rows.length).toBe(1); // Only the header row should be present
    });

    it("should handle missing user properties gracefully", () => {
      // Test to ensure the component handles missing user properties without errors
      const users = [
        {
          name: "Jane Doe",
          email: "jane@example.com",
          // score and feedback are missing
          image: "jane.jpg",
        },
      ];
      render(<AllUsers users={users} />);
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.getByText("jane@example.com")).toBeInTheDocument();
      expect(screen.getByAltText("Jane Doe")).toHaveAttribute(
        "src",
        "jane.jpg"
      );
      // Check for missing score and feedback
      const cells = screen.getAllByRole("cell");
      expect(cells[2].textContent).toBe(""); // Score cell
      expect(cells[3].textContent).toBe(""); // Feedback cell
    });
  });
});

// End of unit tests for: AllUsers
