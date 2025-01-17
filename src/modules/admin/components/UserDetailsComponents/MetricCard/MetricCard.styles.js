import styled from "styled-components";
import theme from "../../../../../theme/Theme";


export const CardWrapper = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.textgray};
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .feedback-title {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.textgray};
    margin: 0;
  }

  .metric-title {
    font-family: ${theme.fonts.heading};
    font-size: 20px;
    color: ${theme.colors.text};
    margin: ${theme.spacing(1)} 0;
  }

  hr {
    border: 0;
    border-top: 1px solid ${theme.colors.textgray};
    margin: ${theme.spacing(1)} 0;
  }

  .feedback-detail {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.text};
    margin: ${theme.spacing(1)} 0 0;
  }

  .feedback-value {
    font-family: ${theme.fonts.heading};
    font-size: 28px;
    color: ${theme.colors.text};
    margin: 0;
  }

  .positive {
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`;
