import React from "react";
import {
  Container,
  Header,
  QueryId,
  SeverityBadge,
  QueryDetails,
  RaisedBy,
  ProfileImage,
  UserInfo,
  QueryInfoSection,
  QueryHeading,
  QueryContent,
  CommunicationLog,
  LogEntry,
  LogTime,
  LogMessage,
  Divider,
} from "./SupportQueryUserDetails.styles";

const SupportQueryUserDetails = () => {
  const queryDetails = {
    id: "1234",
    severity: "High",
    category: "Content - related",
    raisedBy: {
      name: "Olivia Rhye",
      email: "olivia@gmail.com",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s",
    },
    uploadedOn: "12/12/24 12:01:01 PM",
    queryInfo: {
      heading: "Here is the Heading",
      content: "I am not able to use a Skill assessment test",
    },
    communicationLog: [
      {
        time: "12:42:57",
        message: "User submitted the query",
        date: "December 20",
      },
      {
        time: "09:42:57",
        message: "Support Agent responded with initial troubleshooting steps",
        date: "December 20",
      },
    ],
  };

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <QueryId>
          {queryDetails.id}{" "}
          <SeverityBadge severity={queryDetails.severity}>
            {queryDetails.severity}
          </SeverityBadge>
        </QueryId>
        <QueryDetails>{queryDetails.category}</QueryDetails>
        <RaisedBy>
          <ProfileImage
            src={queryDetails.raisedBy.profileImage}
            alt={queryDetails.raisedBy.name}
          />
          <UserInfo>
            <strong>{queryDetails.raisedBy.name}</strong>
            <br />
            <span>{queryDetails.raisedBy.email}</span>
          </UserInfo>
        </RaisedBy>
        <QueryDetails>
          Uploaded on: {queryDetails.uploadedOn}
        </QueryDetails>
      </Header>
      <Divider />

      {/* Query Info Section */}
      <QueryInfoSection>
        <h3>Query Info</h3>
        <QueryHeading>{queryDetails.queryInfo.heading}</QueryHeading>
        <QueryContent>{`"${queryDetails.queryInfo.content}"`}</QueryContent>
      </QueryInfoSection>
      <Divider />

      {/* Communication Log Section */}
      <CommunicationLog>
        <h3>Communication Log</h3>
        {queryDetails.communicationLog.map((log, index) => (
          <LogEntry key={index}>
            <LogTime>{log.date} {log.time}</LogTime>
            <LogMessage>{log.message}</LogMessage>
          </LogEntry>
        ))}
      </CommunicationLog>
    </Container>
  );
};


export default SupportQueryUserDetails;
