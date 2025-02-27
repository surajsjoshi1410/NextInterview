import styled from "styled-components";

import theme from "../../../../../theme/Theme";
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.spacing(4)};
//   border: 1px solid ${({ theme }) => theme.colors.borderblue};
//   border-radius: 8px;
  margin-left: 40px;
    transition: margin-left 0.3s ease-in-out; /* Smooth transition */
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.4px;
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: -0.32px;
overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 8px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing(1)};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;



export const SummaryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.spacing(0.5)};
  padding-top: 0px;
  transition: margin-left 0.3s ease-in-out;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const SummaryTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  padding: 0px 0px 10px 0px;
  padding-left: 20px;
`;

export const SummaryText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing(1)};
  line-height: 1.2;
  padding-left: 20px;
`;

export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
// //   align-items: center;
//   margin-top: ${({ theme }) => theme.spacing(3)};
// //   gap: 12px;
`;