import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Question6Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 70vh;
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
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 10%;
    padding: 8px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
  }

  .Title {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 24px;
  }

  .Form {
    width: 100%;
    display: grid;
    gap: 12px;
  }

  .Label {
    font-size: 14px;

    color: ${(props) => props.theme.colors.textgray};
    margin-bottom: 8px;
    display: block;
  }

  .Dropdown {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;

    border: 0.8px solid #c2c3c4;
    border-radius: 4px;
    font-size: 14px;
    color: #555;
  }

  .OptionsGroup {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

    .Option {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 1px;
      font-size: 14px;
      color: #555;
      background-color: #f9f9f9;
      cursor: pointer;
    }
  }

  .Selected {
    margin-bottom: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #555;

    span {
      font-weight: bold;
      color: #333;
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

  .image {
    border-radius: 50%;
    height: 30px;
  }

  .anotherCompany {
    width: 100%;
    background-color: transparent;
    margin-top: 12px;
    color: #151e28;
    border-radius: 4px;
    font-family: "DM Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 160% */
    border: none;
    text-align: center !important;
    border: 1px solid #1a1c1e;
    padding: 8px;
    cursor: pointer;
  }
`;
