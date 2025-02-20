import styled from "styled-components";
import theme from "../../../../theme/Theme";
export const TableWrapper = styled.div`
  table {
    width: 60%;
    margin-left: 60px;
    margin-top: 20px;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.sidebarBgColor};

    thead {
      background-color: ${({ theme }) => theme.colors.lightgreen};
      th {
        padding: ${({ theme }) => theme.spacing(1)};
        text-align: left;
        color: ${({ theme }) => theme.colors.textgray};
    border: 1px solid ${({ theme }) => theme.colors.sidebarBgColor};
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: ${({ theme }) => theme.colors.sidebarHoverBgColor};
        }
        td {
          padding: ${({ theme }) => theme.spacing(1)};
          color: ${({ theme }) => theme.colors.text};
          text-align: left;
          font-family: ${({ theme }) => theme.fonts.body};
    border: 1px solid ${({ theme }) => theme.colors.sidebarBgColor};
        }
      }
    }
  }
`;

export const ToggleSwitch = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.backgray};
  position: relative;
  cursor: pointer;


  .toggle-circle {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    position: absolute;
    top: 2.1px;
    left: ${({ isActive }) => (isActive ? "29px" : "2px")};
  }
`;

export const StatusLabel = styled.span`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};

`;
