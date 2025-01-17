import React from "react";
import {
  Container,
  Card,
  Date,
  Title,
  Description,
  Stats,
  Stat,
  StatLabel,
  StatValue,
  Topics,
  Topic,
  Attendees,
  PreviouslyAskedIn,
  IconContainer,
} from "../../../admin/pages/ViewAnalytics/Analytics.styles";

const data = [
  {
    date: "01 Oct 2024",
    title: "Predicting Customer Churn in a Subscription-Based Business",
    description:
      "You Are Given A Dataset From A Subscription-Based Business That Includes Customer Demographics, Subscription Details, Usage Patterns, And Past Customer Interactions. The Goal Is To Predict Whether A Customer Is Likely To Churn (Cancel Their Subscription) Within The Next Three Months.",
    stats: {
      successRate: 60,
      dropOff: 15,
      failure: 15,
    },
    attendees: 3780,
    topics: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSlnsqZ02uFPypHHHEQNXDptDpA7Nt_qeUQ&s", // React logo
      "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png", // Google logo
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png", // Node.js logo
    ],
  },
  {
    date: "02 Oct 2024",
    title: "Predicting Customer Churn in a Subscription-Based Business",
    description:
      "You Are Given A Dataset From A Subscription-Based Business That Includes Customer Demographics, Subscription Details, Usage Patterns, And Past Customer Interactions. The Goal Is To Predict Whether A Customer Is Likely To Churn (Cancel Their Subscription) Within The Next Three Months.",
    stats: {
      successRate: 60,
      dropOff: 15,
      failure: 15,
    },
    attendees: 3780,
    topics: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSlnsqZ02uFPypHHHEQNXDptDpA7Nt_qeUQ&s",
      "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png",
    ],
  },
  {
    date: "03 Oct 2024",
    title: "Predicting Customer Churn in a Subscription-Based Business",
    description:
      "You Are Given A Dataset From A Subscription-Based Business That Includes Customer Demographics, Subscription Details, Usage Patterns, And Past Customer Interactions. The Goal Is To Predict Whether A Customer Is Likely To Churn (Cancel Their Subscription) Within The Next Three Months.",
    stats: {
      successRate: 60,
      dropOff: 15,
      failure: 15,
    },
    attendees: 3780,
    topics: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSlnsqZ02uFPypHHHEQNXDptDpA7Nt_qeUQ&s",
      "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png",
    ],
  },
];

const Analytics = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Card key={index}>
          <Date>{item.date}</Date>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Topics>
            {item.topics.map((topic, idx) => (
              <Topic key={idx}>{topic}</Topic>
            ))}
          </Topics>
          <Stats>
          <Attendees>No. of people attended - {item.attendees}</Attendees>

            <Stat>
              <StatLabel>Success rate</StatLabel>
              <StatValue style={{ color: "#28a745" }}>{item.stats.successRate}%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Drop off</StatLabel>
              <StatValue style={{ color: "#ffc107" }}>{item.stats.dropOff}%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Failure</StatLabel>
              <StatValue style={{ color: "#dc3545" }}>{item.stats.failure}%</StatValue>
            </Stat>
          </Stats>
          <PreviouslyAskedIn>
            Previously Asked In:
            {item.icons.map((icon, idx) => (
              <IconContainer key={idx}>
                <img src={icon} alt={`icon-${idx}`} />
              </IconContainer>
            ))}
          </PreviouslyAskedIn>
        </Card>
      ))}
    </Container>
  );
};

export default Analytics;
