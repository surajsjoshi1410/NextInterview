import React from "react";
import { Link } from "react-router-dom";
import {
  TableWrapper,
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from "./AssesmentsPerformance.styles";

const AssesmentsPerformance = () => {
  const data = [
    {
      assessment: "Skill Assessment",
      path: "/admin/skill-assessment",
      attempts: "1234",
      time: "24m",
      score: "64%",
    },
    {
      assessment: "Try it yourself",
      path: "/admin/try-it-yourself",
      attempts: "1234",
      time: "24m",
      score: "24%",
    },
    {
      assessment: "Question bank",
      path: "/admin/question-bank",
      attempts: "1234",
      time: "24m",
      score: "24%",
    },
    {
      assessment: "Challenges",
      path: "/admin/challenges",
      attempts: "1234",
      time: "24m",
      score: "24%",
    },
  ];

  return (
    <TableWrapper>
      <h3>Assessments Performance</h3>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Assessment</TableHeader>
            <TableHeader>
              Total Attempts <span>?</span>
            </TableHeader>
            <TableHeader>Avg. time spent</TableHeader>
            <TableHeader>Avg. performance score</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link to={item.path}>{item.assessment}</Link>
              </TableCell>
              <TableCell>{item.attempts}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell className="highlight">{item.score}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default AssesmentsPerformance;
