import React from "react";
import styled from "styled-components";
import quicklyimage from "../../assets/quicklyimage.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   height: 100vh; /* Full screen height */
  background-color: ${(props) => props.theme.colors.light}; /* Using theme color */
`;

const Image = styled.img`
//   max-width: 400px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textgray};
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  margin: ${(props) => props.theme.spacing(1)} 0;
  margin-left: 60px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top:${(props) => props.theme.spacing(3)};
`;

const PastChallenge = () => {
  return (
    <div>
    <Title>Past Challenges</Title>
    <Container>
       
      <Image src={quicklyimage}
      style={{ width: "30%", height: "30%" }} />
       
     
       
      <Text>No any past challenges</Text>
    </Container>
    </div>
  );
};

export default PastChallenge;
