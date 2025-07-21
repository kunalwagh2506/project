import React from 'react'
import './NavbarStudent.css'
import { Link } from 'react-router-dom'
import code from './code.png';

export const NavbarStudent = () => {
    return (
        <>
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
        </>
    )
}
