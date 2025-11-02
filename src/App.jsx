import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Profile from "./pages/Profile";

import "./index.css";


const App = () => {
  return (
    <Router>
      <nav
        style={{
          background: "linear-gradient(90deg, #05161bff, #05434dff)",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10, 
        }}
      >
        <h2 style={{
    margin: 0,
    backgroundColor: "black", // black background
    color: "white", // white text
    padding: "8px 16px",
    borderRadius: "10px",
    fontWeight: "600",
    letterSpacing: "1px",
  }}
>
  🌟 Student Activity Portal 
  </h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>Admin</Link>
          <Link to="/student" style={{ color: "white", textDecoration: "none" }}>Student</Link>
          <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;




