// UserFAQ.js
import React, { useState } from "react";
import {
   FAQContainer, 
   FAQTitle,
   FAQSubtitle,
   FAQItem, 
   FAQQuestion,
   FAQAnswer,
   ToggleButton,
   RaiseQueryButton 
} from "../UserFAQ/UserFAQ.style";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import theme from "../../../../theme/Theme";
import RaiseQuery from "../../components/UserFaqComponent/RaiseQuery";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan anytime." },
  { question: "What is your cancellation policy?", answer: "You can cancel anytime. There are no hidden fees or penalties." },
  { question: "Can other info be added to an invoice?", answer: "Yes, you can customize invoice details from the billing section." },
  { question: "How does billing work?", answer: "Billing is handled automatically on a recurring basis based on your chosen plan." },
  { question: "How do I change my account email?", answer: "You can change your account email from your profile settings." },
];

const UserFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "flex-end"
        }}>
        <FAQTitle>Frequently asked questions</FAQTitle>
        <RaiseQueryButton onClick={() => setIsModalOpen(true)}>
          Raise Query
        </RaiseQueryButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          maxWidth: "90%",
        }}>
        <FAQSubtitle>Everything you need to know about the product and billing.</FAQSubtitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <ToggleButton>
                {openIndex === index ? (
                  <CiCircleMinus style={{ color: `${theme.colors.secondary}` }} />
                ) : (
                  <CiCirclePlus style={{ color: `${theme.colors.secondary}` }} />
                )}
              </ToggleButton>
            </FAQQuestion>
            {openIndex === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </div>
      {isModalOpen && <RaiseQuery isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </FAQContainer>
  );
};

export default UserFAQ;
