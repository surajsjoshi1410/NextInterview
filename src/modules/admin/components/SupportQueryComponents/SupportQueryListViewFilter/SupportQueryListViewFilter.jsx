import React, { useState, useEffect } from "react";
import {
  FilterContainer,
  FilterSection,
  FilterTitle,
  FilterOptions,
  FilterOption,
  Checkbox,
  Radio,
  ButtonsContainer,
  ClearButton,
  ApplyButton,
  Title,
} from "./SupportQueryListViewFilter.styles";
// import Title from "antd/es/skeleton/Title";

const SupportQueryListViewFilter = ({ defaultFilters, storedFilters, onApplyFilters, onClose }) => {
  const [filters, setFilters] = useState(storedFilters || defaultFilters);

  useEffect(() => {
    setFilters(storedFilters || defaultFilters);
  }, [storedFilters, defaultFilters]);

  const handleStatusChange = (status) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: { ...prev.categories, [category]: !prev.categories[category] }
    }));
  };

  const handleDateChange = (dateRange) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: { Today: false, "Last 7 days": false, "Last 30 days": false, [dateRange]: true }
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <FilterContainer>
      <FilterSection>
        <Title>Filters</Title>
        <FilterTitle>Status</FilterTitle>
        <FilterOptions>
          {["All", "Open", "Pending", "Resolved"].map((status) => (
            <FilterOption key={status}>
              <Radio
                type="radio"
                name="status"
                checked={filters.status === status}
                onChange={() => handleStatusChange(status)}
              />
              {status}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        <FilterOptions>
          {Object.keys(filters.categories).map((category) => (
            <FilterOption key={category}>
              <Checkbox
                type="checkbox"
                checked={filters.categories[category]}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Date</FilterTitle>
        <FilterOptions>
          {Object.keys(filters.dateRange).map((dateRange) => (
            <FilterOption key={dateRange}>
              <Checkbox
                type="checkbox"
                checked={filters.dateRange[dateRange]}
                onChange={() => handleDateChange(dateRange)}
              />
              {dateRange}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterSection>

      <ButtonsContainer>
        <ClearButton onClick={handleClearFilters}>Clear all</ClearButton>
        <ApplyButton onClick={handleApplyFilters}>Apply filter</ApplyButton>
      </ButtonsContainer>
    </FilterContainer>
  );
};

export default SupportQueryListViewFilter;
