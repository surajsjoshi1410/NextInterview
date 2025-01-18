import React, { useState } from "react";
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

const SupportQueryListViewFilter = ({ onApplyFilters, onClose }) => {
  const [status, setStatus] = useState("All");
  const [categories, setCategories] = useState({
    Technical: false,
    "Content-Related": false,
    Billing: false,
    General: false,
  });
  const [dateRange, setDateRange] = useState({
    Today: false,
    "Last 7 days": false,
    "Last 30 days": false,
  });

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleDateChange = (date) => {
    setDateRange((prev) => ({ ...prev, [date]: !prev[date] }));
  };

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
  };

  const handleApplyFilters = () => {
    const appliedFilters = {
      status,
      categories: Object.keys(categories).filter((key) => categories[key]),
      dateRange: Object.keys(dateRange).filter((key) => dateRange[key]),
    };
    onApplyFilters(appliedFilters);
    onClose();
  };

  return (
    <Container>
      <Header>More filters</Header>
      <SearchInput type="text" placeholder="Search" />
      <Section>
        <SectionTitle>status</SectionTitle>
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
        {Object.keys(categories).map((category) => (
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
        {Object.keys(dateRange).map((date) => (
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
