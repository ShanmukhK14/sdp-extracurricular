import React from "react";
import "./DashboardStyles.css";

const Profile = () => {
  return (
    <div className="page profile-bg">
      <h1>👤 Profile</h1>
      <div className="card">
        <p><strong>Name:</strong> Shannu</p>
        <p><strong>Department:</strong> CSE</p>
        <p><strong>Year:</strong> 2nd Year</p>
        <p><strong>University:</strong> KL University</p>
      </div>
    </div>
  );
};

export default Profile;
