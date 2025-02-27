import styled from "styled-components";
import theme from "../../../theme/Theme";
export const FinalQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.light};

  .Container {
    background-color: ${(props) => props.theme.colors.light};
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 40px;
    max-width: 600px;
    margin: 0 auto;
  }

  .BackIcon {
    cursor: pointer;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 10%;
    padding: 8px;
    margin-bottom: 24px;
  }

  .Title {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 24px;
  }

  .Options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    width: 100%;
  }

  .Option {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.textgray};
    border-radius: 8px;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    input {
      margin: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${(props) => props.theme.colors.primary}; /* Default border color */
      background-color: ${(props) => props.theme.colors.primary}!important;
      //   background-color: transparent; /* Default background color */
      //   border-radius: 50%; /* Make it circular */
      outline: none;
      cursor: pointer;
      margin-right: 10px;
      position: relative;
      appearance: checkbox;
      color: ${(props) => props.theme.colors.primary}!important;
      transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
    }

    input:checked {
      background-color: #68c184 !important; /* Change background to primary color */
      color: ${(props) => props.theme.colors.primary}!important;
      border-color: ${(props) =>
        props.theme.colors
          .primary}!important; /* Match border color with primary color */
      accent-color: green;
    }

    input:checked + span {
      color: ${(props) => props.theme.colors.primary}!important;
    }

    span {
      font-size: 16px;
      font-weight: normal;
      color: ${(props) => props.theme.colors.text};
    }

    &.selected {
      background-color: ${(props) => props.theme.colors.primaryLight};
      border-color: ${(props) => props.theme.colors.primary};
    }
    ${
      "" /* 
    &:hover {
      border-color: ${(props) => props.theme.colors.primaryDark};
      background-color: ${(props) => props.theme.colors.primaryLight};
    } */
    }
  }

  .NextButton {
    width: 100%;
    padding: 12px;
    background-color: ${(props) => props.theme.colors.bluetext}45;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .NextButton:hover {
    background-color: ${(props) => props.theme.colors.bluetext};
  }

  .SkipButton {
    width: 100%;
    padding: 12px;
    background-color: #fff;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .SkipButton:hover {
    background-color: ${(props) => props.theme.colors.backgray};
  }
`;
