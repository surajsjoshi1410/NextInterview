import React, { useState } from "react";
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
    Companies,
    Status,
    Tag,
    MoreFilters,
    CloseButton,
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

const allQuestions = [
    { question: "What is AI?", topic: "Machine Learning", level: "Easy", type: "MCQ", companies: ["Amazon", "Google"], status: "Completed" },
    { question: "What is Deep Learning?", topic: "Deep Learning", level: "Medium", type: "MCQ", companies: ["Facebook", "Flipkart"], status: "Pending" },
    { question: "What is Python?", topic: "Python", level: "Hard", type: "MCQ", companies: ["Amazon"], status: "Completed" },
    { question: "What is SQL?", topic: "SQL", level: "Easy", type: "MCQ", companies: ["Google"], status: "Pending" },
    { question: "How does backpropagation work?", topic: "Deep Learning", level: "Hard", type: "MCQ", companies: ["Amazon", "Flipkart"], status: "Completed" },
];

const filtersList = [
    { name: "Top 50 coding questions", removable: true },
    { name: "Machine Learning 75", removable: false },
];

const QuestionBank = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [filterSearchQuery, setFilterSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({
        solved: false,
        unsolved: true,
        easy: false,
        medium: true,
        hard: true,
        topics: { SQL: false, "Machine Learning": false, "Deep Learning": true, Python: true },
        companies: { Google: false, Facebook: false, Amazon: true, Flipkart: true },
    });

    const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false); // Close button action

    const handleCheckboxChange = (category, key) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [key]: !prevFilters[category][key],
            },
        }));
    };
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = allQuestions.filter((q) => q.question.toLowerCase().includes(query));
        setFilteredQuestions(filtered);
    };

    const applyFilters = () => {
        let filtered = allQuestions.filter((q) => {
            return (
                (selectedFilters.easy && q.level === "Easy") ||
                (selectedFilters.medium && q.level === "Medium") ||
                (selectedFilters.hard && q.level === "Hard")
            );
        });

        filtered = filtered.filter((q) =>
            Object.keys(selectedFilters.topics).some((key) => selectedFilters.topics[key] && q.topic.includes(key))
        );

        filtered = filtered.filter((q) =>
            Object.keys(selectedFilters.companies).some((key) => selectedFilters.companies[key] && q.companies.includes(key))
        );

        setFilteredQuestions(filtered);
        setIsDropdownOpen(false);
    };

    const clearFilters = () => {
        setSelectedFilters({
            solved: false,
            unsolved: true,
            easy: false,
            medium: true,
            hard: true,
            topics: { SQL: false, "Machine Learning": false, "Deep Learning": true, Python: true },
            companies: { Google: false, Facebook: false, Amazon: true, Flipkart: true },
        });
        setFilteredQuestions(allQuestions);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {filtersList.map((filter, index) => (
                            <Tag key={index} removable={filter.removable}>
                                {filter.name}
                                {filter.removable && <CloseButton>&times;</CloseButton>}
                            </Tag>
                        ))}
                    </div>
                    <MoreFilters onClick={toggleDropdown}>
                        More filters <RiArrowDropDownLine 
                        style={{
                            fontSize: "25px",
                        }}
                        
                        />
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
                                <input type="checkbox" checked={selectedFilters.solved} onChange={() => handleCheckboxChange("solved", "solved")} /> Solved
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input type="checkbox" checked={selectedFilters.unsolved} onChange={() => handleCheckboxChange("unsolved", "unsolved")} /> Unsolved
                            </CheckboxLabel>
                        </FilterSection>

                        <FilterSection>
                        <SubText>Difficulty Level</SubText>
                            <CheckboxLabel>
                                <input type="checkbox" checked={selectedFilters.easy} onChange={() => handleCheckboxChange("easy", "easy")} /> Easy
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input type="checkbox" checked={selectedFilters.medium} onChange={() => handleCheckboxChange("medium", "medium")} /> Medium
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input type="checkbox" checked={selectedFilters.hard} onChange={() => handleCheckboxChange("hard", "hard")} /> Hard
                            </CheckboxLabel>
                        </FilterSection>

                        <FilterSection>
                        <SubText>Topics</SubText>
                            {Object.keys(selectedFilters.topics).filter((key) => key.toLowerCase().includes(filterSearchQuery)).map((key) => (
                                <CheckboxLabel key={key}>
                                    <input type="checkbox" checked={selectedFilters.topics[key]} onChange={() => handleCheckboxChange("topics", key)} /> {key}
                                </CheckboxLabel>
                            ))}
                        </FilterSection>

                        <FilterSection>
                        <SubText>Similar to Questions Asked</SubText>
                            {Object.keys(selectedFilters.companies).filter((key) => key.toLowerCase().includes(filterSearchQuery)).map((key) => (
                                <CheckboxLabel key={key}>
                                    <input type="checkbox" checked={selectedFilters.companies[key]} onChange={() => handleCheckboxChange("companies", key)} /> {key}
                                </CheckboxLabel>
                            ))}
                        </FilterSection>

                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                            <ClearButton onClick={clearFilters}>Clear all</ClearButton>
                            <ApplyButton onClick={applyFilters}>Apply filter</ApplyButton>
                        </div>
                    </DropdownContainer>
                )}

                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((item, index) => (
                        <Link to={`/user/questionBank/${item.id}`} key={index}
                        style={{
                            textDecoration: "none",
                        }}
                        >
                        <QuestionCard key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <QuestionText>{index + 1}. {item.question}</QuestionText>
                                <MetaInfo>
                                    <Topic>Topic - {item.topic}</Topic>
                                    <Difficulty>Level - {item.level}</Difficulty>
                                    <Type>Type - {item.type}</Type>
                                    <Companies>Companies this question asked - {item.companies.join(", ")}</Companies>
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
