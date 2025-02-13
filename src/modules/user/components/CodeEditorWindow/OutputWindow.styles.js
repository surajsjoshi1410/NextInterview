import styled from "styled-components"; 

export const OutputWindowWrapper = styled.div`

.output-title{
font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
color:${({ theme }) => theme.colors.secondary};
}
.outputWindow-btns{
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
border:none!important;
margin: 20px;

}

.outputWindow-btns-left-showsolution{
border: none;
color:${({ theme }) => theme.colors.secondary};
text-align: center;
/* Body Text/Small/Body Small (Medium) */
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
background: none;
gap: 10px;
}
.outputWindow-btns-right{
display: flex;
gap: 10px;
justify-content: flex-end;
align-items: center;
}
.outputWindow-btns-right-run{
display: flex;
padding: 4px 6px;
align-items: center;
gap: 4px;
text-align: center;
/* Body Text/Small/Body Small (Medium) */
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 171.429% */
letter-spacing: -0.28px;
color:${({ theme }) => theme.colors.secondary};
background: none;
border: none;
}
.outputWindow-btns-right-run:hover{
color:${({ theme }) => theme.colors.primary};
}
.outputWindow-btns-right-run:active{
color:${({ theme }) => theme.colors.primary};
}
.outputWindow-btns-right-submit{
display: flex;
padding: 6px 6px;
align-items: center;
gap: 4px;
text-align: center;
/* Body Text/Small/Body Small (Medium) */
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 171.429% */
letter-spacing: -0.28px;
color:${({ theme }) => theme.colors.white};
background: ${({ theme }) => theme.colors.secondary};
border: none;
border-radius: 5px;
margin-left: 10px;
}
.outputWindow-btns-right-submit:hover{
background-color:${({ theme }) => theme.colors.info};
}
.outputWindow-btns-right-submit:active{
background-color:${({ theme }) => theme.colors.info};
}
`;