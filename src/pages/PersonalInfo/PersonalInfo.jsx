import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  FormContainer,
  Title,
  InputGroup,
  InputLabel,
  InputField,
  SubmitButton,
  ErrorMessage,
} from "../PersonalInfo/PersonalInfo.styles";
import logo from "../../assets/Logo.png";

const PersonalInfo = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    linkedIn: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    linkedIn: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate username
    if (!formValues.userName) {
      newErrors.userName = "User name is required.";
    }

    // Validate LinkedIn
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (!formValues.linkedIn) {
      newErrors.linkedIn = "LinkedIn profile link is required.";
    } else if (!linkedInRegex.test(formValues.linkedIn)) {
      newErrors.linkedIn = "Please enter a valid LinkedIn profile link.";
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formValues.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formValues.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formValues);
      // Proceed to the next step or handle the form data
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
      </Header>
      <FormContainer>
        <Title>Enter your details</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel>User name</InputLabel>
            <InputField
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={formValues.userName}
              onChange={handleInputChange}
            />
            {errors.userName && <ErrorMessage>{errors.userName}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <InputLabel>LinkedIn profile link</InputLabel>
            <InputField
              type="text"
              name="linkedIn"
              placeholder="Enter your profile link"
              value={formValues.linkedIn}
              onChange={handleInputChange}
            />
            {errors.linkedIn && <ErrorMessage>{errors.linkedIn}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <InputLabel>Phone number</InputLabel>
            <InputField
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
          </InputGroup>
          <SubmitButton type="submit">Next</SubmitButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default PersonalInfo;
