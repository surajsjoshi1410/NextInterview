import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.light};
//   border: 1px solid ${(props) => props.theme.colors.borderblue};
  border-radius: 12px;
  padding: ${(props) => props.theme.spacing(2)};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${(props) => props.theme.fonts.body};
// margin-left: 60px;
`;

const ChallengeTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  margin: ${(props) => props.theme.spacing(1)} 0;
`;

const ChallengeSubtitle = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.textgray};
  line-height: 1;
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Tags = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1)};
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.backgray};
  color: ${(props) => props.theme.colors.borderblue};
  padding: ${(props) => props.theme.spacing(0.2)} ${(props) => props.theme.spacing(1)};
  border-radius: 4px;
  font-size: 0.6rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.light};
//   color: ${(props) => (props.secondary ? props.theme.colors.secondary : props.theme.colors.white)};
  border: ${(props) => (props.secondary ? "none" : `1px solid ${props.theme.colors.secondary}`)};
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;


`;

const PreviouslyAsked = styled.div`
  margin-top: ${(props) => props.theme.spacing(2)};
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textgray};
  text-align: right;
`;

const TakeChallenge = () => {
  return (
    <Card>
      <small style={{ color: "#2390ac", fontWeight: "bold",
        backgroundColor:"#f0f8f1",
        borderRadius:"4px",
        padding:"3px 5px",
        fontSize:"0.7rem"
       }}>#Today's Challenge 123</small>
      <ChallengeTitle>
        Predicting Customer Churn in a Subscription-Based Business
      </ChallengeTitle>
      <ChallengeSubtitle>
        You are given a dataset from a subscription-based business that includes customer
        demographics, subscription details, usage patterns, and past customer interactions.
        The goal is to predict whether a customer is likely to churn (cancel their subscription)
        within the next three months.
      </ChallengeSubtitle>
      <Tags>
        <Tag>Topic 1</Tag>
        <Tag>Topic 2</Tag>
        <Tag>Topic 3</Tag>
        <Tag>Topic 4</Tag>
      </Tags>
      <Buttons>
        <Button primary
        style={{
            color: "#fff",
        }}
        >Take Challenge</Button>
        <Button
         style={{
            color: "#2390ac",
        }}
        >Challenge Info</Button>
      </Buttons>
      <PreviouslyAsked>
        Previously Asked In <span style={{ color: "#2290AC" }}>📊 A, B, C</span>
      </PreviouslyAsked>
    </Card>
  );
};

export default TakeChallenge;
