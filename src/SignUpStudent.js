import React from 'react'
import './SignUpStudent.css';
import { Link } from 'react-router-dom';

export const SignUpStudent = () => {
    return (
        <>
            <section class="Body-my">
                <div class="page-wrapper">
                    <div class="signup-container">
                        <h2>Sign Up Page for Student</h2>
                        <form class="transparent-form">
                            <label for="userid">User ID :</label>
                            <input type="text" id="userid" name="userid" required />

                            <label for="password">Password :</label>
                            <input type="password" id="password" name="password" required />

                            <button type="submit"><Link to="/studentform">Create Profile</Link></button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
