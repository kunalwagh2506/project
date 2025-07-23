import React from 'react';
import './FooterPages.css';
import { useNavigate } from 'react-router-dom';
import resumeImg from './assets/Resumebuilding.avif';
import interviewImg from './assets/interviewpreparation.jpg';
import careerImg from './assets/carrerroadmap.avif';
const Guides = () => {
  const navigate = useNavigate();

  const guides = [
    {
      id: 1,
      title: "Resume Building Guide",
      desc: "Create a standout resume with our expert tips and downloadable templates.",
      image: resumeImg
    },
    {
      id: 2,
      title: "Interview Preparation",
      desc: "From HR rounds to technical tests, learn how to be interview ready.",
      image: interviewImg
    },
    {
      id: 3,
      title: "Fresher’s Career Roadmap",
      desc: "A guide to help freshers start their career with confidence and clarity.",
      image: careerImg
    }
  ];

  return (
    <div className="footer-page-container">
      <h1 className="footer-page-title">Guides & Tutorials</h1>
      <p className="footer-page-subtext">Browse our guides to enhance your career journey.</p>

      <div className="blog-card-container">
        {guides.map((guide) => (
          <div className="blog-card" key={guide.id}>
            <img src={guide.image} alt={guide.title} className="blog-img" />
            <div className="blog-content">
              <h3>{guide.title}</h3>
              <p>{guide.desc}</p>
              <button
                className="read-more-btn"
                onClick={() => navigate(`/guidedetails/${guide.id}`)}
              >
                View Guide
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
