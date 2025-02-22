import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/Theme";
import { Link } from "react-router-dom";
import {
  Container,
  QuestionCard,
  QuestionText,
  MetaInfo,
  Topic,
  Difficulty,
  Type,
  Status,
  MoreFilters,
  DropdownContainer,
  FilterSection,
  ApplyButton,
  ClearButton,
  CheckboxLabel,
  FilterHeader,
  CloseFilterButton,
  SubText,
  SearchInput,
} from "../QuestionBank/QuestionBank.styles";
import { IoClose } from "react-icons/io5"; // Close icon
import { RiArrowDropDownLine } from "react-icons/ri";
import { getQuestionBank } from "../../../../api/questionBankApi"; // Adjust the API path
import { getModuleCode } from "../../../../api/addNewModuleApi"; // Adjust the API path

const QuestionBank = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterSearchQuery, setFilterSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    solved: false,
    unsolved: false,
    easy: false,
    medium: false,
    hard: false,
    topics: {},
  });

  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [moduleCodes, setModuleCodes] = useState([]);
  const [difficultyLevels, setDifficultyLevels] = useState([]);

  useEffect(() => {
    // Fetch the questions on load
    const fetchQuestions = async () => {
      try {
        const response = await getQuestionBank();
        setFilteredQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    // Fetch the module codes and difficulty levels
    const fetchModuleCodes = async () => {
      try {
        const response = await getModuleCode();
        setModuleCodes(response.data); // Set the module codes
        console.log("Fetching Modules:", response.data);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    const fetchDifficultyLevels = async () => {
      try {
        const response = await getQuestionBank();
        console.log("Question data:", response.data);
        // Assuming difficulty levels are a part of the question data, like ["Easy", "Medium", "Hard"]
        const levels = response.data.map((question) => question.level);
        const uniqueLevels = [...new Set(levels)]; // Remove duplicate levels
        setDifficultyLevels(uniqueLevels);
      } catch (error) {
        console.error("Error fetching difficulty levels:", error);
      }
    };

    fetchQuestions();
    fetchModuleCodes();
    fetchDifficultyLevels();
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleCheckboxChange = (category, key) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [key]: !prevFilters[category][key],
      },
    }));
  };

  const applyFilters = async () => {
    const filters = {
      level: [],
      topics: [],
    };
  
    // Add levels to filters
    if (selectedFilters.easy) filters.level.push("easy");
    if (selectedFilters.medium) filters.level.push("medium");
    if (selectedFilters.hard) filters.level.push("hard");
  
    // Add topics to filters
    Object.keys(selectedFilters.topics).forEach((topic) => {
      if (selectedFilters.topics[topic]) filters.topics.push(topic);
    });
  
    try {
      // Send the filters as query parameters
      const response = await getQuestionBank(filters.level, filters.topics);
      setFilteredQuestions(response.data);
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };
  
  const clearFilters = () => {
    setSelectedFilters({
      solved: false,
      unsolved: false,
      easy: false,
      medium: false,
      hard: false,
      topics: {},
    });
    setFilteredQuestions([]); 
    fetchQuestions(); // Refetch all questions
  };

  // Function to get the module name from module code
  const getModuleName = (moduleCode) => {
    const module = moduleCodes.find((module) => module.module_code === moduleCode);
    return module ? module.module_name : "Unknown Module"; // Return the module name or a fallback value
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MoreFilters onClick={toggleDropdown}>
            More filters <RiArrowDropDownLine style={{ fontSize: "25px" }} />
          </MoreFilters>
        </div>

        {isDropdownOpen && (
          <DropdownContainer>
            <FilterHeader>
              <SearchInput
                type="text"
                placeholder="Search filters..."
                value={filterSearchQuery}
                onChange={(e) => setFilterSearchQuery(e.target.value.toLowerCase())}
              />
              <CloseFilterButton onClick={closeDropdown}>
                <IoClose size={22} />
              </CloseFilterButton>
            </FilterHeader>

            <FilterSection>
              <SubText>Questions Type</SubText>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={selectedFilters.solved}
                  onChange={() => handleCheckboxChange("solved", "solved")}
                />{" "}
                Solved
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={selectedFilters.unsolved}
                  onChange={() => handleCheckboxChange("unsolved", "unsolved")}
                />{" "}
                Unsolved
              </CheckboxLabel>
            </FilterSection>

            <FilterSection>
              <SubText>Difficulty Level</SubText>
              {difficultyLevels.map((level) => (
                <CheckboxLabel key={level}>
                  <input
                    type="checkbox"
                    checked={selectedFilters[level.toLowerCase()]}
                    onChange={() => handleCheckboxChange(level.toLowerCase(), level.toLowerCase())}
                  />{" "}
                  {level}
                </CheckboxLabel>
              ))}
            </FilterSection>

            <FilterSection>
              <SubText>Topics</SubText>
              {moduleCodes
                .filter((module) => module.module_name.toLowerCase().includes(filterSearchQuery))
                .map((module) => (
                  <CheckboxLabel key={module.module_code}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.topics[module.module_name]}
                      onChange={() =>
                        handleCheckboxChange("topics", module.module_name)
                      }
                    />{" "}
                    {module.module_name}
                  </CheckboxLabel>
                ))}
            </FilterSection>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <ClearButton onClick={clearFilters}>Clear all</ClearButton>
              <ApplyButton onClick={applyFilters}>Apply filter</ApplyButton>
            </div>
          </DropdownContainer>
        )}

        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((item, index) => (
            <Link
              to={`/user/questionBank/${item.id}`}
              key={index}
              style={{
                textDecoration: "none",
              }}
            >
              <QuestionCard key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <QuestionText>
                    {index + 1}. {item.question}
                  </QuestionText>
                  <MetaInfo>
                    <Topic>Module Name - {getModuleName(item.module_code)}</Topic> {/* Get module name */}
                    <Difficulty>Level - {item.level}</Difficulty>
                    <Type>Type - {item.question_type}</Type>
                  </MetaInfo>
                </div>
                <Status>{item.status}</Status>
              </QuestionCard>
            </Link>
          ))
        ) : (
          <p>No questions match the selected filters.</p>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default QuestionBank;
