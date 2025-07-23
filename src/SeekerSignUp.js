import React from 'react';
import './SeekerSignUp.css';
import { Link } from 'react-router-dom';

export const SeekerSignUp = () => {
  return (
    <section className="seeker-body">
      <div className="seeker-box">
        <h2>Seeker Registration</h2>

        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />

          <Link to="/studentform">
            <button type="button" className="seeker-btn">Create Profile</button>
          </Link>
        </form>
      </div>
    </section>
  );
};
