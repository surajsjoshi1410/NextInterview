import React from "react";
import {
  TableWrapper,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  UserCell,
} from "./MetricTable.styles";
import MetricCard from "../MetricCard/MetricCard";

const MetricTable = () => {
  const data = [];

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
                      <div className="placeholder">
                        {item.user.name.charAt(0)}
                      </div>
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
        <MetricCard />
      </TableWrapper>
    </div>
  );
};

export default MetricTable;
