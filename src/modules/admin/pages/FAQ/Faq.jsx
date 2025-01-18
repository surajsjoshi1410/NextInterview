import React, { useState } from "react";
import styled from "styled-components";
import {
  FAQContainer,
  Question,
  Answer,
  AddQuestionButton,
  ActionButton,
  ActionButtons
} from "../../pages/FAQ/Faq.styles";
import DeleteModule from "../../components/DeleteModule/DeleteModule";
import EditModal from "../../components/FAQComponent/FAQEdit/FaqEdit";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import AddFaqModal from "../../components/FAQComponent/FAQAdd/FaqAdd"; 
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
const FAQ = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
  const [faqs, setFaqs] = useState([
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isVisible: false,
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade anytime.", isVisible: false },
    { question: "What is your cancellation policy?", answer: "You can cancel anytime with no additional fees.", isVisible: false },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can customize your invoice as needed.", isVisible: false },
    { question: "How does billing work?", answer: "We bill annually or monthly based on your plan.", isVisible: false },
    { question: "How do I change my account email?", answer: "Go to account settings and update your email.", isVisible: false },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentDeleteIndex, setCurrentDeleteIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const toggleAnswerVisibility = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isVisible: !faq.isVisible } : faq
      )
    );
  };

  const handleEditSave = (question, answer) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === currentEditIndex ? { ...faq, question, answer } : faq
      )
    );
    setIsEditModalOpen(false);
  };

  const openEditModal = (index) => {
    setCurrentEditIndex(index);
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    setFaqs((prevFaqs) => prevFaqs.filter((_, i) => i !== currentDeleteIndex));
    setIsDeleteModalOpen(false);
  };

  const openDeleteModal = (index) => {
    setCurrentDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };



  const addQuestion = (newFaq) => {
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
  };

  return (
    <>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleAnswerVisibility(index)}>
              {faq.question}
              <span>{faq.isVisible ? <CiCircleMinus /> : <IoAddCircleOutline/>}</span>
            </Question>
            <Answer isVisible={faq.isVisible}>
              {faq.answer}
              {faq.isVisible && (
                <ActionButtons>
                  <ActionButton type="edit" onClick={() => openEditModal(index)}>
                  <CiEdit />
                  </ActionButton>
                  <ActionButton type="delete" onClick={() => openDeleteModal(index)}>
                  <MdDelete />
                  </ActionButton>
                </ActionButtons>
              )}
            </Answer>
          </div>
        ))}
       

       <AddQuestionButton onClick={() => setIsAddModalOpen(true)}>
                 + Add Question
               </AddQuestionButton>

      </FAQContainer>
      {isEditModalOpen && (
        <EditModal
          faq={faqs[currentEditIndex]}
          onSave={handleEditSave}
          onCancel={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModule
          onDelete={handleDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
        />

        
      )}
      {isAddModalOpen && (
              <AddFaqModal
                onClose={() => setIsAddModalOpen(false)}
                onSave={addQuestion}
              />
            )}
    </>
  );
};

export default FAQ;
