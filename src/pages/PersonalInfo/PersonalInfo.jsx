import React, { useState } from "react";
import {
  Container,
  FormContainer,
  Title,
  InputGroup,
  InputLabel,
  InputField,
  SubmitButton,
  ErrorMessage,
  BackIcon,
  SkipButton,
} from "../PersonalInfo/PersonalInfo.styles";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import { IoMdArrowBack } from "react-icons/io";
import { useUser } from "@clerk/clerk-react";
import { createUserProfile, getUserByClerkId } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

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
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();

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
    // const phoneRegex = /^[0-9]{10}$/;
    // if (!formValues.phoneNumber) {
    //   newErrors.phoneNumber = "Phone number is required.";
    // } else if (!phoneRegex.test(formValues.phoneNumber)) {
    //   newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user", user);

    if (validateForm()) {
      const data = await getUserByClerkId(user.id);
      console.log("data", data);
      const submissionData = {
        user_id: data.data.user._id,
        user_name: formValues.userName,
        user_linkedin_profile_link: formValues.linkedIn,
      };
      // console.log("submissionData", submissionData);
      await createUserProfile(submissionData);
      console.log("Form submitted successfully:", formValues);
      navigate("/question1");
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <FormContainer>
          {/* 
          <BackIcon onClick={handleGoBack}
            style={{
              border: '1px solid grey',
              // padding: '2px',
              justifyContent: 'center',
              alignContent: 'center',
              padding: '8px',
              borderRadius: '4px',
              alignItems: 'center',
            }}
          >
            <IoMdArrowBack />
          </BackIcon> */}

          <Title>Enter your details</Title>
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "30px" }}
          >
            <InputGroup>
              <InputLabel>User name</InputLabel>
              <InputField
                type="text"
                name="userName"
                placeholder="Enter your name"
                value={formValues.userName}
                onChange={handleInputChange}
              />
              {errors.userName && (
                <ErrorMessage>{errors.userName}</ErrorMessage>
              )}
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
              {errors.linkedIn && (
                <ErrorMessage>{errors.linkedIn}</ErrorMessage>
              )}
            </InputGroup>
            <SubmitButton type="submit">Next</SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default PersonalInfo;
