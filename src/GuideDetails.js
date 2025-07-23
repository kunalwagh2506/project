import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './FooterPages.css';
import resumeImg from './assets/Resumebuilding.avif';
import interviewImg from './assets/interviewpreparation.jpg';
import remoteImg from './assets/carrerroadmap.avif';

const guideDetails = {
  1: {
    title: "Resume Building Guide",
    image: resumeImg,
    content: (
      <>
        <p>A strong resume gets you noticed. Here's how to build a winning one:</p>
        <ul>
          <li>Use a clean, professional layout (avoid heavy designs).</li>
          <li>Start with a short, focused summary.</li>
          <li>List your achievements with quantifiable results.</li>
          <li>Tailor your resume to each job you apply for.</li>
          <li>Use keywords from the job description.</li>
        </ul>
        <p className="tip">📌 <strong>Pro Tip:</strong> Use free tools like Canva or Novoresume to create beautiful resumes.</p>
      </>
    )
  },
  2: {
    title: "Interview Preparation",
    image: interviewImg,
    content: (
      <>
        <p>Interviews test more than your technical skills — they test your personality, confidence, and communication. Here's how to prepare:</p>
        <ul>
          <li>Research the company thoroughly.</li>
          <li>Practice common questions and answers.</li>
          <li>Dress appropriately and be punctual.</li>
          <li>Maintain good eye contact and body language.</li>
        </ul>
        <p className="tip">🎯 <strong>Pro Tip:</strong> Use the STAR method (Situation, Task, Action, Result) for answering behavioral questions.</p>
      </>
    )
  },
  3: {
    title: "Fresher’s Career Roadmap",
    image: remoteImg,
    content: (
      <>
        <p>Starting out? Here’s a roadmap just for freshers:</p>
        <ol>
          <li>Build a solid resume with internships/projects.</li>
          <li>Create a LinkedIn profile and start networking.</li>
          <li>Apply to entry-level jobs and internships daily.</li>
          <li>Start learning new tools/platforms (e.g. Git, SQL, etc.).</li>
        </ol>
        <p className="tip">🌱 <strong>Pro Tip:</strong> Don’t wait for the “perfect” job – start small and grow consistently.</p>
      </>
    )
  }
};

const GuideDetails = () => {
  const { id } = useParams();
  const guide = guideDetails[id];

  if (!guide) {
    return <div style={{ padding: '40px' }}>Guide not found!</div>;
  }

  return (
    <div className="footer-page-container">
      <img src={guide.image} alt={guide.title} className="blog-img" />
      <h1 className="footer-page-title">{guide.title}</h1>
      <div className="footer-page-subtext">{guide.content}</div>
      <Link to="/guides">
        <button className="read-more-btn">← Back to Guides</button>
      </Link>
    </div>
  );
};

export default GuideDetails;
