import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Content = styled.div`
    width: 75%;
    padding: 20px;
    margin-left: 40px;
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
    display: flex;
    align-items: center;
    &:hover {
        background: #f9f9f9;
    }

    input[type="radio" i]{
        margin: 5px
    }
`;

export const QuestionContainer = styled.div`
    // padding: 15px;
    margin-top: 15px;
    border: 1px solid ${theme.colors.lightgreen};
    
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
   margin : 15px auto;

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
    background-color: ${(props) => (props.correct ? `${theme.colors.lightgreen}` : "#fdecea")};
    color: ${(props) => (props.correct ? `${theme.colors.text}` : `{theme.colors.text}`)};
    display: flex;
    align-items: center;
    /* margin : auto; */
    justify-content: center;
`;

export const Icon = styled.span`
    font-size: 18px;
    margin-right: 8px;
    display: flex;
    align-items: center;
`;

export const SolutionBox = styled.div`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid ${theme.colors.secondary};
    background-color: ${theme.colors.light};
    border-radius: 8px;
 
    .correction{
        font-size: 18px;
        margin-right: 8px;
        cursor: pointer;
        background-color: #F5F5F5;
        border-radius: 5px;
        padding: 10px 20px;
        }

        input[type="text"] {
            outline: none;
            font-size: 18px;
        }
 
    .thumbsup{
    display:flex;
    justify-content: flex-end;
    gap: 20px;
    padding:5px;
    }

    span{
        display: flex;
        gap: 5px;
        align-items: center;
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
font-family:${({ theme }) => theme.fonts.body};
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
  font-weight:600;
  color: ${({ theme }) => theme.colors.textgray};
  margin-right: 8px;
  padding: 4px;
  line-height: 20px;
`;

export const Difficulty1 = styled.span`
  padding: 4px 8px;
font-weight:600;
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
  font-weight:600;
  padding: 4px;
  line-height: 20px;
`;

export const ExploreQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border : 1px solid ${theme.colors.sidebarBgColor};
  width: 85%;
  border-radius: 10px;
  padding: 20px;
`;

export const ExploreTitle = styled.h3`
margin: 10px 0px;
font-size: 18px;
`

export const ExploreSubtitle = styled.p`
margin:0;
font-size: 16px;
`;

export const ExploreButton = styled.button`
border: 1px solid ${theme.colors.bluetext};
background-color: ${theme.colors.white};
color: ${theme.colors.bluetext};
display: flex;
justify-content: center;
padding: 10px;
font-size: 18px;
cursor: pointer;
`
