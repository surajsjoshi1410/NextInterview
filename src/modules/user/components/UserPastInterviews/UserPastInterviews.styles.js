import styled from "styled-components"; 

export const UserPastInterviewsWrapper = styled.div`
.past-interviews-container {
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    margin-top: 20px;
    max-height: 400px;
    overflow-y: auto;
}

.interview-title {
    font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
color:${({ theme }) => theme.colors.black};
    margin-bottom: 15px;
}

.interview-list {
    display: flex;
    gap: 15px;
}

.interview-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 550px!important;

}
.interview-company-logo{
flex: 40%;
}
.company-logo {
    width: 95px;
    height: 90px;
    border-radius: 50%;

}
    .interview-info {
        flex: 60%;
    }

.company-name {
  font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 125% */
color:${({ theme }) => theme.colors.black};
}

.role {
    font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 125% */
color:${({ theme }) => theme.colors.black   };
}

.add-interview-button {
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
}
    .add-interview-button-text{
     font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
    }

.add-interview-button:hover {
    background:${({ theme }) => theme.colors.info};
    color:${({ theme }) => theme.colors.white};
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
     position: relative;

  /* Scrollable if content exceeds 80% of viewport height */
  max-height: 80vh; 
  overflow-y: auto;
}

.modal-content-title {
   font-family: "DM Sans";
font-size: 17px;
font-style: normal;
font-weight: 600;
color:${({ theme }) => theme.colors.black};
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
}
    .modal-content-formgroup{
    display: flex;
    gap: 20px;
    }

label {
flex:40%;
    display: block;
    font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
    margin-top: 10px;
    max-width: 260px;
}


input, select, textarea {
    flex: 60%;
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.black};
}
textarea {
    height: 170px;
}
.model-btn-container{
display: flex;
justify-content: flex-end;
}
.add-btn {
    background:${({ theme }) => theme.colors.secondary};
    color: white;
   
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
   display: flex;
width: 119px;
height: 36px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 4px;
}

.add-btn:hover {
    background: ${({ theme }) => theme.colors.info};
}
    @media (max-width: 768px) {
        .modal-content {
            width: 80vw;
        }
    }
    @media (max-width: 520px) {
        .modal-content {
            width: 90vw;
        }
            .modal-content-formgroup{
            flex-direction: column;
            }
    }
`