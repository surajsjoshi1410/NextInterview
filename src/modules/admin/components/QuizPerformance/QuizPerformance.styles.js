import styled from "styled-components";

export const QuizPerformanceWrapper = styled.div`
/* QuizPerformance.css */
.quizPerformanceContainer {
  display: flex;
  align-items: center;
  justify-content: space-between; /* chart on left, legend on right */
  background-color: #fff;
 border-radius: 8px;
border: 1px solid #F5F5F5;
  padding: 1rem;
//   max-width: 500px;
max-width: 100%;
// margin-left: 20px;
  font-family: "Helvetica", sans-serif;
}

.radarChartArea {
  width: 200px;
  height: 200px;
  position: relative; /* if you need more complex overlays */
  padding: 0 1rem;
 
}

.legendArea {
  margin-left: 1rem;

  font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 157.143% */
}
  .legendDot-one{
  color:${(props) => props.theme.colors.black}
  }
   .legendDot-two{
  color:${(props) => props.theme.colors.textgray}
  }

.legendArea ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
 display: flex;
 flex-direction: column;
  align-items: flex-start;
}

.legendArea li {
  margin-bottom: 0.3rem;
 
}


`;