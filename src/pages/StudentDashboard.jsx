import React, { useEffect, useState } from "react";
import "./DashboardStyles.css";

const StudentDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(stored);
  }, []);

  return (
    <div className="page student-bg">
      <h1>🎓 Student Dashboard</h1>
      <div className="cards-container">
        {events.length === 0 ? <p>No events yet.</p> : events.map(e => (
          <div key={e.id} className="card">
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
            <span>{e.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
