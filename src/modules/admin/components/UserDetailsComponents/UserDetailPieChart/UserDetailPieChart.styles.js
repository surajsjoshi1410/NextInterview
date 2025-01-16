import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const FeedbackContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .chart-wrapper {
    flex: 1;
    text-align: center;

    h4 {
      margin-bottom: ${theme.spacing(2)};
      font-family: ${theme.fonts.heading};
      color: ${theme.colors.secondary};
    }

    .chart-container {
      width: 100%;
      max-width: 300px; /* Limit the pie chart width */
      height: 200px; /* Set the pie chart height */
      margin: 0 auto; /* Center the pie chart */
    }
  }
`;
