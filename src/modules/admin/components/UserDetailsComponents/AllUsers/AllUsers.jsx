import React from "react";
import {
  Section,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  UserCell,
} from "./AllUsers.styles";

const AllUsers = ({ users }) => {
  return (
    <Section>
      <h3>All Users</h3>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Score</TableHeader>
            <TableHeader>Feedback</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <UserCell>
                  <img src={user.image} alt={user.name} />
                  <span>{user.name}</span>
                </UserCell>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.score}</TableCell>
              <TableCell>{user.feedback}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default AllUsers;
