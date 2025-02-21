import { Select, Button, Form } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
//   background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledSelect = styled(Select)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.sidebarBgColor}!important;
  color: red;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #1890ff;
  color: white;
  &:hover {
    background-color: #40a9ff;
  }
`;
export const ModuleUploadWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
//   background-color: ${({ theme }) => theme.colors.sidebarBgColor};
.dropdown-box{

    background-color: ${({ theme }) => theme.colors.sidebarBgColor};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;}
.ant-select-selector{
    background-color: ${({ theme }) => theme.colors.sidebarBgColor}!important;
     border :none!important;
    }
     .dropdown-box2{

    background-color: ${({ theme }) => theme.colors.backgray};
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    
    }

    .upload-button{
    background-color:transparent;
    color: ${({ theme }) => theme.colors.secondary};
    border:none;

    }
    .upload-button:hover{
    background-color:transparent !important;
    color: ${({ theme }) => theme.colors.info} !important;
    border:none !important;
    }
    .upload-button-text{
    font-size: 14px;
    font-weight: 500;
    font-family: "DM Sans";
    line-height: 20px;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.black};
    }
    .upload-btn-container{
    display: flex!important;
    flex-direction: row;
    justify-content: space-between!important;
    }
    .submit-button-box{
    display: flex;
    flex-direction: row;
    justify-content: center;    
    }

    .submit-button{
    width :100px;
    height: 34px;
    
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    font-size: 14px;
    font-weight: 500;
    font-family: "DM Sans";
    line-height: 20px;
    }
    
`;