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
          console.log("Question data:", response.data);
          setFilteredQuestions(response.data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      
      };

      // Fetch the module codes
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
          // Assuming difficulty levels are part of the question data
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
        module_code: "",        // module_code should be a single string
        level: [],              // Filter by level
        topic_code: "",         // Filter by topic_code if needed
        question_type: "",      // If applicable
        subtopic_code: "",      // If applicable
      };
    
      // Log to verify the structure of selectedFilters
      console.log("selectedFilters:", selectedFilters);
    
      // Add levels to filters
      if (selectedFilters.easy) filters.level.push("easy");
      if (selectedFilters.medium) filters.level.push("medium");
      if (selectedFilters.hard) filters.level.push("hard");
    
      // Add selected topic to the module_code filter
      Object.keys(selectedFilters.topics).forEach((topic) => {

        if (selectedFilters.topics[topic]) {
          moduleCodes.map((module) => {
            if(module.module_name===topic){
              filters.module_code = module.module_code;
            }
            });
        };
      });
    
      // Check if subtopic_code and other values are set in selectedFilters
      if (selectedFilters.topic_code) filters.topic_code = selectedFilters.topic_code;
      if (selectedFilters.subtopic_code) filters.subtopic_code = selectedFilters.subtopic_code;
      if (selectedFilters.question_type) filters.question_type = selectedFilters.question_type;
    

    
      // Ensure level is passed as a comma-separated string
      const levelFilter = filters.level.length ? filters.level.join(',') : "";
    
      try {
        console.log("updated filters", filters);
        const response = await getQuestionBank(
          filters.module_code, 
          filters.topic_code,   // Pass topic_code if needed
          filters.subtopic_code, // Pass subtopic_code if needed
          filters.question_type, // Pass question_type if needed
          levelFilter           // Pass level as a comma-separated string
        );
    
        // Update the filtered questions
        setFilteredQuestions(response.data);  
        setIsDropdownOpen(false);               // Close dropdown after applying filters
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };
    
    
    
    
    

    const clearFilters = async () => {
      setSelectedFilters({
        solved: false,
        unsolved: false,
        easy: false,
        medium: false,
        hard: false,
        topics: {},
      });
    
      // Refetch all questions after clearing filters
      try {
        const response = await getQuestionBank(); // Fetch all questions again
        setFilteredQuestions(response.data); // Set all questions to the state
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    

    const getModuleName = (moduleCode) => {
      const module = moduleCodes.find((module) => module.module_code === moduleCode);
      return module ? module.module_name : "Unknown Module";
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
                        value={module.module_code}
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
                to={`/user/questionBank/${item._id}`}
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
                  <Status>
          {item.status === "Completed" ? "Completed" : "Pending"}
        </Status>
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
