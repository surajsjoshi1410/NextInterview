import React, { useEffect, useState } from "react";
import UserSearchBar from "../../components/User/UserSearchBar";
import UserTable from "../../components/User/UserTable";
import UserCheckTopBar from "../../components/User/UserCheckTopBar";
import RestrictUser from "../../components/User/RestrictUser";
import SendReminder from "../../components/User/SendReminder";

import { getUsers } from "../../../../api/userApi";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // Manage selected rows
  const [isRestrictModalOpen, setRestrictModalOpen] = useState(false);
  const [isReminderModalOpen, setReminderModalOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const apiCaller = async () => {
      const response = await getUsers();
      console.log(response);
      const userListData = response.data.userData.map((item) => {
        return {
          clerkId: item.clerkUserData.id,
          name: item.clerkUserData.firstName || "Anonymous",
          email: item.userData.user_email,
          role: item.userData.user_role,
          topicsCompleted: "12/15 (80%)",
          activeHours: "~12h / week",
          lastActive:
            new Date(item.clerkUserData.lastActiveAt).getDate() +
            "/" +
            new Date(item.clerkUserData.lastActiveAt).getMonth() +
            1 +
            "/" +
            new Date(item.clerkUserData.lastActiveAt).getFullYear(),
          bellIcon: item.clerkUserData.locked,
          profilePic: item.clerkUserData.imageUrl,
        };
      });
      console.log("sdfghj", userListData);
      setUserList(userListData);
    };
    apiCaller();
  }, []);

  const users = [
    {
      name: "Olivia Rhye",
      email: "olivia@gmail.com",
      role: "User",
      topicsCompleted: "12/15 (80%)",
      activeHours: "~12h / week",
      lastActive: "3h ago",
      bellIcon: false,
    },
    {
      name: "Rhodes",
      email: "rhodes@gmail.com",
      role: "User",
      topicsCompleted: "10/15 (66%)",
      activeHours: "~19h / week",
      lastActive: "2/12/24",
      bellIcon: false,
    },
    {
      name: "Phoenix Baker",
      email: "phoenix@gmail.com",
      role: "User",
      topicsCompleted: "12/15 (80%)",
      activeHours: "~18h / week",
      lastActive: "12/12/24",
      bellIcon: false,
    },
    // Add more users as needed...
  ];

  const filteredUsers = userList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRowSelection = (clerkId) => {
    setSelectedRows(
      (prevSelectedRows) =>
        prevSelectedRows.includes(clerkId)
          ? prevSelectedRows.filter((id) => id !== clerkId) // Deselect user
          : [...prevSelectedRows, clerkId] // Select user
    );
  };

  // const toggleSelectAll = (isChecked) => {
  //   if (isChecked) {
  //     setSelectedRows(filteredUsers.map((_, index) => index)); // Select all visible users
  //   } else {
  //     setSelectedRows([]); // Deselect all users
  //   }
  // };

  const toggleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(filteredUsers.map((user) => user.clerkId)); // Select all users using unique IDs
    } else {
      setSelectedRows([]); // Deselect all users
    }
  };

  const handleRestrictUserClick = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one user to restrict.");
      return;
    }
    console.log(selectedRows);
    setRestrictModalOpen(true);
  };

  const handleSendReminderClick = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one user to send a reminder.");
      return;
    }
    setReminderModalOpen(true);
  };

  const handleCloseRestrictModal = () => {
    setRestrictModalOpen(false);
  };

  const handleCloseReminderModal = () => {
    setReminderModalOpen(false);
  };

  return (
    <div>
      <UserSearchBar
        placeholder="Search for a User"
        onChange={setSearchQuery}
      />
      <UserCheckTopBar
        selectAll={
          selectedRows.length === filteredUsers.length &&
          filteredUsers.length > 0
        }
        onSelectAllChange={toggleSelectAll}
        onRestrictUserClick={handleRestrictUserClick}
        onSendReminderClick={handleSendReminderClick}
      />
      <UserTable
        users={filteredUsers}
        selectedRows={selectedRows}
        onRowSelectionChange={toggleRowSelection}
      />
      <RestrictUser
        isOpen={isRestrictModalOpen}
        selectedRows={selectedRows}
        onClose={handleCloseRestrictModal}
      />
      <SendReminder
        isOpen={isReminderModalOpen}
        onClose={handleCloseReminderModal}
      />
    </div>
  );
};

export default Users;
