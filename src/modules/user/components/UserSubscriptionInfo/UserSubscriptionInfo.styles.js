import styled from "styled-components";

export const UserSubscriptionInfoWrapper = styled.div`
   

    .subscription-container {
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   max-width:100%;
   margin-top: 20px;
}

.subscription-title {
    font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
color:${({ theme }) => theme.colors.black};
    margin-bottom: 15px;
}

.subscription-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.detail-item {
    display: flex;
    // justify-content: space-between;
    font-size: 16px;
}

.detail-item-title {
font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
flex:40%;
color:${({ theme }) => theme.colors.textgray};
}
.detail-item-value {
    font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 125% */
color:${({ theme }) => theme.colors.black};
    flex:60%;
}
.subscription-upgrade-btn{
    display: flex;
    justify-content: flex-end;
    }
.upgrade-button {
width: 122px;
height: 34px;
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.upgrade-button:hover {
    background: ${({ theme }) => theme.colors.info};
}

`;