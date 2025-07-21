import React, { useState } from 'react';
import './NavbarSample.css';
import code from './code.png'; // Replace with your actual logo path
import { Link } from 'react-router-dom';

export const NavbarSample = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={code} alt="Logo" className="navbar-logo" />
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>

            <div className="navbar-right">
                <Link to="/login" className="login-button">Login</Link>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};
