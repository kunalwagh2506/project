import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Footer.css'; 

const Home = () => {
  return (
    <>
  
      <nav className="navbar">
        <div className="logo">JobPortal</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Career">Career</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>

     
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Connecting talent with opportunity across the globe</p>
          <div className="hero-buttons">
            <Link to="/SignUpRecruiter"><button className="btn">Hire Talent</button></Link>
            <Link to="/SignUpStudent"><button className="btn btn-secondary">Find Jobs</button></Link>
          </div>
        </div>
      </header>


      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-boxes">
          <div className="feature">
            <h3>Verified Companies</h3>
            <p>Connect with top companies and startups that matter.</p>
          </div>
          <div className="feature">
            <h3>Easy Application</h3>
            <p>Apply with just a few clicks and track your progress.</p>
          </div>
          <div className="feature">
            <h3>Career Resources</h3>
            <p>Get resume tips, interview help, and more.</p>
          </div>
        </div>
      </section>

  
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>JobPortal</h3>
            <p>Your trusted partner in career success.</p>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Career">Career</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/HelpCenter">Help Center</Link></li>
              <li><Link to="/Guides">Guides</Link></li>
              <li><Link to="/FAQs">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="/assets/facebook.avif" alt="Facebook" /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src="/assets/linkdin.png" alt="LinkedIn" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/assets/twitter.avif" alt="Twitter" /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/assets/instagram.avif" alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
