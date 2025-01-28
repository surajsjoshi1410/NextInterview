import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
.profile-container {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 100%;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.profile-title {
  font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
color:${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
}
  .profile-photo-title{
  font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
  }

.profile-content {
  display: flex;
  gap: 20px;
}

.profile-photo-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
}

.profile-photo {
  width: 148px;
height: 148px;
  border-radius: 50%;
  object-fit: cover;
}

.change-photo-btn {
  background: none;
  color:${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100px;
}

.form-fields {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex: 1;
}

.form-group label {
 font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
margin-bottom: 10px;
flex :40%;
}

.form-group input {
font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 60%;
}
.save-btn-container{
  display: flex;
  justify-content: flex-end;
  }
.save-btn {
width: 122px;
height: 34px;
  background-color:${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
 
}

.save-btn:hover {
  background-color:${({ theme }) => theme.colors.info};
}
  @media (max-width: 768px) {
    .form-group {
      flex-direction: column;
    }
  }

`