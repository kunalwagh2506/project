import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SamplePage } from './SamplePage';
import { SampleAbout } from './SampleAbout';
import { SampleContact } from './SampleContact';
import { Login } from './Login';
<<<<<<< HEAD
import { SignUpStudent } from './SignUpStudent';
import { StudentForm } from './StudentForm';
import { HomeStudent } from './HomeStudent';
import { Lecture } from './Lecture';
import { Information } from './Information';
import { Industry } from './Industry';
import { Profile } from './Profile';
=======
import { SeekerSignUp } from './SeekerSignUp';
import { StudentForm } from './StudentForm';
import HelpCenter from './HelpCenter';
import Guides from './Guides';
import FAQs from './FAQs';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import HelpDetails from './HelpDetails';
import GuideDetails from './GuideDetails';
import { SignUpRecruiter } from './SignUpRecruiter';
import {HomeStudent} from './HomeStudent';
import { RecruiterDashboard } from './RecruiterDashboard';
import { Recruiterform } from './Recruiterfrom';
import { Industry } from './Industry';
import { Information } from './Information';
import { Lecture } from './Lecture';
import { Profile } from './Profile';

import Home from './Home';
>>>>>>> a500392 (Updated code)

function App() {
  const [recruiterData, setRecruiterData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('role');
    setIsLoggedIn(loggedInStatus);
    setRole(userRole || '');
  }, []);

  const PrivateRoute = ({ children, allowedRole }) => {
    if (!isLoggedIn) return <Navigate to="/login" />;
    if (allowedRole && role !== allowedRole) return <Navigate to="/" />;
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<SamplePage />} />
      <Route path="/about" element={<SampleAbout />} />
      <Route path="/contact" element={<SampleContact />} />
<<<<<<< HEAD
      <Route path="/login" element={<Login />} />
      <Route path="/studentsignup" element={<SignUpStudent />} />
      <Route path="/studentform" element={<StudentForm />} />
      <Route path="/homestudent" element={<HomeStudent />} />
      <Route path="/lecture" element={<Lecture />} />
      <Route path="/information" element={<Information />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/profile" element={<Profile />} />
=======
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/seekersignup" element={<SeekerSignUp />} />
      <Route path="/studentform" element={<StudentForm />} />
      <Route path="/SignUpRecruiter" element={<SignUpRecruiter />} />
     <Route path="/recruiterfrom" element={<Recruiterform setRecruiterData={setRecruiterData} />} />
    <Route path="/homestudent" element={<HomeStudent/>}/>
      <Route
        path="/recruiterdashboard"
        element={
          <PrivateRoute allowedRole="recruiter">
            <RecruiterDashboard recruiterData={recruiterData} />
          </PrivateRoute>
        }
      />

      <Route path="/helpcenter" element={<HelpCenter />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/helpdetails/:id" element={<HelpDetails />} />
      <Route path="/guidedetails/:id" element={<GuideDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path="/information" element={<Information/>}/>
      <Route path="/industry" element={<Industry/>}/>
      <Route path="/lecture" element={<Lecture/>}/>
      <Route path="/profile" element={<Profile/>}/>
>>>>>>> a500392 (Updated code)
    </Routes>
  );
}

export default App;
