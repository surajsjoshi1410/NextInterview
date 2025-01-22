// EngagementPerformance.jsx
import React from "react";
import { EngagementPerformanceWrap } from "./EngagementPerformance.styles";

const hours = [
    "12am", "2am", "4am", "6am", "8am", "10am",
    "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* 
  Example 2D array for engagement data:
  engagementData[row][col]:
    row => hour index (0..11)
    col => day index  (0..6)
  Values 0..10 => arbitrary scale to decide color intensity
*/
const engagementData = [
    [2, 4, 5, 5, 6, 2, 3],
    [1, 3, 7, 5, 5, 2, 2],
    [1, 4, 8, 7, 6, 3, 2],
    [0, 4, 9, 8, 7, 3, 1],
    [2, 3, 9, 10, 7, 4, 2],
    [2, 3, 9, 10, 7, 4, 2],
    [1, 4, 9, 8, 7, 3, 2],
    [0, 2, 7, 5, 6, 2, 1],
    [2, 4, 5, 5, 6, 2, 3],
    [3, 5, 8, 9, 7, 4, 2],
    [2, 6, 9, 10, 7, 4, 2],
    [1, 4, 8, 7, 6, 3, 2],
];

function EngagementPerformance() {
    // Helper to map the numeric intensity to a color
    // for demonstration, we interpolate from #e0ecff (light) to #003580 (dark)
    const getColor = (val) => {
        // val range assumed 0..10 
        // We'll do a simple approach: 
        // Blend from a lighter hue to a darker.
        // Or you can define your color steps.
        const minColor = [224, 236, 255];  // #e0ecff
        const maxColor = [0, 53, 128];     // #003580
        // linear interpolation
        const ratio = val / 10; // 0..1
        const r = Math.round(minColor[0] + ratio * (maxColor[0] - minColor[0]));
        const g = Math.round(minColor[1] + ratio * (maxColor[1] - minColor[1]));
        const b = Math.round(minColor[2] + ratio * (maxColor[2] - minColor[2]));
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <EngagementPerformanceWrap>
            <div className="engagementContainer">
                {/* Main grid area */}
                <div className="engagementContainer-inner">


                    <div className="engagementGrid">
                        {/* Left side (hour labels) + heatmap cells */}
                        <div className="timeColumn">
                            {hours.map((hourLabel, rowIndex) => (
                                <div key={rowIndex} className="timeLabel">
                                    {hourLabel}
                                </div>
                            ))}
                        </div>

                        <div className="heatmapArea">
                            {hours.map((_, rowIndex) => (
                                <div key={rowIndex} className="heatmapRow">
                                    {days.map((_, colIndex) => {
                                        const val = engagementData[rowIndex][colIndex];
                                        return (
                                            <div
                                                key={colIndex}
                                                className="heatmapCell"
                                                style={{ backgroundColor: getColor(val) }}
                                            >
                                                {/* You could show val or not. We'll keep empty for a pure color block */}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Day labels at bottom */}

                    <div className="dayLabelsRow">
                        <div key={-1} className="dayLabel">
                        </div>
                        {days.map((day, idx) => (
                            <div key={idx} className="dayLabel">
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </EngagementPerformanceWrap>
    );
}

export default EngagementPerformance;
