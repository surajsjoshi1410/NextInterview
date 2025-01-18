import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing(1)};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
//   margin-bottom: ${theme.spacing(4)};
  margin-top: ${theme.spacing(1)};

  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Section = styled.div`
//   margin-bottom: ${theme.spacing(4)};
  margin-top: ${theme.spacing(1)};

`;

export const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};
`;

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(1)};
  font-size: 0.9rem;
  color: ${theme.colors.text};
`;

export const RadioInput = styled.input`
  margin-right: ${theme.spacing(1)};
`;

export const CheckboxInput = styled.input`
  margin-right: ${theme.spacing(1)};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
//   margin-top: ${theme.spacing(-3)};
// margin-bottom: ${theme.spacing(3)};

`;

export const ClearButton = styled.button`
  background: none;
  color: ${theme.colors.text};
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ApplyButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
