import styled from "styled-components";

export const UserReminderWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .user-reminder-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .reminder-text {
    margin-bottom: 10px;
  }

  .reminder-text-title {
    font-family: "DM Sans";
    font-size: 20x;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }
  .reminder-text-subtitle {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textgray};
  }

  .reminder-text-description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }

  .reminder-actions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .reminder-buttons {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
  }
  .dismiss-button {
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    font-size: 1.5rem;
    margin-right: 15px;
    cursor: pointer;
    padding: 8px;
    color: ${({ theme }) => theme.colors.error};
    width: 50px;
  }

  .thanks-button {
    display: flex;
    width: 300px;
    align-items: center;
    height: 44px;
    padding: 5px 9px;
    justify-content: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 16px;
    border: 1px solid white !important;
  }

  .thanks-button:hover {
    background-color: #0056b3;
  }
  .thanks-message {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
    color: #28a745; /* Green color for success */
    border-radius: 8px;
    justify-content: center;
  }

  .reminder-description {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
  }

  .checkmark-icon {
    color: #28a745;
    font-size: 14px;
    background-color: #e6f4ea;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #28a745;
  }

  .reminder-thanks-icon {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`;
