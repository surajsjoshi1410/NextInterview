import React from 'react';
import { SubscriptionCardWrapper } from './SubscriptionCard.styles';


const SubscriptionCard = ({ title, duration, price, features, isSuggested, onSubscribe }) => {
    return (
        <SubscriptionCardWrapper>
            <div className={`subscription-card`}>
                {isSuggested && <div className="suggested-badge">Suggested</div>}
                <div className="subscription-card-header">
                    <h2 className='subscription-card-header-title'>{duration}</h2>
                </div>
                <div className="subscription-card-body">
                    <h3 className='subscription-card-body-price'>{price}</h3>
                    <ul className="features-list">
                        {features.map((feature, index) => (
                            <li key={index}>
                                <span className="check-mark">✔</span> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="subscription-card-footer">
                    <button className="subscribe-button" onClick={onSubscribe}>
                        Subscribe Now
                    </button>
                </div>
            </div>
        </SubscriptionCardWrapper>
    );
};

export default SubscriptionCard;