import styled from "styled-components";
import theme from "../../../../../theme/Theme";


export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.spacing(5)};
  margin: ${theme.spacing(2)} 0;

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 18px;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 700px;
  border-collapse: collapse;
  text-align: left;

  thead {
    background-color: ${theme.colors.light};
    border-bottom: 2px solid ${theme.colors.textgray};
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.light};
  }
`;

export const TableHeader = styled.th`
  padding: ${theme.spacing(1)};
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  color: ${theme.colors.text};
  text-align: left;
  border-bottom: 1px solid ${theme.colors.textgray};
`;

export const TableCell = styled.td`
  padding: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.text};
  text-align: left;
`;

export const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .placeholder {
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.sidebarBgColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.heading};
    font-size: 16px;
    color: ${theme.colors.textgray};
  }

  .name {
    display: block;
    font-family: ${theme.fonts.heading};
    font-size: 14px;
    color: ${theme.colors.text};
  }

  .email {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: ${theme.colors.textgray};
  }
`;
