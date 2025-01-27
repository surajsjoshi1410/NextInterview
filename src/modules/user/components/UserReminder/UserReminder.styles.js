import styled from 'styled-components';

export const UserReminderWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
 

  .user-reminder-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .reminder-text {
    margin-bottom: 20px;
  }

  .reminder-text-title {
    font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 700;
color:${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }
    .reminder-text-subtitle{
    font-size: 12px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
    }

  .reminder-text-description {
   font-size: 14px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }

  .reminder-actions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .dismiss-button {
   border-radius: 16px;
border: 1px solid #F5F5F5;
    font-size: 1.5rem;
    margin-right: 15px;
    cursor: pointer;
    // border-radius: 50%;
    padding: 8px;
    color: ${({ theme }) => theme.colors.error};
  }

  .thanks-button {
    display: flex;
    width: 300px;
align-items: center;
height: 44px;
padding: 5px 9px;
justify-content: center;
align-items: center;
gap: 8px;
flex: 1 0 0;
    border-radius: 16px;
border: 1px solid white!important;
  }

  .thanks-button:hover {
    background-color: #0056b3;
  }
`;
