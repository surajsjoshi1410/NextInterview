import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const FeedbackCardWrapper = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  padding: ${theme.spacing(3)};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  margin: 0 auto;
  margin-top: ${theme.spacing(6)};
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.text};

  strong {
    font-weight: bold;
    color: ${theme.colors.text};
  }
`;

export const FeedbackEntries = styled.div`
  font-size: 16px;
  margin: ${theme.spacing(1)} 0;
  color: ${theme.colors.text};
`;

export const FeedbackImpression = styled.div`
  font-size: 16px;
  margin-top: ${theme.spacing(1)};
  color: ${(props) =>
    props.impression === "positive"
      ? theme.colors.success
      : props.impression === "negative"
      ? theme.colors.error
      : theme.colors.warning};
  font-weight: bold;
`;
