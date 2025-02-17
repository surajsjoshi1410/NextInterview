import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const FAQContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  // max-width: 1000px;
  margin-left: 60px;
`;

export const FAQTitle = styled.h2`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`;

export const FAQSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textgray};
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid ${theme.colors.backgray};
  padding: 15px 0;
`;

export const FAQQuestion = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`;

export const FAQAnswer = styled.p`
  color: ${theme.colors.textgray};
  margin-top: 10px;
  line-height: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ToggleButton = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;

export const RaiseQueryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  font-style: ${theme.fonts.body};
font-weight: 500;
line-height: 24px; 
letter-spacing: -0.28px;

  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: fit-content;
  margin-right: 60px;

 &:hover {
 background-color:${theme.colors.secondary};
`;
