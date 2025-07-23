<<<<<<< HEAD
import React from 'react'
import './NavbarStudent.css'
import { Link } from 'react-router-dom'
import code from './code.png';
=======
import React from 'react';
import './NavbarStudent.css';
import code from './code.png';
import { Link } from 'react-router-dom';

>>>>>>> a500392 (Updated code)

export const NavbarStudent = () => {
    return (
        <>
<<<<<<< HEAD
            <section class="ns-body">
                <nav className="ns-navbar">
                    <img src={code} alt="Code United Logo" className="ns-logo" />
                    <Link to="/homeStudent" className="ns-link">Home</Link>
                    <Link to="/lecture" className="ns-link">Lectures</Link>
                    <Link to="/information" className="ns-link">Education Fields</Link>
                    <Link to="/industry" className="ns-link">Industry</Link>
                    <Link to="/profile" className="ns-link">Profile</Link>
                </nav>
            </section>
=======
            <nav className="student-navbar">
                <img src={code} alt="Logo" className="navbar-logo" />
                <Link to="/home" className="navbar-link">Home</Link>
                 <Link to="/lecture" className="navbar-link">Lectures</Link>
                 <Link to="/information" className="navbar-link">Education Fields</Link>
                 <Link to="/industry" className="navbar-link">Industry</Link>
                 <Link to="/profile" className="navbar-link">Profile</Link>
                 <Link to="/recruiterDashboard "className="navbar-link">recruiterDashboard </Link>
            </nav>
>>>>>>> a500392 (Updated code)
        </>
    );
};
