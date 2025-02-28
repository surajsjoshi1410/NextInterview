import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
//   background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 8px;
//   max-width: 800px;
  margin-left: 40px;
`;

export const QuestionCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.backgray};
`;

export const QuestionText = styled.h2`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-weight: normal;
  margin-top: 0;
`;

export const MetaInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textgray};
  font-family: ${({ theme }) => theme.fonts.body};
//   display: flex;
//   flex-direction: row;
`;

export const Topic = styled.span`
  font-weight:600;
  color: ${({ theme }) => theme.colors.textgray};
  margin-right: 8px;
  border:1px solid ${({ theme }) => theme.colors.backgray};
  padding: 4px;
  border-radius: 12px;
  line-height: 20px;
`;

export const Difficulty = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
font-weight:600;
  color: ${({ theme }) => theme.colors.textgray};
  margin-right: 8px;

  border:1px solid ${({ theme }) => theme.colors.backgray};
  padding: 4px;
  border-radius: 12px;
  line-height: 20px;
`;

export const Type = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.graytext};
  margin-right: 8px;
  border:1px solid ${({ theme }) => theme.colors.backgray};
  padding: 4px;
  border-radius: 12px;
  line-height: 20px;
`;

export const Companies = styled.span`
  font-size: 14px;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight:600;
  border:1px solid ${({ theme }) => theme.colors.backgray};
  padding: 4px;
  border-radius: 12px;
  line-height: 20px;
`;

export const Status = styled.div`
  font-size: 14px;
  font-weight: 600;
  // color: ${({ theme }) => theme.colors.success};
  color: ${({ theme, status }) =>
    status === "Completed" ? theme.colors.success : "#ffc107"};
  margin-top: 10px;
  // background: ${({ theme }) => theme.colors.lightgreen};
    background: ${({ theme, status }) =>
    status === "Completed" ? theme.colors.lightgreen : "#fff3cd"};
  padding: 4px 8px;
  height: 20px;
  justify-content: center;
  // border:1px solid ${({ theme }) => theme.colors.greenborder};
      border: 1px solid ${({ theme, status }) =>
    status === "Completed" ? theme.colors.greenborder : "#ffc107"};
  
  border-radius: 8px;
  display: inline-block;
`;


export const Tag = styled.div`
  display: flex;
//   align-items: center;
  gap: 6px;
  background: ${({ theme, removable }) =>
    removable ? theme.colors.sidebarHoverBgColor : theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 12px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  border: ${({ theme, removable }) =>
    removable ? "none" : `1px solid ${theme.colors.borderblue}`};
`;

export const CloseButton = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.textgray};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 140px;
  right: 10px;
  width: 300px;
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.backgray};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 10;

  /* Scrollable Content */
  max-height: 400px; /* Adjust height as needed */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.textgray} ${({ theme }) => theme.colors.lightblue};

  /* For Webkit Browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textgray};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightblue};
  }
`;


export const FilterSection = styled.div`
  margin-bottom: 15px;
  background: ${({ theme }) => theme.colors.lightblue};
  padding: 2px;

  
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-style: normal;
font-weight: 400;
line-height: normal;
font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};

`;

export const ApplyButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ClearButton = styled.button`

  color: ${({ theme }) => theme.colors.secondary};
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
`;

export const MoreFilters = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 6px 10px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
//   justify-content: center;
border:1px solid ${({ theme }) => theme.colors.backgray};
border-radius: 4px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgray};
`;

export const CloseFilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textgray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.backgray};
  }
`;

export const SubText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textgray};
  margin-top: 4px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgray};
  border-radius: 5px;
  font-size: 14px;
  outline: none;
`;




