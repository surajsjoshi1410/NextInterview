import React from 'react'
import { UserSubscriptionWrapper } from './UserSubscription.styles'
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard'

export default function UserSubscription() {
    const handleSubscribe = () => {
        alert('Subscribed!');
    };
    const subscriptionCardData=[
        {
            title:"Premium Plan",
            duration:"2 months",
            price:"Rs. 2,000",
            features:["Complete Documentation","Working Materials in Figma","100GB Cloud Storage","Email Automation","Premium Support"],
            isSuggested:true,
        },
        {
            title:"Premium Plan",
            duration:"3 months",
            price:"Rs. 6,000",
            features:["Complete Documentation","Working Materials in Figma","Working Materials in Figma","100GB Cloud Storage","Email Automation","Premium Support","test 1","test 2"],
            isSuggested:true,
        },
        {
            title:"Premium Plan",
            duration:"2 months",    
            price:"Rs. 4,000",
            features:["Complete Documentation","Working Materials in Figma","100GB Cloud Storage","Email Automation","Premium Support"],
            isSuggested:false,
        }
    ]

    const planFeatures = [
        "Complete Documentation",
        "Working Materials in Figma",
        "100GB Cloud Storage",
        "Email Automation",
        "Premium Support"
    ];

    return (
        <UserSubscriptionWrapper>
            <div className="subscriptionCardContainer">
                {
                    subscriptionCardData.map((cardData, index) => (
                        <SubscriptionCard
                            key={index}
                            title={cardData.title}
                            duration={cardData.duration}
                            price={cardData.price}
                            features={cardData.features}
                            isSuggested={cardData.isSuggested}
                            onSubscribe={handleSubscribe}
                        />
                    ))
                }
               
            </div>

        </UserSubscriptionWrapper>
    )
}
