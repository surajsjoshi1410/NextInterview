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

    thead {
      background-color: ${({ theme }) => theme.colors.lightgreen};
      th {
        padding: ${({ theme }) => theme.spacing(1)};
        text-align: left;
        color: ${({ theme }) => theme.colors.textgray};
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderblue};
        &:hover {
          background-color: ${({ theme }) => theme.colors.sidebarHoverBgColor};
        }
        td {
          padding: ${({ theme }) => theme.spacing(1)};
          color: ${({ theme }) => theme.colors.text};
          text-align: left;
          font-family: ${({ theme }) => theme.fonts.body};
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
  display: inline-block;

  .toggle-circle {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ isActive }) => (isActive ? "26px" : "2px")};
    transition: left 0.3s ease;
  }
`;

export const StatusLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(1)};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text : theme.colors.text};
//   font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
`;
