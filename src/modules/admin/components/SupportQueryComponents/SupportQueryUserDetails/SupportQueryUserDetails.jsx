import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import {
  getSupportQueryById,
  updateSupportQuery,
} from "../../../../../api/supportQueryApi";
import { getUserByClerkId } from "../../../../../api/userApi";

const SupportQueryUserDetails = () => {
  const { id } = useParams();
  const [queryDetails, setQueryDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [queryDate, setQueryDate] = useState(null);
  const [closedDate, setClosedDate] = useState("Pending");

  useEffect(() => {
    const fetchQueryAndUserDetails = async () => {
      try {
        const queryData = await getSupportQueryById(id);

        // Format the submitted date
        setQueryDate(new Date(queryData.submitted_on).toLocaleDateString());

        // Format the closed date (If already closed, show date; otherwise, show "Pending")
        if (queryData.closed_on) {
          setClosedDate(
            ` ${new Date(
              queryData.closed_on
            ).toLocaleDateString()}- Closed by Admin`
          );
        }

        setQueryDetails(queryData);

        if (queryData?.user_id?.clerkUserId) {
          const userDataResponse = await getUserByClerkId(
            queryData.user_id.clerkUserId
          );

          if (userDataResponse?.success) {
            const { user, clerkUserData } = userDataResponse.data;
            setUserDetails({
              user_name: user?.user_name || "N/A",
              user_email: user?.user_email || "N/A",
              profileImage:
                clerkUserData?.imageUrl ||
                user?.user_profile_pic ||
                "https://via.placeholder.com/50",
            });
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchQueryAndUserDetails();
  }, [id]);

  const handleQueryUpdate = async () => {
    try {
      if (!queryDetails) return;

      const updatedClosedDate = new Date().toLocaleDateString();

      const updatedLog = [
        ...(queryDetails.communicationLog || []),
        {
          date: updatedClosedDate,
          time: new Date().toLocaleTimeString(),
          message: "Query solved by admin.",
        },
      ];

      const data = {
        status: "solved",
        communicationLog: updatedLog,
        closed_on: updatedClosedDate, // Send closed date to backend
      };

      const response = await updateSupportQuery(id, data);

      if (response) {
        setQueryDetails((prevState) => ({
          ...prevState,
          status: "solved",
          communicationLog: updatedLog,
          closed_on: updatedClosedDate, // Update closed date in UI
        }));

        // Update UI to show closed date instead of "Pending"
        setClosedDate(`Closed on: ${updatedClosedDate}`);
      }
    } catch (error) {
      console.error("Error updating query:", error);
    }
  };

  if (loading) return;
  if (error) return <p>{error}</p>;
  if (!queryDetails) return <p>No query details found.</p>;

  return (
    <Container>
      <Header>
        <QueryId>
          {queryDetails._id}{" "}
          <SeverityBadge severity={queryDetails.priority}>
            {queryDetails.priority}
          </SeverityBadge>
        </QueryId>
        <QueryDetails>{queryDetails.category}</QueryDetails>
        <RaisedBy>
          <ProfileImage
            src={userDetails?.profileImage}
            alt={userDetails?.user_name || "User"}
          />
          <UserInfo>
            <strong>{userDetails?.user_name || "N/A"}</strong>
            <br />
            <span>{userDetails?.user_email || "N/A"}</span>
          </UserInfo>
        </RaisedBy>
        <QueryDetails>Uploaded on: {queryDate}</QueryDetails>
      </Header>
      <Divider />

      <QueryInfoSection>
        <QueryHeading>Query Info</QueryHeading>
        <QueryContent>{queryDetails.query_description || "N/A"}</QueryContent>
      </QueryInfoSection>
      <Divider />

      <CommunicationLog>
        <QueryHeading>Communication Log</QueryHeading>
        <LogEntry
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <LogTime>
            {queryDate} -{" "}
            <strong
              style={{
                color: "black",
                fontWeight: "normal",
              }}
            >
              User submitted the query
            </strong>
          </LogTime>
          <LogMessage>{closedDate}</LogMessage>
        </LogEntry>

        <button
          onClick={handleQueryUpdate}
          disabled={queryDetails.status === "solved"}
          style={{
            color: queryDetails.status === "solved" ? "Green" : "red",
            backgroundColor:
              queryDetails.status === "solved" ? "#f0fff0" : "#ffebeb",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
          }}
        >
          {queryDetails.status === "solved" ? "solved" : "Mark as Solved"}
        </button>
      </CommunicationLog>
    </Container>
  );
};

export default SupportQueryUserDetails;
