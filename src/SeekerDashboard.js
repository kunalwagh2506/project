// src/SeekerDashboard.js
import React from 'react';
import './SeekerDashboard.css';
import {
  FaUserCircle,
  FaFileUpload,
  FaClipboardList,
  FaSignOutAlt,
} from 'react-icons/fa';

const SeekerDashboard = () => {
  const seekerData = {
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    dob: '2002-05-14',
    mobile: '9876543210',
    skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    education: 'B.Sc. Computer Science',
    address: 'Pune, Maharashtra',
  };

  return (
    <div className="glass-dashboard">
      {/* Sidebar */}
      <aside className="glass-sidebar">
        <h2>🎓 Seeker</h2>
        <nav>
          <a href="#"><FaUserCircle /> Profile</a>
          <a href="#"><FaFileUpload /> Resume</a>
          <a href="#"><FaClipboardList /> Applied</a>
          <a href="#" className="logout"><FaSignOutAlt /> Logout</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="glass-main">
        <header>
          <h1>Welcome, {seekerData.name} 👋</h1>
          <p>Let’s build your future together.</p>
        </header>

        <div className="glass-section profile">
          <h3>👤 Profile Info</h3>
          <div className="profile-grid">
            <div>
              <p><strong>Email:</strong> {seekerData.email}</p>
              <p><strong>DOB:</strong> {seekerData.dob}</p>
              <p><strong>Mobile:</strong> {seekerData.mobile}</p>
              <p><strong>Address:</strong> {seekerData.address}</p>
            </div>
            <div>
              <p><strong>Education:</strong> {seekerData.education}</p>
              <p><strong>Skills:</strong></p>
              <ul>
                {seekerData.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-section resume">
          <h3>📄 Resume</h3>
          <p>Upload or view your resume.</p>
          <button>Upload Resume</button>
        </div>

        <div className="glass-section jobs">
          <h3>📝 Applied Jobs</h3>
          <p>No jobs applied yet. Start applying today!</p>
        </div>
      </main>
    </div>
  );
};

export default SeekerDashboard;
