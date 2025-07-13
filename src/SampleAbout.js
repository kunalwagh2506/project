import React from 'react';
import './SampleAbout.css'; 
import { NavbarSample } from './NavbarSample';

export const SampleAbout = () => {
    return (
        <>
            <NavbarSample />
            <div className="Body">
                <section className="back-img">
                    <header>
                        <h1>About</h1>
                    </header>
                    <div className="about-container">
                        <p className="about-text">
                            JobPortal is your trusted partner in career development and job discovery. 
                            Founded in 2025, our mission is to connect professionals with meaningful job opportunities across industries.
                        </p>
                        <p className="about-text">
                            Whether you're a seasoned expert or just starting your career, JobPortal offers tools and resources 
                            to help you grow, learn, and land your dream role.
                        </p>
                        <p className="about-text">
                            We believe in transparency, innovation, and a user-first approach. Join us and take the next step 
                            toward a brighter professional future.
                        </p>
                    </div>
                </section>

                <section>
                    <footer className="footer">
                        <div className="footer-container">
                            <div className="footer-column">
                                <h3>JobPortal</h3>
                                <p>Your trusted partner in career success.</p>
                            </div>

                            <div className="footer-column">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Press</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Resources</h4>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Follow Us</h4>
                                <ul className="social-icons">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p>&copy; 2025 JobPortal. All rights reserved.</p>
                            <p>Design by <strong>Coders United 🎯</strong></p>
                        </div>
                    </footer>
                </section>
            </div>
        </>
    );
};
