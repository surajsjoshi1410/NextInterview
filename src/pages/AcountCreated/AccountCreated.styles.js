import styled from "styled-components";
export const AccountCreatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.light};

  .Container {
    background-color: ${(props) => props.theme.colors.light};
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    max-width: 600px;
    margin: 0 auto;
  }

  .Heading {
    font-size: 40px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      //   justify-content: unset;
    }
  }

  .SubHeading {
    font-size: 20px;
    padding-top: 20px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      //   justify-content: unset;
    }
  }

  .Button {
    width: 50%;
    padding: 12px;
    margin-top: 40px;

    text-align: center;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.text};
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 90px;
  }

  .Button:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
  }

  .Lottie {
    margin-bottom: 60px;
  }
`;
