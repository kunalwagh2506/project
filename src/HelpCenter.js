import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterPages.css';
import passwardImg from './assets/passward1.jpeg';
import firstjobImg from './assets/firstjob.webp';
import dashboardImg from './assets/dashboard.webp';

const HelpCenter = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "How to Reset Password",
      desc: "Forgot your password? Follow these simple steps to recover your account.",
      image: passwardImg,
      id: 1
    },
    {
      title: "Posting Your First Job",
      desc: "A step-by-step guide for recruiters to post their first job opening.",
      image: firstjobImg,
      id: 2
    },
    {
      title: "Navigating Your Dashboard",
      desc: "Understand how to manage your job applications and saved jobs easily.",
      image: dashboardImg,
      id: 3
    }
  ];

  const handleLearnMore = (id) => {
    navigate(`/helpdetails/${id}`);
  };

  return (
    <div className="footer-page-container">
      <h1 className="footer-page-title">Help Center</h1>
      <p className="footer-page-subtext">Need assistance? Explore common help topics below.</p>

      <div className="blog-card-container">
        {topics.map((item) => (
          <div className="blog-card" key={item.id}>
            <img src={item.image} alt={item.title} className="blog-img" />
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button
                className="read-more-btn"
                onClick={() => handleLearnMore(item.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
