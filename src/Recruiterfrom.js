import React, { useState } from 'react';
import './RecruiterForm.css';

export const Recruiterform = () => {
  
  const [section, setSection] = useState('company');
const nextSection = () => {
    if (section === 'company') setSection('recruiter');
    else if (section === 'recruiter') setSection('upload');
    else if (section === 'upload') setSection('info');
  };

  const prevSection = () => {
    if (section === 'info') setSection('upload');
    else if (section === 'upload') setSection('recruiter');
    else if (section === 'recruiter') setSection('company');
  };
  return (
    
    <div className="recruiter-layout">
      {/* Sidebar */}
      <aside className="recruiter-sidebar">
        <h2>Recruiter Form</h2>
        <ul>
          <li><button onClick={() => setSection('company')}>Company Info</button></li>
          <li><button onClick={() => setSection('recruiter')}>Recruiter Details</button></li>
          <li><button onClick={() => setSection('upload')}>Upload Logo</button></li>
          <li><button onClick={() => setSection('info')}>Information</button></li>
        </ul>
      </aside>

      {/* Main Form Section */}
      <section className="recruiter-main-form">
        {section === 'company' && (
          <div className="form-section fade-in">
            <h3>Company Information</h3>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Enter company name" required />
            </div>
            <div className="form-group">
              <label>Industry</label>
              <input type="text" placeholder="e.g. IT, Healthcare, Manufacturing" required />
            </div>
            <div className="form-group">
              <label>Company Website</label>
              <input type="url" placeholder="https://yourcompany.com" required />
            </div>
          </div>
        )}

        {section === 'recruiter' && (
          <div className="form-section fade-in">
            <h3>Recruiter Details</h3>
            <div className="form-group">
              <label>Recruiter Name</label>
              <input type="text" placeholder="Enter recruiter name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="recruiter@company.com" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="9876543210" maxLength="10" required />
            </div>
          </div>
        )}

        {section === 'upload' && (
          <div className="form-section fade-in">
            <h3>Upload Logo</h3>
            <div className="form-group">
              <label>Upload Company Logo</label>
              <input type="file" accept="image/*" />
            </div>
          </div>
        )}

        {section === 'info' && (
          <div className="form-section fade-in">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label>About the Company</label>
              <textarea rows="4" placeholder="Brief about company mission, culture, etc..." />
            </div>
            <div className="form-group">
              <label>Head Office Location</label>
              <input type="text" placeholder="e.g. Pune, Mumbai" />
            </div>
            <div className="form-group" style={{ marginTop: '2rem' }}>
              <button className="submit-btn">Submit & Go to Login</button>
            </div>
            
          </div>
        
        )}
      </section>
      
    </div>
  );
};