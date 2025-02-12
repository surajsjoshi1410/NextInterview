import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const SubscriptionCardWrapper = styled.div`
.subscription-card {
  border: 1px solid ${theme.colors.textgray};
border-radius: 8px;
  font-family: "DM Sans";
  max-width: 350px;

  background-color:${theme.colors.white};
  margin: 20px;
 padding: 40px 35px 28px 35px;
  font-family: Arial, sans-serif;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
align-items: center;
gap: 29px;
}
.subscription-card:hover {
    border: 1px solid ${theme.colors.primary};
    background-color:${theme.colors.sidebarBgColor};
}



.suggested-badge {
  position: absolute;
  top: 0px;
  left: 50%;
  border-radius: 0px 0px 4px 4px;
background: linear-gradient(135deg, #2290AC 0%, #68C184 100%);
transform: translateX(-50%);
  color: white;
  padding: 5px 10px;
 font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
letter-spacing: -0.32px;
}

.subscription-card-header-title {
  text-align: center;
/* Semi-bold/18px */
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
color:${theme.colors.primary};
margin-top: 35px!important;
margin-bottom: 15px!important;
}

.subscription-card-body-price {
 text-align: center;
font-family: "DM Sans";
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 125% */
letter-spacing: -2px;
color:${theme.colors.black};
  margin-bottom: 15px;
  margin-top: 15px!important;
}

.features-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-height: 180px;
  overflow-y: scroll;
scrollbar-width: none;
}

.features-list li {
 font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; 
color:${theme.colors.black};
  margin-bottom: 8px;
}

.features-list .check-mark {
  color:${theme.colors.info}; /* Green check mark */
  margin-right: 10px;
}

.subscription-card-footer {
  margin-top: 20px;
}

.subscribe-button {
  padding: 10px 20px;
  background-color:${theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  color: ${theme.colors.white};
text-align: center;
/* Body Text/Small/Body Small (Medium) */
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 171.429% */
letter-spacing: -0.28px;
}

.subscribe-button:hover {
  background-color: ${theme.colors.info};
}

@media (max-width: 1024px) {
  .subscription-card {

    flex: 1 1 calc(50% - 20px); /* 2 cards per row on tablet screens */
  }
}
  @media(min-width:1000px){
  .subscription-card {
  min-width: 300px;
}
  }

@media (max-width: 768px) {
  .subscription-card {
    flex: 1 1 100%; /* 1 card per row on mobile screens */
  }
}
`