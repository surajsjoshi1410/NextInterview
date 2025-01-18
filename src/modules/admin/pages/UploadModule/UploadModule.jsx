// UploadModule.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import { FaUpload, FaEdit } from "react-icons/fa";
import theme from "../../../../theme/Theme";

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
  UploadButton,
  ButtonRow,
  ButtonGroup,
  Pagination,
  NavButton,
  TextAreaContainer,
  TextArea,
  AddMoreButton,
  PreviewImage, // Newly added
  PreviewVideo, // Newly added
  ReplaceButton, // Newly added
} from "./UploadModule.styles";

const UploadModule = () => {
  const [whatUsersLearn, setWhatUsersLearn] = useState("");

  const [moduleImage, setModuleImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setModuleImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleReplaceImage = () => {
    imageInputRef.current.click();
  };


  const [sampleVideo, setSampleVideo] = useState(null);
  const videoInputRef = useRef(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const videoURL = URL.createObjectURL(file);
      setSampleVideo(videoURL);
    } else {
      alert("Please select a valid video file.");
    }
  };

  const handleReplaceVideo = () => {
    videoInputRef.current.click();
  };

  // ---------------------------------------
  // 4. Handler to append bullet points
  // ---------------------------------------
  const handleAddMore = () => {
    setWhatUsersLearn((prev) => (prev ? `${prev}\n• ` : "• "));
  };

  return (
    <Container>
      <Title>Add Module Details</Title>
      <FormWrapper>
        {/* Left Section: Image upload */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "40%", // Adjust as needed
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
            Module Image
          </Label>
          <ImageUploadContainer onClick={handleImageClick}>
            {moduleImage ? (
              <PreviewImage src={moduleImage} alt="Module" />
            ) : (
              <>
                <UploadIcon>
                  <RiImageAddLine size={48} />
                </UploadIcon>
                <UploadText>Upload Image</UploadText>
              </>
            )}
          </ImageUploadContainer>
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {moduleImage && (
            <ReplaceButton onClick={handleReplaceImage}>
              <FaEdit /> Replace Image
            </ReplaceButton>
          )}
        </FormGroup>

        {/* Right Section: Form fields */}
        <RightSideWrapper style={{ width: "100%" }}> {/* Adjust as needed */}
          {/* Module Name */}
          <FormGroup>
            <Label htmlFor="moduleName">Module Name</Label>
            <Input
              id="moduleName"
              type="text"
              maxLength={20}
              placeholder="Enter module name..."
              // value={moduleName}
              // onChange={(e) => setModuleName(e.target.value)}
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
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </TextAreaContainer>
          </FormGroup>

          {/* Approximate Time */}
          <FormGroup>
            <Label htmlFor="timeTaken">Approximate Time Taken</Label>
            <Input id="timeTaken" type="text" placeholder="e.g. 2 hours" />
          </FormGroup>

          <FormGroup >
            <Label htmlFor="sampleInterview">Upload Sample Interview</Label>
            <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
            <UploadButton onClick={() => videoInputRef.current.click()}>
              <FaUpload /> Upload
            </UploadButton>
            <input
              type="file"
              accept="video/*"
              ref={videoInputRef}
              style={{ display: "none" }}
              onChange={handleVideoChange}
            />
            {sampleVideo && (
              <div style={{ marginTop: "10px", width: "250px" }}>
                <PreviewVideo controls src={sampleVideo} />
                <ReplaceButton onClick={handleReplaceVideo}>
                  <FaEdit /> Replace Video
                </ReplaceButton>
              </div>
            )}
            </div>
          </FormGroup>

          {/* Course Overview */}
          <FormGroup>
            <Label htmlFor="courseOverview">Course Overview</Label>
            <TextAreaContainer>
              <TextArea
                id="courseOverview"
                rows={4}
                placeholder="Enter a course overview..."
              />
            </TextAreaContainer>
          </FormGroup>

          {/* What Users Learn */}
          <FormGroup>
            <Label htmlFor="whatUsersLearn">What Users Learn?</Label>
            <TextAreaContainer>
              <TextArea
                id="whatUsersLearn"
                rows={3}
                placeholder="Add points here..."
                value={whatUsersLearn}
                onChange={(e) => setWhatUsersLearn(e.target.value)}
              />
              {/* "Add more" button appends a bullet point */}
              <AddMoreButton onClick={handleAddMore}>+ Add More</AddMoreButton>
            </TextAreaContainer>
          </FormGroup>
        </RightSideWrapper>
      </FormWrapper>

      {/* Bottom Navigation */}
      <ButtonRow>
        <NavButton>Previous</NavButton>
        <ButtonGroup>
          <Pagination>1 / 2</Pagination>
          <Link to="/admin/addnewmodule">
            <NavButton variant="primary">Next</NavButton>
          </Link>
        </ButtonGroup>
      </ButtonRow>
    </Container>
  );
};

export default UploadModule;
