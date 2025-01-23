import styled from "styled-components";
import theme from "../../../../theme/Theme";



export const AssesmentPerformanceProfileWrapper = styled.div`
.assessment-container {
  background-color: #fff;
 border-radius: 8px;
border: 1px solid #F5F5F5;
  padding: 1rem;
  max-width: 100%;
  margin: 1rem auto;
  font-family: 'Helvetica', sans-serif;
}

.stats-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-box {
  flex: 1 1 0px;
  min-width: 150px;
}

.stat-label {
color:${(props) => props.theme.colors.textgray};
  font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
letter-spacing: -0.32px;
}

.stat-value {
  font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 33.6px */
letter-spacing: -0.24px;
color:${(props) => props.theme.colors.black};
}


.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
}

.badge {
  display: inline-block;
  background-color: #fdf7e2;
  color: #998D55;
 font-size: 11px;
font-style: normal;
font-weight: 500;
display:flex;
align-items:center;

  padding: 0.2rem 0.5rem;
  border-radius: 4px;
border: 1px solid #CFC079;
  font-weight: 500;
  height: 20px;
 

}
  .badgeTwo {
  display: inline-block;
  
  color: #69665C;
 font-size: 11px;
font-style: normal;
font-weight: 500;
display:flex;
align-items:center;

  padding: 0.2rem 0.5rem;
border-radius: 4px;
border: 1px solid #B6B6B6;


background: #EDEDED;
  font-weight: 500;
  height: 20px;
}

.quiz-text {
 font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 157.143% */

}
.quiz-text-one{
color:${(props) => props.theme.colors.black};
}
.quiz-text-two{
color:${(props) => props.theme.colors.textgray};
}

/* MEDIA QUERY for narrower screens */
@media (max-width: 600px) {
  .stats-row {
    flex-direction: column;
    align-items: flex-start;
  }
}


`;