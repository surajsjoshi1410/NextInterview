import React, { useState } from 'react';
import { FaBell, FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye } from "react-icons/fa";

const TableContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 60px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Th = styled.th`
  text-weight: normal;
  text-align: left;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.lightgreen};
  color: ${({ theme }) => theme.colors.textgray};
`;

const Tr = styled.tr`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.lightgreen : theme.colors.light};
  cursor: pointer;

  &:nth-child(even) {
    background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.lightgreen : theme.colors.lightblue};
  }
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderblue};
  text-align: left;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.bluetext}; /* Default border color */
  border-radius: 4px;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light}; /* Color of the tick */
    position: relative;

    &::after {
      content: '✔';
      font-size: 12px;
      color: ${({ theme }) => theme.colors.light}; /* Tick color */
      display: block;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}; /* Hover border color */
  }
`;

const UserCell = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightbrown};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Email = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textgray};
`;

const ActiveHours = styled.div`
  color: ${({ theme, color }) => theme.colors[color]};
`;

const UserTable = ({ users, selectedRows, onRowSelectionChange }) => {
  //   const [selectedRows, setSelectedRows] = useState([]);

  //   const toggleRowSelection = (index) => {
  //     setSelectedRows((prevSelectedRows) =>
  //       prevSelectedRows.includes(index)
  //         ? prevSelectedRows.filter((row) => row !== index)
  //         : [...prevSelectedRows, index]
  //     );
  //   };


  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Topics Completed</Th>
            <Th>Avg. Active Hours</Th>
            <Th>Last Active</Th>
            <Th></Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Tr
              key={index}
              isSelected={selectedRows.includes(user.clerkId)}
              onClick={() => onRowSelectionChange(user.clerkId)}
            >
              <Td>
                <Checkbox
                  checked={selectedRows.includes(user.clerkId)}
                  onChange={(e) => e.stopPropagation()} // Prevent click conflict
                />
              </Td>
              <Td>
                <UserCell>
                  <Avatar> <img style={{ borderRadius: "50%", width: "40px", height: "40px" }} src={user.profilePic} alt={user.name} /></Avatar>
                  <UserInfo>
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                  </UserInfo>
                </UserCell>
              </Td>
              <Td>{user.role}</Td>
              <Td>{user.topicsCompleted}</Td>
              <Td>
                <ActiveHours
                  color={user.activeHours.includes("18h") ? "success" : "warning"}
                >
                  {user.activeHours}
                </ActiveHours>
              </Td>
              <Td>{user.lastActive}</Td>
              <Td>
                {user.bellIcon ? <FaBell /> : <FaBan color="#dc3545" />}
              </Td>
              <Td>
                <Link to={`/admin/userProfile`}state={{clerkId: user.clerkId}} style={{ textDecoration: 'none' }}>
                  <FaEye />
                </Link>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;