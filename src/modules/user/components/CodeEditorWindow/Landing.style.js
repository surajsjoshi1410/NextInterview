import styled from "styled-components";

export const LandingWrapper = styled.div`

.button-top{
display: flex;
justify-content:space-between;
margin-top: 10px;
gap: 10px;
padding: 10px;
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
color:${({ theme }) => theme.colors.black};
}
.editor-title{

}
.btns-both{
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
padding: 10px;
}
.compile-btn{
border:none;
color:${({ theme }) => theme.colors.secondary};
height: 44px;
width: 44px;
font-size: 40px;
background-color: transparent;
border-radius: 50%;
}
`