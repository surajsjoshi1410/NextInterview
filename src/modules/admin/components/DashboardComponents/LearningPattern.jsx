import React from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  width: 100%;
//   height: 100%;
  margin-top: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const OuterTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const CardContainer = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.lightgreen};
  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: 0 4px 6px ${(props) => props.theme.colors.borderblue};
  width: 80%;
  height: 300px;
  margin-right: 5px;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.textgray};
  font-size: 0.9rem;
  margin: ${(props) => props.theme.spacing(1)} 0;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing(2)};
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const GradientBar = styled.div`
  height: 100%;
  width: ${(props) => props.width || "50%"};
  background: ${(props) =>
    props.gradient || `linear-gradient(to right, #00f, #f0f, #f00)`};
`;

const Label = styled.div`
  position: absolute;
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.textgray};
  bottom: -20px;
`;

const LearningPattern = () => {
  return (
    <Wrapper>
      <OuterTitle>Learning Activity Insights</OuterTitle>
      <CardContainer>
        <Title>Peak Time</Title>
        <BarContainer>
          <GradientBar width="30%" gradient="linear-gradient(to right, #00f, #f0f, #f00)" />
          <Label style={{ left: "10%" }}>12:00 pm</Label>
          <Label style={{ right: "10%" }}>03:00 pm</Label>
        </BarContainer>
        <Subtitle>(Mon – Sun)</Subtitle>

        <Title>Low Time</Title>
        <BarContainer>
          <GradientBar width="80%" gradient="linear-gradient(to right, #555, #ddd)" />
          <Label style={{ left: "10%" }}>Upto 05:00 pm</Label>
        </BarContainer>
        <Subtitle>(Weekends)</Subtitle>
      </CardContainer>
    </Wrapper>
  );
};

export default LearningPattern;
