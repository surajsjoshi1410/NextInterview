// UserDropOffs.jsx
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { UserDropOffsWrapper } from "./UserDropOffs.styles";


const data = [
    { name: "Quiz", value: 50 },
    { name: "Skill assessment", value: 30 },
    { name: "Question bank", value: 60 },
    { name: "Learning path", value: 45 },
    { name: "Quickly revise", value: 75 },
];

function UserDropOffs() {
    return (
        <UserDropOffsWrapper>
            <div className="dropOffsContainer">
                <h3 className="chartTitle">Users Dropoff</h3>

                {/* The chart is wrapped in a ResponsiveContainer for auto-resizing */}
                <div style={{ width: "100%", height: 250 }}>
                    <ResponsiveContainer>
                        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#017b9f" /* or any color you want */ />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </UserDropOffsWrapper>
    );
}

export default UserDropOffs;
