/** AddModuleForm.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import theme from "../../../../theme/Theme";
import { RiImageAddLine } from "react-icons/ri";

import {
  Container,
  Title,
  FormWrapper,
  ImageUploadContainer,
  UploadIcon,
  UploadText,
  RightSideWrapper,
  FormGroup,
  Label,
  Input,
  /* If your TextArea is imported from here, remove or rename accordingly */
  UploadButton,
  ButtonRow,
  ButtonGroup,
  Pagination,
  NavButton,
} from "./UploadModule.styles";

/** 
 * IMPORTANT:
 * Also import your new styled components (TextAreaContainer, TextArea, AddMoreButton)
 * from the same file where you defined them. 
 */
import {
  TextAreaContainer,
  TextArea,
  AddMoreButton
} from "./UploadModule.styles";

const UploadModule = () => {
  return (
    <Container>
      <Title>Add module details</Title>
      <FormWrapper>
        {/* Left Section: Image upload */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Label
            htmlFor="moduleImage"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              color: theme.colors.textgray,
            }}
          >
            Module image
          </Label>
          <ImageUploadContainer>
            <UploadIcon>
            
<RiImageAddLine />
            </UploadIcon>
            <UploadText>Upload image</UploadText>
          </ImageUploadContainer>
        </FormGroup>

        {/* Right Section: Form fields */}
        <RightSideWrapper>
          {/* Module Name */}
          <FormGroup>
            <Label htmlFor="moduleName">Module name</Label>
            <Input
              id="moduleName"
              type="text"
              maxLength={20}
              placeholder="Enter module name..."
            />
          </FormGroup>

          {/* Description */}
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <TextAreaContainer>
              <TextArea
                id="description"
                rows={4}
                maxLength={50}
                placeholder="Enter a short description..."
              />
            </TextAreaContainer>
          </FormGroup>

          {/* Approximate Time */}
          <FormGroup>
            <Label htmlFor="timeTaken">Approximate time taken</Label>
            <Input id="timeTaken" type="text" placeholder="e.g. 2 hours" />
          </FormGroup>

          {/* Sample Interview */}
          <FormGroup>
            <Label>Upload sample interview</Label>
            <UploadButton>Upload</UploadButton>
          </FormGroup>

          {/* Course Overview */}
          <FormGroup>
            <Label htmlFor="courseOverview">Course overview</Label>
            <TextAreaContainer>
              <TextArea
                id="courseOverview"
                rows={4}
                placeholder="Enter a course overview..."
              />
            </TextAreaContainer>
          </FormGroup>

          {/* What users learn */}
          <FormGroup>
            <Label htmlFor="whatUsersLearn">What users learn?</Label>
            <TextAreaContainer>
              <TextArea
                id="whatUsersLearn"
                rows={3}
                placeholder="Add points here..."
              />
              {/* +Add more button positioned inside the textarea */}
            <Link to="/admin/addnewmodule">
            <AddMoreButton>+ Add more</AddMoreButton></Link>
            </TextAreaContainer>
          </FormGroup>
        </RightSideWrapper>
      </FormWrapper>

      {/* Bottom Navigation */}
      <ButtonRow>
        <NavButton>Previous</NavButton>
        <ButtonGroup>
          <Pagination>1 / 2</Pagination>
          <NavButton variant="primary">Next</NavButton>
        </ButtonGroup>
      </ButtonRow>
    </Container>
  );
};

export default UploadModule;
