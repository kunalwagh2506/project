import React from 'react';
import './SignUpRecruiter.css';
import { Link } from 'react-router-dom';

export const SignUpRecruiter = () => {
  return (
    <section className="recruiter-signup-body">
      <div className="recruiter-signup-box">
        <h2>Sign Up as Recruiter</h2>

        <form>
          <div className="form-group">
            <label htmlFor="userid">User ID</label>
            <input type="text" id="userid" name="userid" placeholder="Enter your user ID" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <Link to="/recruiterfrom">
            <button type="button" className="recruiter-signup-btn">Create Profile</button>
          </Link>
        </form>
      </div>
    </section>
  );
}
