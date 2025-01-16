import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const AddContainer = styled.div`
margin-left: 30px;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  padding: ${theme.spacing(3)};
  overflow-x: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};

  }
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: ${theme.spacing(1)};
  }
`;

export const Heading = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing(4)};
  text-align: left; /* Center align the heading */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;  
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;  
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   width: 100%;
  background-color: #e0e0e0;
  padding: ${theme.spacing(1)} ${theme.spacing(1)};
  border-radius: 4px;
  margin-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
  }
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: ${theme.spacing(1)} ${theme.spacing(1)};
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const SubText = styled.p`
  margin: 0;
  margin-top: ${theme.spacing(2)};
  font-size: 0.75rem;
  color: ${theme.colors.textgray};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.5rem;
  }
`;

export const UploadManually = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) { 
    font-size: 0.625rem;
  }

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Ensure labels and inputs align in a column */
  width: 100%;
  margin-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing(2)};
  }
    @media (max-width: ${theme.breakpoints.mobile}) {
      margin-bottom: ${theme.spacing(1)};
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: ${theme.spacing(1)};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${theme.spacing(1)};
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: ${theme.fonts.body};
  outline: none;
  box-sizing: border-box; /* Ensure padding doesn't overflow */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${theme.spacing(1)};
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: ${theme.fonts.body};
  resize: vertical;
  outline: none;
  box-sizing: border-box; /* Ensure padding doesn't overflow */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
  }
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 4px;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  cursor: pointer;
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
  box-sizing: border-box; /* Ensure padding doesn't overflow */
  width: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
  }

  &:hover {
    background-color: ${theme.colors.sidebarHoverBgColor};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing(2)};
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.spacing(1)};
  }

  input[type="checkbox"] {
    margin-right: ${theme.spacing(1)};
    cursor: pointer;
  }

  label {
    font-size: 0.875rem;
    cursor: pointer;
  }
`;

export const ConceptClarifierContainer = styled.div`
  background-color: ${theme.colors.backgray};
  padding: ${theme.spacing(3)};
  border-radius: 4px;
  margin: ${theme.spacing(4)} 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
  padding: ${theme.spacing(1)};
  }
`;

export const ClarifierHeading = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(2)};
  margin: ${theme.spacing(2)} 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: ${theme.spacing(1)} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
  margin: ${theme.spacing(0.5)} 0;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? theme.colors.secondary : theme.colors.light};
  border: 1px solid
    ${(props) =>
      props.variant === "primary" ? theme.colors.secondary : "#ccc"};
  border-radius: 4px;
  color: ${(props) =>
    props.variant === "primary" ? "#fff" : theme.colors.text};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? theme.colors.sidebarHoverBgColor
        : theme.colors.lightHover};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing(2)};
  margin-top: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.spacing(1)};
  }
`;

export const PaginationItem = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  padding: ${theme.spacing(1)};
  border-radius: 4px;
@media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
    margin-top: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    margin-top: ${theme.spacing(2)};
    }
}
  &:hover {
    background-color: ${theme.colors.sidebarHoverBgColor};
  }
`;
