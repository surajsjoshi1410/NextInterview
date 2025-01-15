import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const ModulesSection = styled.div`
  margin-top: ${theme.spacing(3)};

  .module-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacing(2)};

    h3 {
      color: ${theme.colors.secondary};
      font-family: ${theme.fonts.heading};
    }
  }
`;

export const ModuleCard = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.light};
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .module-image {
    border-radius: 8px;
    width: 64px;
    height: 64px;
    margin-right: ${theme.spacing(2)};
  }

  .module-info {
    flex-grow: 1;

    h4 {
      margin: 0;
      font-family: ${theme.fonts.accent};
    }

    p {
      color: ${theme.colors.text};
      margin: 4px 0 0;
    }
  }
`;

export const ModuleActions = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};

  .edit-btn,
  .delete-btn {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.sidebarHoverBgColor};
      border-radius: 4px;
    }
  }
`;

export const SearchBar = styled.input`
  padding: 8px;
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
  width: 200px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const NewUploadButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.sidebarHoverBgColor};
    color: ${theme.colors.text};
  }
`;
