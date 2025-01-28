import styled from "styled-components";

export const ProfileUserWrapper = styled.div`
margin-left: 60px;
.password-reset-container{
border-radius: 16px;
border: 1px solid #F5F5F5;
background: var(--Color-Mode, #FFF);
box-shadow: 0px 18px 40px 0px rgba(112, 144, 176, 0.10);
height: 100px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
}
.password-reset-button{
 background: ${({ theme }) => theme.colors.white};
    width: 273px;
height: 34px;
  
color:${({ theme }) => theme.colors.secondary};
 
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    float: right;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.secondary};

     font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
}
.password-reset-button:hover {
    background:${({ theme }) => theme.colors.info};
    color:${({ theme }) => theme.colors.white};
}

.open-reset-btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.open-reset-btn:hover {
  background-color: #0056b3;
}

/* Overlay for the modal */
.password-reset-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  /* Center the modal */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Modal box */
.password-reset-modal-content {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 600px;
  
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  /* SCROLLABLE if it gets too tall */
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
  .password-reset-modal-content-details{
  }

/* Close button (X) */
.password-reset-close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Title and subtext */
.password-reset-modal-title {
font-family: "DM Sans";
font-size: 23px;
font-style: normal;
font-weight: 600;
color:${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
}

.password-reset-modal-subtext {
  font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
color:${({ theme }) => theme.colors.textgray};
  margin-bottom: 1rem;
}

/* Label, input fields */
.password-reset-modal-label {
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
 font-family: "DM Sans";
font-size: 13px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
}

.password-reset-modal-input {
  width: 96%;
  padding: 0.5rem;
  font-family: "DM Sans";
font-size: 13px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Reset Password button in the modal */
.password-reset-modal-reset-btn {
  margin-top: 1rem;
  width: 100%;
  background-color: #aae0e8;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #fff;
}

.password-reset-modal-reset-btn:hover {
  background-color: #86cbd1;
}
  @media (max-width: 768px) {
    .password-reset-modal-content {
      width: 80%;
      height: 70%;
    }
}

`