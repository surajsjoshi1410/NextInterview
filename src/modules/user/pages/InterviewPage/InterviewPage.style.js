
import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(3)};
  background: ${theme.colors.light};
  margin-left: 40px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  padding: ${theme.spacing(2)};
  text-align: center;
  border: 1px solid ${theme.colors.borderblue};

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 18px;
`;

export const CardContent = styled.div`
  padding: ${theme.spacing(2)};
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};
  text-align: left;
`;

export const Details = styled.div`
  font-family: ${theme.fonts.body};
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${theme.colors.textgray};
  font-size: 14px;
  margin-bottom: ${theme.spacing(1)};
  p {
    margin: 4px 0;
  }
  .dot{
  border-radius:50%;
  background-color: ${theme.colors.textgray};
  width: 7px;
  height: 7px;
  }
`;

export const StartButton = styled.button`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  &:hover {
    background: ${theme.colors.black};
  }
`;