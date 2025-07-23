import React, { useEffect, useState } from 'react';
import './RecruiterDashboard.css';

export const RecruiterDashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('recruiterProfile');
    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Recruiter</h2>
        <ul>
          <li>📋 My Profile</li>
          <li>📝 Post a Job</li>
          <li>📄 My Job Posts</li>
          <li>📥 Applications</li>
          <li>📊 Stats</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Welcome Back, Recruiter!</h1>

        {profile ? (
          <div className="profile-section">
            <h3>Company: {profile.companyName}</h3>
            <p>Industry: {profile.industry}</p>
            <p>Website: {profile.website}</p>
            <p>Recruiter: {profile.recruiterName}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            {profile.logo && <img src={profile.logo} alt="Company Logo" className="company-logo" />}
          </div>
        ) : (
          <p>Profile not found. Please fill the form.</p>
        )}

        <div className="card-grid">
          <div className="dash-card">
            <h3>📝 Post New Job</h3>
            <p>Create and publish job listings easily.</p>
          </div>
          <div className="dash-card">
            <h3>📄 View Posted Jobs</h3>
            <p>Manage, edit or remove your job posts.</p>
          </div>
          <div className="dash-card">
            <h3>📥 Applications</h3>
            <p>See who has applied to your jobs.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
