<<<<<<< HEAD
import React from 'react'
import './Profile.css';
import { NavbarStudent } from './NavbarStudent';
=======
import React from 'react';
import './Profile.css'; // Make sure this file exists
>>>>>>> a500392 (Updated code)

export const Profile = () => {
    return (
        <>
<<<<<<< HEAD
            <NavbarStudent />
            <section className="prof-body">
                <header className="prof-header">
=======
            <section className="profile-body">
                <header>
>>>>>>> a500392 (Updated code)
                    <h1>Your Profile</h1>
                </header>

                <section className="prof-details">
                    <h2>Student Details</h2>
                    <img
                        id="profilePhoto"
                        src=""
                        alt="Student Photo"
                        style={{ maxWidth: '150px', borderRadius: '8px' }}
<<<<<<< HEAD
                    />
                    <br /><br />
                    <p><strong>Name:</strong> <span id="name"></span></p>
                    <p><strong>Date of Birth:</strong> <span id="dob"></span></p>
                    <p><strong>Mobile:</strong> <span id="mobile"></span></p>
                    <p><strong>Address:</strong> <span id="address"></span></p>
                    <p><strong>Email:</strong> <span id="email"></span></p>
                    <p><strong>Education:</strong> <span id="education"></span></p>
                    <p><strong>Skills:</strong> <span id="skills"></span></p>
=======
                    /><br /><br />

                    <p><strong>Name:</strong> <span id="name">John Doe</span></p>
                    <p><strong>Date of Birth:</strong> <span id="dob">2001-01-01</span></p>
                    <p><strong>Mobile:</strong> <span id="mobile">1234567890</span></p>
                    <p><strong>Address:</strong> <span id="address">123, Street, City</span></p>
                    <p><strong>Email:</strong> <span id="email">john@example.com</span></p>
                    <p><strong>Education:</strong> <span id="education">B.Sc. Computer Science</span></p>
                    <p><strong>Skills:</strong> <span id="skills">React, Node.js, MongoDB</span></p>
>>>>>>> a500392 (Updated code)
                </section>
            </section>
        </>
    );
};
