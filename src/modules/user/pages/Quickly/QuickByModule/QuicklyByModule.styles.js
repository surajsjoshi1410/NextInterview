import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  display: flex;
  margin-left: 60px;
  //   justify-content: center;
  //   align-items: center;
  //   padding: ${theme.spacing(2)};
`;

export const ModuleCard = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  //   max-width: 800px;
  align-items: flex-start;
  width: 100%;
`;

export const ModuleImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ModuleDetails = styled.div`
  flex: 1;
  padding: ${theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  font-size: 1.4rem;
  //   margin-bottom: ${theme.spacing(1)};
`;

export const Time = styled.span`
  font-family: ${theme.fonts.accent};
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing(2)};
`;

export const Button = styled.button`
  background-color: ${theme.colors.light};
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.accent};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: 0.3s;

  &:hover {
    background-color: ${theme.colors.sidebarTextColor}10;
  }
`;

export const LinkStyled = styled.a`
  text-decoration: none;
`;
