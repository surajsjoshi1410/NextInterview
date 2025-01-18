import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.light};

`;

export const NotificationCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 60%;
  margin-left: 2px;
gap: 10px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
    @media (max-width: 480px) {
      width: 90%;
    }
`;


export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textgray};

  }

  
 
`;

export const ToggleSwitch = styled.div`
  width: 40px;
  height: 20px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    top: 2px;
    left: 23px;
    transition: 0.2s;
  }
`;

export const NotificationBody = styled.div`
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.textgray};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textgray};

    &.highlight {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.textgray};
    }

    &.small-text {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.textgray};
    }
  }
`;


export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.textgray};
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
//   width: 20%;
  float: right;
  display: flex;
    margin-left: auto; /* Ensures it aligns to the right */
//   justify-content: flex-end;


  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;


export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;