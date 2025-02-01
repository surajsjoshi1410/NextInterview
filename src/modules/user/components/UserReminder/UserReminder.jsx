import React, { useState } from 'react';
import {UserReminderWrapper} from './UserReminder.styles';

const UserReminder = () => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed) {
    return null; // If dismissed, return nothing (hide the component)
  }

  return (
    <UserReminderWrapper>
      <div className="user-reminder-content">
        <div className="reminder-text">
          <h3 className='reminder-text-title'>Understanding you better</h3>
          <p className='reminder-text-subtitle'>This would help us to personalize your learning experience</p>
          <p className='reminder-text-description'>
            You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.
          </p>
        </div>
        <div className="reminder-actions">
          <button className="dismiss-button" onClick={handleDismiss}>
            <span>✖</span>
          </button>
          <button className="thanks-button">
            I Know This
          </button>
        </div>
      </div>
    </UserReminderWrapper>
  );
};

export default UserReminder;
