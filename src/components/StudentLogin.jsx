// src/pages/StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardStyles.css";

const StudentLogin = () => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (regNo === "2200034567" && password === "student123") {
      navigate("/student");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card student-theme">
        <h2>🎓 Student Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Register Number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
