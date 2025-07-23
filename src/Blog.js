import React from 'react';
import './FooterPages.css';
import { Link } from 'react-router-dom'; // ✅ use Link (not useParams here)
import resumeImg from './assets/resume.webp';
import interviewImg from './assets/interview.jpg';
import remoteImg from './assets/remote.jpg';

const Blog = () => {
  const blogs = [
    {
      id: 1, // ✅ Add ID for routing
      title: "5 Resume Tips to Get Hired Faster",
      desc: "Your resume is your first impression. Learn how to make it perfect for recruiters.",
      image: resumeImg,
    },
    {
      id: 2,
      title: "Top 10 Job Interview Questions",
      desc: "Crack your next interview by preparing for the most asked questions in 2024.",
      image: interviewImg,
    },
    {
      id: 3,
      title: "Remote Jobs: Future of Work",
      desc: "Explore the growing trend of remote jobs and how to stay competitive.",
      image: remoteImg,
    }
  ];

  return (
    <div className="footer-page-container">
      <h1 className="footer-page-title">Career & Job Blog</h1>
      <p className="footer-page-subtext">Explore our latest articles on job search, interviews, resume tips, and more.</p>

      <div className="blog-card-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              {/* ✅ Wrap button inside Link */}
              <Link to={`/blog/${blog.id}`} className="read-more-btn-link">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
