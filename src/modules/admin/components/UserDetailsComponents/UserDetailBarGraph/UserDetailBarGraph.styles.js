import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const ChartSection = styled.div`
  margin-bottom: ${theme.spacing(4)};

  h3 {
    margin-bottom: ${theme.spacing(2)};
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.secondary};
  }

  .chart-container {
    width: 100%;
    max-width: 400px; /* Limit the bar chart width */
    height: 250px; /* Set the bar chart height */
    margin: 0 auto; /* Center the bar chart */
  }
`;
