import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  UploadSection,
  UploadBox,
  UploadText,
  UploadIcon,
  DragDropText,
  SupportedFormats,
  BrowseLink,
  ChallengesList,
  ChallengeCard,
  ChallengeHeader,
  ChallengeContent,
  FileInfo,
  FileName,
  UploadDate,
  Status,
  AnalyticsButton,
  ActionButtons,
  Button,
} from "./Challenges.styles";

const Challenges = () => {
  const fileInputRef = useRef(null);
  const replaceInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Load persisted files from localStorage on component mount
  useEffect(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    if (savedFiles) {
      setUploadedFiles(JSON.parse(savedFiles));
    }
  }, []);

  // Save files to localStorage whenever `uploadedFiles` changes
  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        ...files.map((file) => ({
          fileName: file.name,
          applied: false,
          uploadDate: new Date().toLocaleDateString(),
        })),
      ]);
    }
  };

  const handleReplaceFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0 && replaceIndex !== null) {
      setUploadedFiles((prevFiles) =>
        prevFiles.map((fileObj, index) =>
          index === replaceIndex
            ? { ...fileObj, fileName: files[0].name, uploadDate: new Date().toLocaleDateString() }
            : fileObj
        )
      );
      setReplaceIndex(null);
    }
  };

  const handleRemoveClick = (index) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const handleApplyClick = () => {
    setUploadedFiles((prevFiles) =>
      prevFiles.map((fileObj) => ({ ...fileObj, applied: true }))
    );
    alert("File(s) applied successfully!");
  };

  const handleReplaceClick = (index) => {
    setReplaceIndex(index);
    replaceInputRef.current.click();
  };

  const getCurrentMonthAndYear = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <Container>
      <UploadSection>
        <UploadBox>
          <UploadText>
            <strong>Upload {getCurrentMonthAndYear()}'s challenge</strong>
          </UploadText>
          <UploadIcon>📤</UploadIcon>
          <DragDropText>
            Drag & drop files or{" "}
            <BrowseLink onClick={handleBrowseClick}>Browse</BrowseLink>
          </DragDropText>
          <SupportedFormats>
            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
          </SupportedFormats>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />
          <input
            type="file"
            ref={replaceInputRef}
            style={{ display: "none" }}
            onChange={handleReplaceFileChange}
          />
          <Button onClick={handleApplyClick}>Apply</Button>
        </UploadBox>
      </UploadSection>

      <ChallengesList>
        {uploadedFiles.map((fileObj, index) => (
          <ChallengeCard key={index}>
            <ChallengeHeader>{getCurrentMonthAndYear()}</ChallengeHeader>
            <ChallengeContent>
              <FileInfo>
                <FileName>{fileObj.fileName}</FileName>
                <UploadDate>Uploaded On - {fileObj.uploadDate}</UploadDate>
                <ActionButtons>
                  <Button onClick={() => handleRemoveClick(index)}>Remove</Button>
                  <Button onClick={() => handleReplaceClick(index)}>Replace</Button>
                </ActionButtons>
              </FileInfo>
              <Status>{fileObj.applied ? "Ongoing" : "Pending"}</Status>
              <Link to={"/admin/viewanalytics"}><AnalyticsButton >View analytics</AnalyticsButton></Link>
            </ChallengeContent>
          </ChallengeCard>
        ))}
      </ChallengesList>
    </Container>
  );
};

export default Challenges;
