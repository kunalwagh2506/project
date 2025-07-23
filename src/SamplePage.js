import React from 'react';
import './SamplePage.css';
import { NavbarSample } from './NavbarSample';
import { Link } from 'react-router-dom';

export const SamplePage = () => {
    return (
        <>
            <NavbarSample />
            <div className="sample-body">
                <section className="back-img">
                    <header>
                        <h1>Find your job &<br />make sure goal.</h1>
                    </header>

                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button className="search-button">🔍</button>
                    </div>

                    <div className="left-btn-container">
                        <a href="/login" className="get-started-btn">Get Started</a>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-column">
                            <h3>JobPortal</h3>
                            <p>Your trusted partner in career success.</p>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                             <li><Link to="/About">About</Link></li>
                                <li><Link to="/Career">Career</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                               
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/HelpCenter">Help Center</Link></li>
                                <li><Link to="/Guides">Guides</Link></li>
                                <li><Link to="/FAQs">FAQs</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Follow Us</h4>
                            <ul className="social-icons">
  <li>
    <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">
      <img src="/assets/facebook.avif" alt="Facebook" />
    </a>
  </li>
  <li>
    <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
      <img src="/assets/linkdin.png" alt="LinkedIn" />
    </a>
  </li>
  <li>
    <a href="https://twitter.com" className="social-icon" target="_blank" rel="noreferrer">
      <img src="/assets/twitter.avif" alt="Twitter" />
    </a>
  </li>
  <li>
    <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">
      <img src="/assets/instagram.avif" alt="Instagram" />
    </a>
  </li>
</ul>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 JobPortal. All rights reserved.</p>
                        <p>Design by <strong>Coders United 🎯</strong></p>
                    </div>
                </footer>
            </div>
        </>
    );
};
