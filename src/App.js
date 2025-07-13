
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SamplePage } from './SamplePage';
import { SampleAbout } from './SampleAbout';
import { SampleContact } from './SampleContact';
import { Login } from './Login';
import { SignUpStudent } from './SignUpStudent';
// import { SignUp } from './SignUpStudent';
import { StudentForm } from './StudentForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SamplePage />} />
      <Route path="/about" element={<SampleAbout />} />
      <Route path="/contact" element={<SampleContact />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/studentsignup" element={<SignUpStudent/>}/>
      <Route path="/studentform" element={<StudentForm/>}/>
    </Routes>
  );
}

export default App;
