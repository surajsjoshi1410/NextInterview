import React from "react";
import { TableWrapper, Table, TableRow, TableHeader, TableCell, UserCell } from "./MetricTable.styles";
import MetricCard from "../MetricCard/MetricCard";

const MetricTable = () => {
  const data = [
    {
      metric: "Most Active user",
      user: { name: "Olivia Rhye", email: "olivia@gmail.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s" },
      output: "12 Minutes",
    },
    {
      metric: "Least Active User",
      user: { name: "Phoenix Baker", email: "phoenix@gmail.com", image: "https://static.startuptalky.com/2024/03/Swati-Bhargava-Women-Entrepreneurs-In-India-StartupTalky.jpg" },
      output: "5 minutes",
    },
    {
      metric: "Most active time",
      user: { name: "Lana Steiner", email: "lana@gmail.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcs5wwDykofob7CrYUCZwZCR5kaGA_YCoDw&s" },
      output: "Weekdays",
    },
    {
      metric: "Device Split",
      user: { name: "Candice Wu", email: "candice@gmail.com", image: null }, // No image
      output: "mobile (60%), desktop (35%)",
    },
  ];

  return (
    <div>
      <h3>Metrics</h3>

    <TableWrapper>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Metric</TableHeader>
            <TableHeader>User</TableHeader>
            <TableHeader>Output</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.metric}</TableCell>
              <TableCell>
                <UserCell>
                  {item.user.image ? (
                    <img src={item.user.image} alt={item.user.name} />
                  ) : (
                    <div className="placeholder">{item.user.name.charAt(0)}</div>
                  )}
                  <div>
                    <span className="name">{item.user.name}</span>
                    <span className="email">@{item.user.email}</span>
                  </div>
                </UserCell>
              </TableCell>
              <TableCell>{item.output}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <MetricCard/>
    </TableWrapper>
    </div>
  );
};

export default MetricTable;
