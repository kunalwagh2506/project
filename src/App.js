
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SamplePage } from './SamplePage';
import { SampleAbout } from './SampleAbout';
import { SampleContact } from './SampleContact';
import { Login } from './Login';
import { SignUpStudent } from './SignUpStudent';
import { StudentForm } from './StudentForm';
import { HomeStudent } from './HomeStudent';
import { Lecture } from './Lecture';
import { Information } from './Information';
import { Industry } from './Industry';
import { Profile } from './Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SamplePage />} />
      <Route path="/about" element={<SampleAbout />} />
      <Route path="/contact" element={<SampleContact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studentsignup" element={<SignUpStudent />} />
      <Route path="/studentform" element={<StudentForm />} />
      <Route path="/homestudent" element={<HomeStudent />} />
      <Route path="/lecture" element={<Lecture />} />
      <Route path="/information" element={<Information />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
