import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Question7Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

  .Form {
    width: 100%;
  }

  .Label {
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
    display: block;

    font-family: "DM Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
    margin-top: 24px;
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
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 12px;
    margin-top: 12px;
  }

  .NextButton:hover {
    background-color: ${(props) => props.theme.colors.info};
  }

  .SkipButton {
    width: 100%;
    // padding: 12px;
    background-color: #fff;
    color: ${theme.colors.black};
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;

    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid #bcbfc2;
  }

  .SkipButton:hover {
    background-color: ${(props) => props.theme.colors.backgray};
  }

  .image {
    border-radius: 50%;
    height: 30px;
  }
  .input {
    padding: 10px;
    width: 100%;
    border: 1px solid #c2c3c4;
    border-radius: 4px;
    font-size: 14px;
    color: #555;
  }
  .anotherCompany {
    width: 100%;
    // background-color: #fff;
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
  }

  .anotherCompany:hover {
    background-color: ${(props) => props.theme.colors.secondary}!important;
  }
`;
