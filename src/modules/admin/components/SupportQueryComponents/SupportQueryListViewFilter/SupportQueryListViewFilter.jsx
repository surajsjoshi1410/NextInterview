import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Header,
  SearchInput,
  Section,
  SectionTitle,
  FilterOption,
  RadioInput,
  CheckboxInput,
  Actions,
  ClearButton,
  ApplyButton,
} from "./SupportQueryListViewFilter.styles";

const SupportQueryListViewFilter = ({ defaultFilters, storedFilters, onApplyFilters, onClose, onStoreFilters }) => {
  const [status, setStatus] = useState(storedFilters?.status || defaultFilters?.status || "All");
  const [categories, setCategories] = useState(
    storedFilters?.categories || defaultFilters?.categories || {
      Technical: false,
      "Content-Related": false,
      Billing: false,
      General: false,
    }
  );
  const [dateRange, setDateRange] = useState(
    storedFilters?.dateRange || defaultFilters?.dateRange || {
      Today: false,
      "Last 7 days": false,
      "Last 30 days": false,
    }
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(Object.keys(categories));
  const [filteredDates, setFilteredDates] = useState(Object.keys(dateRange));
  const containerRef = useRef(null); // Ref for the container

  // Reinitialize filters when modal is reopened
  useEffect(() => {
    if (storedFilters) {
      setStatus(storedFilters.status || "All");
      setCategories({
        ...defaultFilters.categories,
        ...storedFilters.categories,
      });
      setDateRange({
        ...defaultFilters.dateRange,
        ...storedFilters.dateRange,
      });
      setFilteredCategories(Object.keys(defaultFilters.categories || categories));
      setFilteredDates(Object.keys(defaultFilters.dateRange || dateRange));
    }
  }, [storedFilters, defaultFilters]);

  // Handle Status Change
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Handle Category Toggle
  const handleCategoryChange = (category) => {
    setCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  // Handle Date Toggle
  const handleDateChange = (date) => {
    setDateRange((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  // Handle Search Term Change
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter categories and date ranges dynamically based on search term
    setFilteredCategories(
      Object.keys(categories).filter((category) =>
        category.toLowerCase().includes(value)
      )
    );

    setFilteredDates(
      Object.keys(dateRange).filter((date) =>
        date.toLowerCase().includes(value)
      )
    );
  };

  // Clear Filters
  const handleClearFilters = () => {
    setStatus("All");
    setCategories({
      Technical: false,
      "Content-Related": false,
      Billing: false,
      General: false,
    });
    setDateRange({
      Today: false,
      "Last 7 days": false,
      "Last 30 days": false,
    });
    setSearchTerm("");
    setFilteredCategories(Object.keys(categories));
    setFilteredDates(Object.keys(dateRange));
    onStoreFilters({ status: "All", categories: {}, dateRange: {} }); // Reset stored filters
  };

  // Apply Filters
  const handleApplyFilters = () => {
    const appliedFilters = {
      status,
      categories: Object.keys(categories).filter((key) => categories[key]),
      dateRange: Object.keys(dateRange).filter((key) => dateRange[key]),
    };
    onApplyFilters(appliedFilters);
    onStoreFilters({ status, categories, dateRange }); // Store applied filters
    onClose();
  };

  // Close component when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Container ref={containerRef}>
      <Header>More filters</Header>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Section>
        <SectionTitle>Status</SectionTitle>
        <FilterOption>
          <RadioInput
            type="radio"
            name="status"
            value="All"
            checked={status === "All"}
            onChange={handleStatusChange}
          />
          All
        </FilterOption>
        <FilterOption>
          <RadioInput
            type="radio"
            name="status"
            value="Open"
            checked={status === "Open"}
            onChange={handleStatusChange}
          />
          Open
        </FilterOption>
        <FilterOption>
          <RadioInput
            type="radio"
            name="status"
            value="Pending"
            checked={status === "Pending"}
            onChange={handleStatusChange}
          />
          Pending
        </FilterOption>
        <FilterOption>
          <RadioInput
            type="radio"
            name="status"
            value="Resolved"
            checked={status === "Resolved"}
            onChange={handleStatusChange}
          />
          Resolved
        </FilterOption>
      </Section>

      <Section>
        <SectionTitle>Category</SectionTitle>
        {filteredCategories.map((category) => (
          <FilterOption key={category}>
            <CheckboxInput
              type="checkbox"
              checked={categories[category]}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </FilterOption>
        ))}
      </Section>

      <Section>
        <SectionTitle>Date</SectionTitle>
        {filteredDates.map((date) => (
          <FilterOption key={date}>
            <CheckboxInput
              type="checkbox"
              checked={dateRange[date]}
              onChange={() => handleDateChange(date)}
            />
            {date}
          </FilterOption>
        ))}
      </Section>

      <Actions>
        <ClearButton onClick={handleClearFilters}>Clear all</ClearButton>
        <ApplyButton onClick={handleApplyFilters}>Apply filter</ApplyButton>
      </Actions>
    </Container>
  );
};

export default SupportQueryListViewFilter;
