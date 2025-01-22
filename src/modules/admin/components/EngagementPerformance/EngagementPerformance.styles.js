import styled from "styled-components";


export const EngagementPerformanceWrap=styled.div`
.engagementContainer{
width: 100%;
 background-color: #fff;
   border-radius: 8px;
border: 1px solid #F5F5F5;
}
.engagementContainer-inner {
  background-color: #fff;
//    border-radius: 8px;
// border: 1px solid #F5F5F5;
  padding: 1rem;
  max-width: 600px;
  margin: 1rem auto;
  font-family: "Helvetica", sans-serif;
}

.engagementGrid {
  display: flex; 
}

/* Left side column with time labels */
.timeColumn {
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
}

.timeLabel {
  height: 40px;  /* same as the heatmap cells, for alignment */
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

/* Right side: the heatmap cells area */
.heatmapArea {
  display: flex;
  flex-direction: column; /* each row stacked vertically */
  width:100%;
}

.heatmapRow {
  display: flex; /* row of squares horizontally */
  width:100%;
}

.heatmapCell {
  width: 80px;
  height: 40px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
}

/* Bottom row: day labels */
.dayLabelsRow {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.dayLabel {
  width: 40px;  /* match heatmapCell width if you want alignment */
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

/* Media query: for narrower screens, maybe scale down or stack differently */
@media (min-width: 480px) and (max-width: 500px) {
  .heatmapCell {
    width: 35px!important;
    height: 40px;
  }
  .dayLabel {
    width: 28px;
    font-size: 0.75rem;
  }
  .timeLabel {
    font-size: 0.75rem;
  }
}
  @media(max-width:780px){
  .heatmapCell {
  width: 75px;
}
}
   @media(min-width:500px) and (max-width:600px){
  .heatmapCell {
  width: 50px;
}
}
 @media (max-width:480px){
  .heatmapCell {
  width: 26px;
}
}
  
  }


`