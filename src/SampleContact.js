import React from 'react';
import './SampleContact.css';
import { NavbarSample } from './NavbarSample';

export const SampleContact = () => {
    return (
        <>
            <NavbarSample />
            <div className="Body">
                <section className="back-img">
                    <header>
                        <h1>Contact</h1>
                    </header>

                    <div className="contact-container">
                        <form className="contact-form">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />

                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />

                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>

                            <button type="submit" className="get-started-btn">Send Message</button>
                        </form>
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
