import React from 'react';
import './StudentForm.css';

export const StudentForm = () => {
  return (
    <section className="student-body">
      <div className="student-form-container">
        <h2 className="student-form-title">Create Profile of Student</h2>
        <form id="studentForm">
          <label className="student-label" htmlFor="name">Name:</label>
          <input type="text" id="name" className="student-input" required />

          <label className="student-label">Date of Birth:</label>
          <div className="student-dob-group">
            <input
              type="text"
              id="dob-day"
              className="student-input"
              placeholder="DD"
              maxLength="2"
              required
            />
            <input
              type="text"
              id="dob-month"
              className="student-input"
              placeholder="MM"
              maxLength="2"
              required
            />
            <input
              type="text"
              id="dob-year"
              className="student-input"
              placeholder="YYYY"
              maxLength="4"
              required
            />
          </div>

          <label className="student-label" htmlFor="mobile">Mobile No.:</label>
          <input type="tel" id="mobile" className="student-input" maxLength="10" required />

          <label className="student-label" htmlFor="address">Address:</label>
          <textarea id="address" rows="2" className="student-textarea" required></textarea>

          <label className="student-label" htmlFor="email">Email:</label>
          <input type="email" id="email" className="student-input" required />

          <label className="student-label">Education Qualification:</label>
          <div className="student-education">
            <label>
              <input
                type="radio"
                name="education"
                value="10th Pass"
                className="student-radio"
                required
              /> 10th Pass
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="12th Pass"
                className="student-radio"
              /> 12th Pass
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Graduation Completed"
                className="student-radio"
              /> Graduation Completed
            </label>
          </div>

          <label className="student-label">Skills:</label>
          <div className="student-skills">
            <label>
              <input type="checkbox" name="skills" value="MS-CIT" className="student-checkbox" /> MS-CIT
            </label>
            <label>
              <input type="checkbox" name="skills" value="Programming" className="student-checkbox" /> Programming Languages
            </label>
            <label>
              <input type="checkbox" name="skills" value="Typing" className="student-checkbox" /> Typing
            </label>
          </div>

          <label className="student-label" htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" className="student-input" accept="image/*" required />

          <button type="submit" className="student-submit-btn">Register</button>
          <p>
            <a href="http://127.0.0.1:5500/login.html" className="student-link">Go to Login Page</a>
          </p>
        </form>
      </div>
    </section>
  );
};
