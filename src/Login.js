import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div class="Bbody">
                <div class="back-img">
                    <div class="login-box">
                        <h2>Login Page</h2>
                        <form>
                            <label for="userid">User Id:</label>
                            <input type="text" id="userid" name="userid" required />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />

                            <button type="submit"><a href="http://127.0.0.1:5500/HomeStudent.html">Login</a></button>
                        </form>

                        <div class="signup-options">
                            <div class="option">
                                <Link to="/studentsignup">Sign up as Job Recruter</Link>
                            </div>
                            <div class="option">
                                <Link to="/studentsignup">Sign up as Job Seeker</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
