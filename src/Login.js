import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export const Login = ({ setIsLoggedIn }) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [
    { userid: "1234", password: "4321", role: "recruiter" },
    { userid: "4321", password: "1234", role: "seeker" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.userid === userid && u.password === password);
    if (user) {
      alert("Login Successful!");
      setIsLoggedIn(true); // set login status
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", user.role);
      if (user.role === "recruiter") {
        navigate("/HomeStudent");
      } else {
        navigate("/seekerdashboard");
      }
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="Bbody">
      <div className="login-card swipe-in">
        <div className="top-right-links">
          <Link to="/SignUpRecruiter" className="top-btn">Recruiter</Link>
          <Link to="/SeekerSignup" className="top-btn">Seeker</Link>
        </div>

        <div className="left-half">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userid">User ID</label>
            <input type="text" id="userid" value={userid} onChange={(e) => setUserid(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>

        <div className="right-half">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
