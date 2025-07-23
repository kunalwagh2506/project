import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './FooterPages.css';
import passwardImg from './assets/passward1.jpeg';
import firstjobImg from './assets/firstjob.webp';
import dashboardImg from './assets/dashboard.webp';

const topicDetails = {
  1: {
    title: "How to Reset Password",
    image: passwardImg
    ,
    content: (
      <>
        <p>If you forgot your password, don't worry! Just follow these steps:</p>
        <ol>
          <li>Go to the <strong>Login</strong> page.</li>
          <li>Click on the <strong>"Forgot Password?"</strong> link below the login button.</li>
          <li>Enter your registered email address.</li>
          <li>Check your email inbox for a reset link.</li>
          <li>Click the link and set a new password.</li>
        </ol>
        <p className="tip">🔐 <strong>Tip:</strong> Use a strong and memorable password to keep your account secure!</p>
      </>
    )
  },
  2: {
    title: "Posting Your First Job",
    image: firstjobImg,
    content: (
      <>
        <p>As a recruiter, posting a job is simple. Here's how:</p>
        <ol>
          <li>Login to your <strong>Recruiter Account</strong>.</li>
          <li>Go to the <strong>"Post a Job"</strong> section from the sidebar.</li>
          <li>Fill in the job title, description, requirements, and location.</li>
          <li>Choose a category and employment type (e.g. Full-time, Internship).</li>
          <li>Click <strong>"Submit"</strong> to publish your job listing.</li>
        </ol>
        <p className="tip">📢 <strong>Tip:</strong> Use job-specific keywords to boost visibility and attract the right candidates.</p>
      </>
    )
  },
  3: {
    title: "Navigating Your Dashboard",
    image: dashboardImg,
    content: (
      <>
        <p>Your dashboard gives you full control over your job activity:</p>
        <ul>
          <li><strong>Saved Jobs:</strong> View jobs you bookmarked to apply later.</li>
          <li><strong>Applied Jobs:</strong> Track the status of your job applications.</li>
          <li><strong>Profile Stats:</strong> See how many recruiters viewed your profile.</li>
          <li><strong>Messages:</strong> Chat with recruiters directly inside the portal.</li>
        </ul>
        <p className="tip">📈 <strong>Tip:</strong> Keep your profile up-to-date to appear in recruiter searches!</p>
      </>
    )
  }
};

const HelpDetails = () => {
  const { id } = useParams();
  const topic = topicDetails[id];

  if (!topic) {
    return <div className="footer-page-container"><p className="not-found">❌ Topic not found!</p></div>;
  }

  return (
    <div className="footer-page-container">
      <img src={topic.image} alt={topic.title} className="blog-img" />
      <h1 className="footer-page-title">{topic.title}</h1>
      <div className="footer-page-subtext">{topic.content}</div>
      <Link to="/helpcenter">
        <button className="read-more-btn">← Back to Help Center</button>
      </Link>
    </div>
  );
};

export default HelpDetails;
