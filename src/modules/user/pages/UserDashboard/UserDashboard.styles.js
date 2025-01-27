import styled from "styled-components";

export const UserDashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
 
    .UserDashboard-statsContainer{
    position: relative;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  
    }
    .UserDashboard-statsContainer-row-one{
    position:absolute;
    width: 100%;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary} -96.67%,${({ theme }) => theme.colors.primary} 182.78%);
    height:90px;
    }
    .UserDashboard-statsContainer-img{
    position:absolute;
    right: 0;
    }
    .UserDashboard-stats{
    position:relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 50px;
    margin-left: 70px;
    margin-right: 60px;
    background:${({ theme }) => theme.colors.light};
    border-radius: 8px;
    padding: 12px 24px 12px 24px !important;
    gap:24px;
    }
    .UserDashboard-statsbox{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    }
    .UserDashboard-statsbox-title{
    font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};

    }
.UserDashboard-statsbox-value{
font-family: "DM Sans";
font-size: 32px;
font-style: normal;
font-weight: 700;
margin:0!important;
color:${({ theme }) => theme.colors.black};
}
.UserDashboard-statsbox-value span{
font-size: 20px;
}
.UserDashboard-statsContainer-row-two{
 position:relative;
 top: 200px;
 width: 100%;
}
 .UserDashboard-Charts-container{
 padding :24px;
 }
 .UserDashboard-charts-title{
 font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 700;
color:${({ theme }) => theme.colors.black};
 }
.UserDashboard-charts{
postion:relative;
margin-top: 40px;
display: flex;
justify-content: space-between;
gap:90px
}

@media only screen and (max-width: 900px) {
.UserDashboard-charts{
flex-direction: column;
}
.UserDashboard-stats{
flex-direction: column;
flex: 2;
}
.UserDashboard-statsbox{
border-radius: 8px;
border: 1px solid #F5F5F5;
padding: 12px 24px 12px 24px !important;
background: var(--Color-Mode, #FFF);
box-shadow: 0px 18px 40px 0px rgba(112, 144, 176, 0.10);
//  flex: 1 1 calc(50% - 10px);  /* Make each box take up 50% width minus the gap */
flex: 1 1 100%; 
}
.UserDashboard-statsContainer-row-two{

top: 750px;}
}
`;