import React from "react";
import styled from "styled-components";

const GradientBackground = styled.div`
  height: 100px; /* Adjust height as needed */
  width: 100%;
  position: absolute;
  z-index: 0;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.bluetext},
    ${(props) => props.theme.colors.admintop}
  );
`;

const WelcomeText = styled.h1`
  font-size: 1.2rem;
  padding: 1rem;
  font-family: ${(props) => props.theme.fonts.body};
  margin: 0;
  color: ${(props) => props.theme.colors.light};
`;

const GradientBar = () => {
  return (
    <GradientBackground>
      <WelcomeText>Welcome Admin, {name}</WelcomeText>
    </GradientBackground>
  );
};

export default GradientBar;
