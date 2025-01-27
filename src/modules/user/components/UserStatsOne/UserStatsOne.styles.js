import styled from "styled-components";


export const UserStatsOneWrapper = styled.div`
width: 100%;
height: 100%;
.performance-card {
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px 20px 40px 20px;
  width: 100%;
  
  justify-content: space-between;

  align-items: center;
  align-content: center;
}

.data-display {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.metrics {
 display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
}

.metric {
  font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  margin-bottom: 8px;
    display: flex;
  flex-direction:column;
  gap:38px;
  color:${({ theme }) => theme.colors.textgray};
}
  .metric-value{
  text-align: center;
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
color:${({ theme }) => theme.colors.black}; 
  display: flex;
  flex-direction:column;
  gap:38px;
  }



.chart {
  align-items: center;
}
 


`