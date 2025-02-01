import styled from "styled-components";


export const MockTestsStatsWrapper = styled.div`

width: 100%;
/* You can style this inside a CSS file, if you prefer using CSS */
.mock-tests-card {
 border-radius: 10%;
 background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
width: 100%;



}
  .rowOne{
  display: flex;
  justify-content: space-between;
  }
  .rowOneLeftTitle{
  font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
color:${({ theme }) => theme.colors.textgray};
  }
.rowOneLeftValue{
font-family: "DM Sans";
font-size: 34px;
font-style: normal;
font-weight: 700;
color:${({ theme }) => theme.colors.black};
}
.barChart{
height:  270px !important;
}


`
