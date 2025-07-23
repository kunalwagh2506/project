import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './FooterPages.css';
import resume2Img from './assets/resume2.webp';
import interview2Img from './assets/interview2.avif';
import remote2Img from './assets/remote2.avif';

const blogDetails = {
  1: {
    title: "5 Resume Tips to Get Hired Faster",
    content: (
      <>
        <p>A well-crafted resume is your ticket to the job interview. Make sure you use clean formatting, tailor your resume for each role, use keywords from the job description, and keep it concise.</p>

        <ol>
          <li><strong>Tailor Your Resume for Each Job</strong> – Customize your summary, skills, and experience based on the job description.</li>
          <li><strong>Use Keywords from the Job Posting</strong> – Many companies use ATS systems. Use job-specific terms to stand out.</li>
          <li><strong>Keep It Clean and Concise</strong> – Use 1–2 pages max with readable formatting and bullet points.</li>
          <li><strong>Highlight Achievements, Not Just Duties</strong> – Instead of “Managed a team,” say “Led a team of 5 to complete a project 2 weeks ahead of schedule.”</li>
          <li><strong>Include a Strong Summary Statement</strong> – Describe who you are and what you're looking for in 2–3 lines.</li>
        </ol>

        <p className="tip">📝 <strong>Pro Tip:</strong> Always proofread your resume multiple times and have someone else review it!</p>

        <p>Want to go deeper? Add links to your <strong>portfolio, LinkedIn, or GitHub</strong> if applicable.</p>
      </>
    ),
    image: resume2Img,
  },
  2: {
    title: "Top 10 Job Interview Questions",
    content: (
      <>
        <p>Preparing for an interview? Here are the top 10 most commonly asked questions and how to answer them:</p>

        <ol>
          <li><strong>Tell me about yourself.</strong> – Share background, strengths, and why you're applying.</li>
          <li><strong>Why do you want to work here?</strong> – Mention company values and your alignment.</li>
          <li><strong>What are your strengths?</strong> – Pick 2–3 relevant strengths with examples.</li>
          <li><strong>What are your weaknesses?</strong> – Be honest, show improvement.</li>
          <li><strong>Why should we hire you?</strong> – Highlight value, skills, and uniqueness.</li>
          <li><strong>Describe a conflict or challenge and how you resolved it.</strong> – Use the STAR method.</li>
          <li><strong>Where do you see yourself in 5 years?</strong> – Show ambition + loyalty.</li>
          <li><strong>What are your salary expectations?</strong> – Be flexible or mention a researched range.</li>
          <li><strong>Why did you leave your last job?</strong> – Focus on growth.</li>
          <li><strong>Do you have any questions for us?</strong> – Always ask about culture, team, or role.</li>
        </ol>

        <p className="tip">🎯 <strong>Pro Tip:</strong> Practice aloud, stay confident, and maintain eye contact.</p>
      </>
    ),
    image: interview2Img,
  },
  3: {
    title: "Remote Jobs: Future of Work",
    content: (
      <>
        <p>The remote work culture has rapidly grown — and it’s here to stay. Here's what you should know:</p>

        <h4>✅ Why Remote Work is Rising</h4>
        <ul>
          <li>Advancement in tech tools</li>
          <li>Cost-saving for companies</li>
          <li>Work-life balance for employees</li>
        </ul>

        <h4>🌟 Benefits of Remote Work</h4>
        <ul>
          <li>Flexible schedule</li>
          <li>Zero commute</li>
          <li>Access to global jobs</li>
        </ul>

        <h4>⚠️ Challenges</h4>
        <ul>
          <li>Loneliness or isolation</li>
          <li>Time zone issues</li>
          <li>Communication gaps</li>
        </ul>

        <h4>💼 Top Remote Careers</h4>
        <ul>
          <li>Software Development</li>
          <li>UI/UX Design</li>
          <li>Content Writing</li>
          <li>Digital Marketing</li>
        </ul>

        <p className="tip">📌 <strong>Pro Tip:</strong> Use tools like Notion, Zoom, and Trello, and build a distraction-free workspace.</p>
      </>
    ),
    image: remote2Img,
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <div style={{ padding: '40px' }}>Blog not found!</div>;
  }

  return (
    <div className="footer-page-container">
      <img src={blog.image} alt={blog.title} className="blog-img" />
      <h1 className="footer-page-title">{blog.title}</h1>
      <div className="footer-page-subtext">{blog.content}</div>
      <Link to="/blog">
        <button className="read-more-btn">← Back to Blog</button>
      </Link>
    </div>
  );
};

export default BlogDetail;
