import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">🎯 Student Activity Portal</h2>
      <div className="nav-links">
        <Link to="/admin">Admin</Link>
        <Link to="/student">Student</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
