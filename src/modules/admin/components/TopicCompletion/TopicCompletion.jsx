import React, { useState } from "react";
import { TopicCompletionWrap } from "./TopicCompletion.styles";

const exampleData = {
    completed: [
        { title: "Ai Basics", hours: 12 },
        { title: "Ai Basics", hours: 12 },
        { title: "Ai Basics", hours: 12 },
    ],
    remaining: [
        { title: "Ai Basics", hours: 14 },
        { title: "Ai Basics", hours: 12 },
        { title: "Ai Basics", hours: 16 },
        { title: "Ai Basics", hours: 16 },
    ],
};

const TopicCompletion = () => {
    const [activeTab, setActiveTab] = useState("remaining");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const listData = exampleData[activeTab];

    const completedCount = exampleData.completed.length;
    const remainingCount = exampleData.remaining.length;

    return (
        <TopicCompletionWrap>
            <div className="topicContainer">
                <div className="tabsRow">
                    <div
                        className="tab"
                        style={{
                            borderBottom: activeTab === "completed" ? "2px solid #008080" : "none",
                            color: activeTab === "completed" ? "#000" : "#666",
                        }}
                        onClick={() => handleTabClick("completed")}
                    >
                        Completed({completedCount})
                    </div>
                    <div
                        className="tab"
                        style={{
                            borderBottom: activeTab === "remaining" ? "2px solid #008080" : "none",
                            color: activeTab === "remaining" ? "#000" : "#666",
                        }}
                        onClick={() => handleTabClick("remaining")}
                    >
                        Remaining({remainingCount})
                    </div>
                </div>

                <div className="listArea">
                    {listData.map((item, index) => (
                        <div key={index} className="listItem">
                            {item.title} – {item.hours} hours
                        </div>
                    ))}
                </div>
            </div>
        </TopicCompletionWrap>
    );
};

export default TopicCompletion;
