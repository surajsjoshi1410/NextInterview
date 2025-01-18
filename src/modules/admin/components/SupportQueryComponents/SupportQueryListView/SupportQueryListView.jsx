import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  SearchBar,
  SearchInput,
  FilterButton,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  StatusBadge,
  NameContainer,
  ProfileImage,
  NameEmail,
  QueryLink,
  FilterModal,
} from "./SupportQueryListView.styles";
import SupportQueryListViewFilter from "../SupportQueryListViewFilter/SupportQueryListViewFilter";

const queries = [
  {
    id: "1234",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s",
    category: "Technical",
    status: "In-progress",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "-",
  },
  {
    id: "User",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjR7vj2h745769RuDk7L9xxsSZyBs7ZBXUg&s",
    category: "Content",
    status: "Resolved",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "2h",
  },
    {
    id: "User",
    name: "Lana Steiner",
    email: "lana@gmail.com",
    profileImage: "https://static9.depositphotos.com/1499355/1200/i/450/depositphotos_12002062-Happy-Indian-business-woman..jpg",
    category: "Billing",
    status: "Pending",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "-",
  },
   {
    id: "User",
    name: "Demi Wilkinson",
    email: "dem@gmail.com",
    profileImage: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg",
    category: "General",
    status: "Open",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "-",
  },
  {
    id: "User",
    name: "Candice Wu",
    email: "candice@gmail.com",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s",
    category: "Content",
    status: "~ 12h / week",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "12/12/24",
  },
  {
    id: "User",
    name: "Natali Craig",
    email: "natali@gmail.com",
    profileImage: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg",
    
    category: "Billing",
    status: "Resolved",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "4h",
  },
  {
    id: "User",
    name: "Drew Cano",
    email: "drew@gmail.com",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjR7vj2h745769RuDk7L9xxsSZyBs7ZBXUg&s",

    category: "Billing",
    status: "Resolved",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "6h",
  },
  {
    id: "User",
    name: "Orlando Diggs",
    email: "orlando@gmail.com",
    profileImage: "https://static9.depositphotos.com/1499355/1200/i/450/depositphotos_12002062-Happy-Indian-business-woman..jpg",

    category: "Content",
    status: "Open",
    submittedOn: "12/12/24 12:42:14",
    resolutionTime: "-",
  },
];

const SupportQueryListView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredQueries, setFilteredQueries] = useState(queries);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilters = (filters) => {
    const { status, categories, dateRange } = filters;

    const filtered = queries.filter((query) => {
      const matchesStatus = status === "All" || query.status === status;
      const matchesCategory =
        categories.length === 0 || categories.includes(query.category);
      const matchesDate = dateRange.length === 0; // Add date filtering logic here if needed

      return matchesStatus && matchesCategory && matchesDate;
    });

    setFilteredQueries(filtered);
  };

  return (
    <Container>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search for a User"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FilterButton onClick={() => setIsFilterOpen(true)}>Filter</FilterButton>
      </SearchBar>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Query ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Submitted On</TableHeader>
            <TableHeader>Resolution Time</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredQueries
            .filter(
              (query) =>
                query.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                query.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((query, index) => (
              <TableRow key={index}>
                <TableCell>
                  <QueryLink to={`/admin/SupportQuery/${query.id}`}>
                    {query.id}
                  </QueryLink>
                </TableCell>
                <TableCell>
                  <NameContainer>
                    <ProfileImage
                      src={query.profileImage}
                      alt={`${query.name}'s profile`}
                    />
                    <NameEmail>
                      <strong>{query.name}</strong>
                      <br />
                      <span>{query.email}</span>
                    </NameEmail>
                  </NameContainer>
                </TableCell>
                <TableCell>{query.category}</TableCell>
                <TableCell>
                  <StatusBadge status={query.status}>{query.status}</StatusBadge>
                </TableCell>
                <TableCell>{query.submittedOn}</TableCell>
                <TableCell>{query.resolutionTime}</TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
      {isFilterOpen && (
        <FilterModal>
          <SupportQueryListViewFilter
            onApplyFilters={(filters) => {
              applyFilters(filters);
              setIsFilterOpen(false);
            }}
            onClose={() => setIsFilterOpen(false)}
          />
        </FilterModal>
      )}
    </Container>
  );
};

export default SupportQueryListView;
