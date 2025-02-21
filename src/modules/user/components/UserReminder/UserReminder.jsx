import React, { useState, useEffect } from "react";
import { UserReminderWrapper } from "./UserReminder.styles";
import { IoMdCheckmark } from "react-icons/io";

const reminders = [
  {
    title: "Understanding you better",
    subtitle: "This would help us to personalize your learning experience",
    description:
      "You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.",
  },
  {
    title: "Data Insights",
    subtitle: "Unlock key insights from user data",
    description:
      "Analyzing user patterns can help optimize engagement and retention strategies.",
  },
  {
    title: "Optimize Performance",
    subtitle: "Make data-driven decisions",
    description:
      "Using predictive analytics can help forecast user behavior and improve business strategies.",
  },
];

const UserReminder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThanks, setShowThanks] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let timer;
    if (showThanks) {
      timer = setTimeout(() => setDismissed(true), 500000); // Hide after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [showThanks]);

  const handleNext = () => {
    if (currentIndex < reminders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowThanks(true);
    }
  };

  const handleDismiss = () => {
    if (currentIndex < reminders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setDismissed(true);
    }
  };

  if (dismissed) {
    return null;
  }

  return (
    <UserReminderWrapper>
      {showThanks ? (
        <div className="reminder-thanks">
          <div className="reminder-thanks-icon">
            <IoMdCheckmark className="checkmark-icon" />
            <span className="thanks-message">Thanks!</span>
          </div>
        </div>
      ) : (
        <div className="user-reminder-content">
          <div className="reminder-text">
            <h3 className="reminder-text-title">
              {reminders[currentIndex].title}
            </h3>
            <p className="reminder-text-subtitle">
              {reminders[currentIndex].subtitle}
            </p>
          </div>
          <div className="reminder-description">
            <div className="reminder-actions">
              <p className="reminder-text-description">
                {reminders[currentIndex].description}
              </p>
              <div className="reminder-buttons">
                <button className="dismiss-button" onClick={handleDismiss}>
                  ✖
                </button>
                <button className="thanks-button" onClick={handleNext}>
                  I Know This
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </UserReminderWrapper>
  );
};

export default UserReminder;
