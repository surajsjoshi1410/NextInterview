// UserSubscriptionInfo.js
import React from 'react';
import { UserSubscriptionInfoWrapper } from './UserSubscriptionInfo.styles';

const UserSubscriptionInfo = () => {
    const subscription = {
        type: "Data Science Lite",
        amountPaid: "Rs. 1200",
        purchaseDate: "23 Nov 2024",
        planEndDate: "23 Dec 2024",
        frequency: "Monthly"
    };

    return (
        <UserSubscriptionInfoWrapper>
            <div className="subscription-container">
                <h2 className="subscription-title">Subscription info</h2>
                <div className="subscription-details">
                    <div className="detail-item"><span className='detail-item-title'>Subscription Type</span> <span className='detail-item-value'>{subscription.type}</span></div>
                    <div className="detail-item"><span className='detail-item-title'>Amount Paid</span> <span className='detail-item-value'>{subscription.amountPaid}</span></div>
                    <div className="detail-item"><span className='detail-item-title'>Purchase Date</span> <span className='detail-item-value'>{subscription.purchaseDate}</span></div>
                    <div className="detail-item"><span className='detail-item-title'>Plan End Date</span> <span className='detail-item-value'>{subscription.planEndDate}</span></div>
                    <div className="detail-item"><span className='detail-item-title'>Frequency</span> <span className='detail-item-value'>{subscription.frequency}</span></div>
                </div>
                <div className="subscription-upgrade-btn">
                    {/* <button className="upgrade-button">Upgrade</button> */}
                </div>
            </div>
        </UserSubscriptionInfoWrapper>
    );
};

export default UserSubscriptionInfo;