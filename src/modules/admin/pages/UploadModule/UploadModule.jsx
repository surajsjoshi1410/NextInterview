import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import { FaUpload, FaEdit } from "react-icons/fa";
import theme from "../../../../theme/Theme";
// Your styled components + theme import
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
  PreviewImage,
  PreviewVideo,
  ReplaceButton,
  ErrorMessage,
} from "./UploadModule.styles";

import {
  uploadFileToFirebase,
  uploadVideoToFirebase,
} from "../../../../utils/uploadFileToFirebase";

import { FaArrowRight } from "react-icons/fa";

const UploadModule = () => {
  const [whatUsersLearn, setWhatUsersLearn] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [moduleImage, setModuleImage] = useState(null);
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const intializeData = () => {
      console.log("location.state", location.state);
      // console.log(location.state.data?.userLearntData?.map((item) =>`${item.learntData}`) );
      setImageUrl(location.state.data?.imageURL);
      setModuleImage(location.state.data?.imageURL);
      setModuleName(location.state.data?.moduleName);
      setDescription(location.state.data?.description);
      setApproxTime(location.state.data?.approxTimeTaken);
      setVideoUrl(location.state.data?.interviewSampleURL);
      setSampleVideo(location.state.data?.interviewSampleURL);
      setCourseOverview(location.state.data?.courseOverview);
      setWhatUsersLearn(
        location.state.data?.userLearntData.map((item) => `${item.learntData}`)
      );
    };
    if (location.state) intializeData();
  }, []);

  // Error states
  const [imageError, setImageError] = useState("");
  const [moduleNameError, setModuleNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [approxTimeError, setApproxTimeError] = useState("");
  const [videoUrlError, setVideoUrlError] = useState("");
  const [courseOverviewError, setCourseOverviewError] = useState("");
  const [whatUsersLearnError, setWhatUsersLearnError] = useState("");

  // For sample video preview
  const [sampleVideo, setSampleVideo] = useState(null);

  // ------------------ IMAGE HANDLERS ------------------
  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setButtonDisabled(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setModuleImage(reader.result);
      };
      reader.readAsDataURL(file);

      const Url = await uploadFileToFirebase(file, "moduleImage");
      setImageUrl(Url);
      setButtonDisabled(false);
      setImageError("");
    } else {
      setModuleImage(null);
      setImageUrl(null);
      setImageError("Please select a valid image file.");
    }
  };

  const handleReplaceImage = () => {
    imageInputRef.current.click();
  };

  // ------------------ VIDEO HANDLERS ------------------
  const handleVideoChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setButtonDisabled(true);
      const videoURL = URL.createObjectURL(file);
      setSampleVideo(videoURL);

      const url = await uploadVideoToFirebase(file, "moduleVideo");
      setVideoUrl(url);
      setButtonDisabled(false);
      setVideoUrlError("");
    } else {
      setSampleVideo(null);
      setVideoUrl(null);
      setVideoUrlError("Please select a valid video file.");
    }
  };

  const handleReplaceVideo = () => {
    videoInputRef.current.click();
  };

  // ------------------ TEXT INPUTS ------------------
  const [approxTime, setApproxTime] = useState("");
  const handleApproxTimeChange = (e) => {
    setApproxTime(e.target.value);
    setApproxTimeError("");
  };

  const [description, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError("");
  };

  const [moduleName, setModuleName] = useState("");
  const handleModuleNameChange = (e) => {
    setModuleName(e.target.value);
    setModuleNameError("");
  };

  const [courseOverview, setCourseOverview] = useState("");
  const handleCourseOverviewChange = (e) => {
    setCourseOverview(e.target.value);
    setCourseOverviewError("");
  };

  // ------------------ WHAT USERS LEARN ------------------
  const handleWhatUsersLearnChange = (e) => {
    const data = e.target.value.split("\n");
    const cleanedData = data.map((item) => item.replace(/•/g, ""));
    setWhatUsersLearn(cleanedData);
    setWhatUsersLearnError("");
  };

  // (Optional) Handler to append bullet points
  // const handleAddMore = () => {
  //   setWhatUsersLearn((prev) => (prev ? `${prev}\n• ` : "• "));
  // };

  // ------------------ SUBMISSION ------------------
  const handleNext = async () => {
    // Reset errors
    setImageError("");
    setModuleNameError("");
    setDescriptionError("");
    setApproxTimeError("");
    setVideoUrlError("");
    setCourseOverviewError("");
    setWhatUsersLearnError("");

    let formIsValid = true;

    // Validate Image
    if (!moduleImage) {
      setImageError("Please upload a module image.");
      formIsValid = false;
    }
    // Validate Module Name
    if (!moduleName.trim()) {
      setModuleNameError("Please fill the module name.");
      formIsValid = false;
    }
    // Validate Description
    if (!description.trim()) {
      setDescriptionError("Please enter a short description.");
      formIsValid = false;
    }
    // Validate Approx Time
    if (!approxTime.trim()) {
      setApproxTimeError("Please enter the approximate time taken.");
      formIsValid = false;
    }
    // Validate Video
    if (!videoUrl) {
      setVideoUrlError("Please upload a sample interview video.");
      formIsValid = false;
    }
    // Validate Course Overview
    if (!courseOverview.trim()) {
      setCourseOverviewError("Please enter the course overview.");
      formIsValid = false;
    }
    // Validate 'What Users Learn'
    if (
      whatUsersLearn.length === 0 ||
      whatUsersLearn.every((item) => !item.trim())
    ) {
      setWhatUsersLearnError("Please provide at least one learning point.");
      formIsValid = false;
    }

    if (!formIsValid) return;

    // If valid, gather data & navigate
    const submissionData = {
      imageURL: imageUrl,
      moduleName: moduleName,
      description: description,
      approxTimeTaken: approxTime,
      interviewSampleURL: videoUrl,
      courseOverview: courseOverview,
      userLearntData: whatUsersLearn.map((item) => ({ learntData: item })),
    };

    console.log("submissionData", submissionData);
    navigate("/admin/addnewmodule", { state: { data: submissionData } });
  };

  return (
    <Container>
      <Title>Add Module Details</Title>
      <FormWrapper>
        {/* ------------- LEFT SECTION: IMAGE UPLOAD ------------- */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "40%",
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
          {/* Image Error */}
          {imageError && (
            <p style={{ color: "red", marginTop: "4px" }}>{imageError}</p>
          )}
        </FormGroup>

        {/* ------------- RIGHT SECTION: FORM FIELDS ------------- */}
        <RightSideWrapper>
          {/* Module Name */}
          <FormGroup>
            <Label htmlFor="moduleName">Module Name</Label>
            <div>
              <Input
                id="moduleName"
                type="text"
                maxLength={20}
                placeholder="Enter module name..."
                value={moduleName}
                onChange={handleModuleNameChange}
              />
              {moduleNameError && (
                <ErrorMessage>{moduleNameError}</ErrorMessage>
              )}
            </div>
          </FormGroup>

          {/* Description */}
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <div>
              <TextAreaContainer>
                <TextArea
                  id="description"
                  rows={2}
                  maxLength={50}
                  placeholder="Enter a short description..."
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </TextAreaContainer>
              {descriptionError && (
                <ErrorMessage>{descriptionError}</ErrorMessage>
              )}
            </div>
          </FormGroup>

          {/* Approximate Time */}
          <FormGroup>
            <Label htmlFor="timeTaken">Approximate Time Taken</Label>
            <div>
              <Input
                id="timeTaken"
                type="text"
                placeholder="e.g. 2 hours"
                value={approxTime}
                onChange={handleApproxTimeChange}
              />
              {approxTimeError && (
                <ErrorMessage>{approxTimeError}</ErrorMessage>
              )}
            </div>
          </FormGroup>

          {/* Sample Interview Video */}
          <FormGroup>
            <Label htmlFor="sampleInterview">Upload Sample Interview</Label>
            <div>
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
              {videoUrlError && <ErrorMessage>{videoUrlError}</ErrorMessage>}
            </div>
          </FormGroup>

          {/* Course Overview */}
          <FormGroup>
            <Label htmlFor="courseOverview">Course Overview</Label>
            <div>
              <TextAreaContainer>
                <TextArea
                  id="courseOverview"
                  rows={2}
                  placeholder="Enter a course overview..."
                  value={courseOverview}
                  onChange={handleCourseOverviewChange}
                />
              </TextAreaContainer>
              {courseOverviewError && (
                <ErrorMessage>{courseOverviewError}</ErrorMessage>
              )}
            </div>
          </FormGroup>

          {/* What Users Learn */}
          <FormGroup>
            <Label htmlFor="whatUsersLearn">What Users Learn?</Label>
            <div>
              <TextAreaContainer>
                <TextArea
                  id="whatUsersLearn"
                  rows={3}
                  placeholder="Add points here..."
                  value={whatUsersLearn?.map((point) => `•${point}`).join("\n")}
                  onChange={handleWhatUsersLearnChange}
                />
              </TextAreaContainer>
              {whatUsersLearnError && (
                <ErrorMessage>{whatUsersLearnError}</ErrorMessage>
              )}
            </div>
          </FormGroup>
        </RightSideWrapper>
      </FormWrapper>

      {/* ------------- BOTTOM NAVIGATION ------------- */}
      <ButtonRow>
        {/* You can place a "Back" button here if needed */}
        <ButtonGroup>
          <Pagination>1 / 2</Pagination>
          <NavButton
            variant="primary"
            onClick={handleNext}
            disabled={buttonDisabled}
          >
            Next <FaArrowRight size={16} />
          </NavButton>
        </ButtonGroup>
      </ButtonRow>
    </Container>
  );
};

export default UploadModule;
