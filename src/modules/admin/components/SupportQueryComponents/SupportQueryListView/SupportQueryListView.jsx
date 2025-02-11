import React, { useEffect, useState } from "react";
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
import { getAllSupportQuery } from "../../../../../api/supportQueryApi";
import { getUserByClerkId } from "../../../../../api/userApi";
const SupportQueryListView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [storedFilters, setStoredFilters] = useState({
    status: "All",
    categories: { Technical: false, Content: false, Billing: false, General: false },
    dateRange: { Today: false, "Last 7 days": false, "Last 30 days": false },
  });

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await getAllSupportQuery();
        console.log("response", response);
        if (response && Array.isArray(response.data)) {
          let queriesWithProfilePics = await Promise.all(
            response.data.map(async (query) => {
              if (query.user_id?.clerkUserId) {
                try {
                  const userData = await getUserByClerkId(query.user_id.clerkUserId);
                  console.log("userData", userData);
                  return {
                    ...query,
                    profileImage: userData?.data?.user?.user_profile_pic || userData?.data?.clerkUserData?.imageUrl || "",
                  };


                } catch (error) {
                  console.error("Error fetching user profile:", error);
                  return { ...query, profileImage: "" };
                }
              }
              return { ...query, profileImage: "" };
            })
          );

          setQueries(queriesWithProfilePics);
          setFilteredQueries(queriesWithProfilePics);
        } else {
          console.error("Unexpected API response format:", response);
          setQueries([]);
          setFilteredQueries([]);
        }
      } catch (error) {
        console.error("Error fetching queries:", error);
        setQueries([]);
        setFilteredQueries([]);
      }
    };
    fetchQueries();
  }, []);
  useEffect(() => {
    applyFilters(storedFilters);
  }, [storedFilters, queries]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilters = (filters) => {
    if (!Array.isArray(queries)) {
      console.error("applyFilters was called before queries were set.");
      return;
    }

    const { status, categories, dateRange } = filters;
    const filtered = queries.filter((query) => {
      const matchesStatus = status === "All" || query.status === status;
      const matchesCategory =
        Object.keys(categories).every((key) => !categories[key]) ||
        categories[query.category];
      const matchesDate = Object.keys(dateRange).every((key) => !dateRange[key]);

      return matchesStatus && matchesCategory && matchesDate;
    });

    setFilteredQueries(filtered);
    setStoredFilters(filters);
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
                query.user_id?.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                query.user_id?.user_email?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((query, index) => (
              <TableRow key={index}>
                <TableCell>
                  <QueryLink to={`/admin/SupportQuery/${query._id}`}>{query._id}</QueryLink>
                </TableCell>
                <TableCell>
                  <NameContainer>
                    <ProfileImage
                      src={query.profileImage}
                      alt={`${query.user_id?.user_name || 'User'}'s profile`}
                    />

                    <NameEmail>
                      <strong>{query.user_id?.user_name || "N/A"}</strong>
                      <br />
                      <span>{query.user_id?.user_email || "N/A"}</span>
                    </NameEmail>
                  </NameContainer>
                </TableCell>
                <TableCell>{query.category}</TableCell>
                <TableCell>
                  <StatusBadge status={query.status}>{query.status}</StatusBadge>
                </TableCell>
                <TableCell>{new Date(query.submitted_on).toLocaleDateString()}</TableCell>
               <TableCell>
  {query.submitted_on && query.closed_on
    ? (() => {
        const submitted = new Date(query.submitted_on);
        const closed = new Date(query.closed_on);
        const diffInMs = closed - submitted;
        const diffInHours = diffInMs / (1000 * 60 * 60);
        const days = Math.floor(diffInHours / 24);
        const hours = Math.round(diffInHours % 24);
        return days > 0
          ? `${days} day${days > 1 ? "s" : ""} ${hours} hr${hours !== 1 ? "s" : ""}`
          : `${hours} hr${hours !== 1 ? "s" : ""}`;
      })()
    : "N/A"}
</TableCell>

              </TableRow>
            ))}
        </tbody>
      </Table>
      {isFilterOpen && (
        <FilterModal>
          <SupportQueryListViewFilter
            defaultFilters={storedFilters}
            storedFilters={storedFilters}
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
