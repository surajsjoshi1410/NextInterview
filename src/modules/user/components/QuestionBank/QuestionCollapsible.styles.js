import styled from "styled-components";
import theme from "../../../../theme/Theme";
export const PageContainer = styled.div`
  display: flex;
  // width: 100%;
  margin-left: 60px;
  // flex-direction: row;
`;

export const Sidebar = styled.div`
  width: 20%;
  border: 1px solid #ddd;
  height: 90vh;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const Content = styled.div`
  width: 80%;
  padding: 20px;
`;

export const QuestionHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  background: ${theme.colors.lightgreen};
  border-radius: 5px;
`;

export const Option = styled.label`
  display: block;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  accent-color: ${theme.colors.bluetext};

  &:hover {
    background: #f9f9f9;
  }
`;

export const QuestionContainer = styled.div`
  // padding: 15px;
  margin-top: 15px;
  border: 1px solid ${theme.colors.lightgreen};
  border-radius: 10px;
`;

export const AnswerContainer = styled.div`
  // padding: 15px;
  margin-top: 15px;
  border: 1px solid ${theme.colors.lightgreen};
`;

export const Answer = styled.div`
  // padding: 15px;
  margin-top: 15px;
  border: 1px solid ${theme.colors.lightgreen};
`;

// Styled Components
export const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.light};
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const FeedbackBox = styled.div`
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${(props) =>
    props.correct ? `${theme.colors.lightgreen}` : "#fdecea"};
  color: ${(props) =>
    props.correct ? `${theme.colors.text}` : `{theme.colors.text}`};
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
`;

export const Icon = styled.span`
  font-size: 18px;
  margin-right: 8px;
`;

export const SolutionBox = styled.div`
  margin-top: 10px;
  padding: 15px;
  border: 1px solid ${theme.colors.secondary};
  background-color: ${theme.colors.light};
  border-radius: 8px;

  .correction {
    font-size: 18px;
    margin-right: 8px;
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
  }

  .thumbsup {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 5px;
  }
`;

export const NextButton = styled(Button)`
  padding: 10px 20px;
  margin-top: 15px;
  color: ${theme.colors.light};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${theme.colors.secondary};
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const MetaInfo1 = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textgray};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Topic1 = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textgray};
  margin-right: 8px;
  padding: 4px;
  line-height: 20px;
`;

export const Difficulty1 = styled.span`
  padding: 4px 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textgray};
  margin-right: 8px;
  padding: 4px;
  border-radius: 12px;
  line-height: 20px;
`;

export const Type1 = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.graytext};
  margin-right: 8px;
  padding: 4px;
  line-height: 20px;
`;

export const Companies1 = styled.span`
  font-size: 14px;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  padding: 4px;
  line-height: 20px;
`;


