import React from "react";
import { TableWrapper, Table, TableHeader, TableRow, TableCell } from "./QuestionsName.styles";

const QuestionsName = () => {
  const questions = [
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
    {
      question: "Which of the following best describes the role of a data scientist",
      correctRate: "95%",
    },
  ];

  return (
    <TableWrapper>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Question name</TableHeader>
            <TableHeader>Correct answer rate</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {questions.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.question}</TableCell>
              <TableCell>{item.correctRate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default QuestionsName;
