import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Section = styled.div`
  margin-bottom: ${theme.spacing(4)};

  h3 {
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.secondary};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: ${theme.spacing(1)};
  background: ${theme.colors.primary};
  color: white;
  font-family: ${theme.fonts.heading};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: ${theme.colors.light};
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing(1)};
  border-bottom: 1px solid ${theme.colors.light};
`;
