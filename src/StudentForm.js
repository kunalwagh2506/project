import React, { useState } from 'react';
import './StudentForm.css';
import { Link } from 'react-router-dom';

export const StudentForm = () => {
  const [section, setSection] = useState('personal');
  const sections = ['personal', 'education', 'skills', 'upload', 'information'];
  const currentIndex = sections.indexOf(section);

  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      setSection(sections[currentIndex + 1]);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setSection(sections[currentIndex - 1]);
    }
  };

  return (
    <div className="student-layout">
      {/* Sidebar */}
      <aside className="student-sidebar">
        <h2>Seeker Form</h2>
        <ul>
          <li><button onClick={() => setSection('personal')}>Personal Info</button></li>
          <li><button onClick={() => setSection('education')}>Education</button></li>
          <li><button onClick={() => setSection('skills')}>Skills</button></li>
          <li><button onClick={() => setSection('upload')}>Upload</button></li>
          <li><button onClick={() => setSection('information')}>Information</button></li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="student-main-form">
        {section === 'personal' && (
          <div className="form-section fade-in">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter full name" required />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="tel" maxLength="10" placeholder="e.g. 9876543210" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea rows="2" placeholder="Enter address..." required></textarea>
            </div>
          </div>
        )}

        {section === 'education' && (
          <div className="form-section fade-in">
            <h3>Educational Details</h3>
            <div className="form-group">
              <label>Highest Qualification</label>
              <select required>
                <option value="">-- Select --</option>
                <option value="10th">10th Pass</option>
                <option value="12th">12th Pass</option>
                <option value="graduate">Graduation</option>
              </select>
            </div>
          </div>
        )}

        {section === 'skills' && (
          <div className="form-section fade-in">
            <h3>Skills</h3>
            <div className="checkbox-group">
              <label><input type="checkbox" /> MS-CIT</label>
              <label><input type="checkbox" /> Programming</label>
              <label><input type="checkbox" /> Typing</label>
              <label><input type="checkbox" /> Web Design</label>
              <label><input type="checkbox" /> HTML</label>
              <label><input type="checkbox" /> CSS</label>
              <label><input type="checkbox" /> JavaScript</label>
              <label><input type="checkbox" /> React</label>
              <label><input type="checkbox" /> Node.js</label>
              <label><input type="checkbox" /> Express.js</label>
              <label><input type="checkbox" /> MongoDB</label>
              <label><input type="checkbox" /> SQL</label>
              <label><input type="checkbox" /> Python</label>
              <label><input type="checkbox" /> Java</label>
              <label><input type="checkbox" /> C++</label>
              <label><input type="checkbox" /> C</label>
              <label><input type="checkbox" /> Bootstrap</label>
              <label><input type="checkbox" /> Tailwind CSS</label>
              <label><input type="checkbox" /> TypeScript</label>
              <label><input type="checkbox" /> Git & GitHub</label>
              <label><input type="checkbox" /> Firebase</label>
              <label><input type="checkbox" /> Android Development</label>
              <label><input type="checkbox" /> iOS Development</label>
              <label><input type="checkbox" /> WordPress</label>
              <label><input type="checkbox" /> Web Design (UI/UX)</label>
              <label><input type="checkbox" /> Data Structures</label>
              <label><input type="checkbox" /> Machine Learning</label>
              <label><input type="checkbox" /> Cloud Computing</label>
              <label><input type="checkbox" /> Cyber Security</label>
            </div>
          </div>
        )}

        {section === 'upload' && (
          <div className="form-section fade-in">
            <h3>Upload Documents</h3>
            <div className="form-group">
              <label>Upload Photo</label>
              <input type="file" accept="image/*" />
            </div>
           
          </div>
        )}

<<<<<<< HEAD
          <button type="submit" className="student-submit-btn"><Link to="/homestudent">Register</Link></button>
          <p>
            <Link to="/login" className="student-link">Go to Login Page</Link>
          </p>
        </form>
=======
        {section === 'information' && (
          <div className="form-section fade-in">
            <h3>Additional Information</h3>

            <div className="form-group">
              <label>Career Interests</label>
              <select>
                <option value="">-- Select Career Path --</option>

                <optgroup label="After 10th">
                  <option value="diploma_engineering">Diploma in Engineering</option>
                  <option value="iti_courses">ITI Courses</option>
                  <option value="paramedical">Paramedical Courses</option>
                  <option value="mscit">MS-CIT / Tally</option>
                  <option value="hardware_networking">Computer Hardware & Networking</option>
                  <option value="animation_multimedia">Animation & Multimedia</option>
                  <option value="fashion_design">Fashion Designing</option>
                  <option value="beauty_wellness">Beauty & Wellness</option>
                  <option value="tourism_hospitality">Tourism & Hospitality</option>
                  <option value="mobile_repairing">Mobile Repairing</option>
                  <option value="photography">Photography / Videography</option>
                  <option value="automobile_mechanic">Automobile Mechanic</option>
                  <option value="interior_designing">Interior Designing</option>
                  <option value="graphic_design">Graphic Design</option>
                  <option value="digital_marketing_basic">Digital Marketing (Basics)</option>
                </optgroup>

                <optgroup label="After 12th">
                  <option value="engineering">B.E / B.Tech</option>
                  <option value="bsc">B.Sc (Physics / Chem / Bio / IT)</option>
                  <option value="bcom_bba">B.Com / BBA</option>
                  <option value="ba">B.A. (Arts / Psychology / History)</option>
                  <option value="bca">BCA (Computer Applications)</option>
                  <option value="nursing_pharmacy">Nursing / B.Pharm / BPT</option>
                  <option value="hotel_management">Hotel Management</option>
                  <option value="fashion_designing">Fashion Designing</option>
                  <option value="interior_design">Interior Designing</option>
                  <option value="architecture">Architecture (B.Arch)</option>
                  <option value="law">Law (Integrated Courses)</option>
                  <option value="journalism">Journalism & Mass Comm.</option>
                  <option value="fine_arts">Fine Arts</option>
                  <option value="nda_defense">Defense (NDA, Navy)</option>
                  <option value="air_hostess">Air Hostess / Cabin Crew</option>
                  <option value="event_management">Event Management</option>
                  <option value="animation_vfx">Animation & VFX</option>
                  <option value="photo_cinema">Photography / Cinematography</option>
                  <option value="digital_marketing">Digital Marketing</option>
                  <option value="languages">Foreign Languages / Translation</option>
                </optgroup>

                <optgroup label="After Graduation">
                  <option value="mba">MBA / PGDM</option>
                  <option value="mca_mtech">MCA / M.Tech / M.Sc.</option>
                  <option value="civil_services">Civil Services (UPSC, MPSC)</option>
                  <option value="banking">Banking Exams (IBPS, SBI PO)</option>
                  <option value="ssc_railway">SSC, Railway, Govt Jobs</option>
                  <option value="teaching">Teaching (B.Ed, CTET)</option>
                  <option value="ca">Chartered Accountant (CA)</option>
                  <option value="cs">Company Secretary (CS)</option>
                  <option value="data_science">Data Science / Analytics</option>
                  <option value="software_dev">Software Development</option>
                  <option value="app_dev">App Development</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="ai_ml">AI / Machine Learning</option>
                  <option value="digital_marketing_adv">Digital Marketing (Advanced)</option>
                  <option value="startup">Entrepreneurship / Startups</option>
                  <option value="freelancing">Freelancing</option>
                  <option value="web_uiux">Web & UI/UX Design</option>
                  <option value="graphic_designing">Graphic Design</option>
                  <option value="ngo">NGO / Social Work</option>
                  <option value="study_abroad">Study Abroad (IELTS / GRE)</option>
                </optgroup>
              </select>
            </div>


            <div className="form-group">
              <label>Short Description / About You</label>
              <textarea rows="4" placeholder="Tell us about your goals, passions or career interests..."></textarea>
            </div>

            <div className="form-group">
              <label>Preferred Job Location</label>
              <input type="text" placeholder="e.g. Pune, Mumbai, Remote" />
            </div>
             <div className="form-group" style={{ marginTop: '2rem' }}>
  <button className="submit-btn">
    Submit & Go to Login
  </button>
</div>
 {/* Shared Navigation Buttons */}
      <div className="btn-group">
        {currentIndex > 0 && (
          <button className="nav-btn" onClick={goPrevious}>Previous</button>
        )}
        {currentIndex < sections.length - 1 && (
          <button className="nav-btn" onClick={goNext}>Next</button>
        )}
>>>>>>> a500392 (Updated code)
      </div>

            
          </div>
        )}
      </section>
    </div>
  );
};
