import React from 'react'
import './Profile.css';
import { NavbarStudent } from './NavbarStudent';

export const Profile = () => {
    return (
        <>
            <NavbarStudent />
            <section className="prof-body">
                <header className="prof-header">
                    <h1>Your Profile</h1>
                </header>

                <section className="prof-details">
                    <h2>Student Details</h2>
                    <img
                        id="profilePhoto"
                        src=""
                        alt="Student Photo"
                        style={{ maxWidth: '150px', borderRadius: '8px' }}
                    />
                    <br /><br />
                    <p><strong>Name:</strong> <span id="name"></span></p>
                    <p><strong>Date of Birth:</strong> <span id="dob"></span></p>
                    <p><strong>Mobile:</strong> <span id="mobile"></span></p>
                    <p><strong>Address:</strong> <span id="address"></span></p>
                    <p><strong>Email:</strong> <span id="email"></span></p>
                    <p><strong>Education:</strong> <span id="education"></span></p>
                    <p><strong>Skills:</strong> <span id="skills"></span></p>
                </section>
            </section>
        </>
    )
}
