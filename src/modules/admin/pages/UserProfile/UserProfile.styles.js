import styled from "styled-components";

export const UserProfileContainer = styled.div`
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-left:60px;
    margin-top:20px;


    .restriction-banner {
     display: flex;
padding: 12px;
align-items: center;
gap: 10px;
align-self: stretch;
margin-top:20px;
background-color: #ffe5e5;  /* Light pink background */
      border: 1px solid #ffcccc; /* Slightly darker pink border */
      justify-content: space-between;
      border-radius: 4px;
    }


    /* The warning message text */
    .restriction-banner-text {
    font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
letter-spacing: -0.32px;
      margin: 0;
      font-size: 1rem;
      line-height: 1.4;
    }

    /* The “Remove restriction” button */
    .remove-restriction-btn {
    width: 189px;
height: 34px;

      background-color: #fff;
      color: ${props => props.theme.colors.secondary};
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s ease;
      display: flex;
      gap: 10px;
    }

    .remove-restriction-btn:hover {
      background-color: #f7f7f7;
    }

    /* Optional: Increase the button's contrast on focus */
    .remove-restriction-btn:focus {
      outline: 2px solid #ddd;
    }

    @media(max-width:768px){
    .restriction-banner-text{
    font-size: 0.8rem;
    }
    .remove-restriction-btn{
    font-size: 0.8rem;
    }
     }
    @media(max-width:480px){
     .restriction-banner{
     flex-direction:column;
     gap:20px;
     }
     }

        /* Container wrapping the entire card */
    .profile-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction:row;
     
       background-color: #fff;
   border-radius: 8px;
border: 1px solid #F5F5F5;
      margin-top:10px;
      padding: 20px;
    }

    /* Left section: user info */
    .profile-left {
      display: flex !important;
      align-items: center;
      gap: 1rem;
      flex: 1;
      width:320px
      justify-content: space-between;
      padding:20px;
      gap:40px;
    }

    .avatar-wrapper {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 50%;
      overflow: hidden;
    }

    .avatar-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .info-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .user-name {
      margin: 0;
     
      color: #111;
      font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }

    .user-email {
      margin: 0.3rem 0;
      color: #666;
    font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }

    .role-badge {
      display: inline-block;
     width: fit-content;
      color: #888;
      font-size: 0.8rem;
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      margin-right: 0.5rem;
      margin-top: 0.2rem;
      border-radius: 16px;
background: #F3F3F3;
    }
.last-active {
        font-size: 12px;
        color:${props => props.theme.colors.textgray};
font-style: normal;
font-weight: 400;
line-height: 16px; /* 150% */
}

    /* Right section: stats */
    .profile-stats {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 2rem;
      flex: 1;
      text-align: right; /* or left if you prefer */
      justify-items: start;
    }
      

    .stat-group {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .stat-label {
      color: #999;
      font-size: 16px;
      margin: 0;
    }

    .stat-value {
      margin: 0;
     font-size: 24px;
      font-weight: 600;
      color: #111;
    }

    /* MEDIA QUERY for smaller screens */

    @media (max-width: 768px) {
      .profile-card {
        // flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
      }

      .profile-left {
        width: 100%;
        margin-bottom: 1.5rem;
      }

      .profile-stats {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        justify-items: start; 
        text-align: left;
      }
    }
      @media (max-width: 650px) {
      .profile-card {   
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
      }
    }

    @media (max-width: 480px) {
    .profile-left{
    flex-direction:column;
    }
      .profile-stats {
        grid-template-columns: 1fr; 
        align-items: center;
        padding-left:20px;
      }
    }
    .performance-right{
    display:flex;
    flex-direction:column;
    align-item:center;
    flex: 6;  /* 60% width */
  padding: 10px;
    }
    .chartHeading{
    font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 116.667% */
letter-spacing: -0.48px;
    }

    .performanceSection{
    display:flex;
    gap:40px;
    padding: 30px;
  
    
    }
    .performance-left{
    display:flex;
    flex-direction:column;
    align-item:center;
    flex: 4;  /* 60% width */
  padding: 10px;
    }


    @media(max-width: 900px){
    .performanceSection{
    flex-direction:column;
    }
    }
`;