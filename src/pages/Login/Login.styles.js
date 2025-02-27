// Login.styles.js

import styled from "styled-components";
import theme from "../../theme/Theme";

export const Loginmobilewrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.light};

  .Container {
    background-color: ${(props) => props.theme.colors.light};
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 40px;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .Input {
    width: 100%;
    padding-top: 10px;
    margin-bottom: 25px;
  }
  .Form {
    width: 100%;
  }

  .BackIcon {
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 10%;
    padding: 8px;
    margin-bottom: 30px;
  }
  .Title {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 5px;
  }
  Label {
    font-size: 14px;

    color: ${(props) => props.theme.colors.textgray};
    margin-bottom: 8px;
    display: block;
  }

  .Button {
    width: 100%;
    padding: 12px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.bluetext}45;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 12px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.text};
  margin: 5px 0 50px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    margin-right: 10px;
  }

  @media (max-width: 320px) {
    margin-bottom: 5px;
    margin-right: 5px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
//   font-weight: 500;
  color:${theme.colors.text};
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 8px;
  }

  @media (max-width: 320px) {
    font-size: 8px;\
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width: auto;
  padding: 10px;
  font-size: 16px;
  color: ${theme.colors.light};
  background-color: ${theme.colors.bluetext}45;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.bluetext};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    padding: 4px;
  }
`;
