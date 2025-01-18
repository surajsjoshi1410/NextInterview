import styled from "styled-components";

export const Question7Wrapper = styled.div`
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
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .NextButton:hover {
    background-color: ${(props) => props.theme.colors.info};
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
`;
