import React from 'react';
import './FooterPages.css';

const FAQs = () => {
  const faqs = [
    {
      question: "How do I apply for a job?",
      answer: "Search for a job, click on it, and hit 'Apply'. You’ll need to sign in or sign up."
    },
    {
      question: "Can I edit my profile later?",
      answer: "Yes, go to your dashboard and click on 'Edit Profile'."
    },
    {
      question: "Is JobPortal free for seekers?",
      answer: "Yes, job seekers can use all basic features for free."
    }
  ];

  return (
    <div className="footer-page-container">
      <h1 className="footer-page-title">Frequently Asked Questions</h1>
      <p className="footer-page-subtext">Answers to the most common questions from job seekers and recruiters.</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>❓ {faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
