import React, { useState, useEffect } from "react";
import "./DashboardStyles.css";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(stored);
  }, []);

  const addEvent = () => {
    if (!title || !desc || !date) return alert("Fill all fields!");
    const newEvent = { id: Date.now(), title, desc, date };
    const updated = [...events, newEvent];
    setEvents(updated); 
    localStorage.setItem("events", JSON.stringify(updated));
    setTitle("");
    setDesc("");
    setDate("");
  };

  return (
    <div className="page admin-bg">
      <h1>🛠 Admin Dashboard</h1>
      <div className="form-container">
        <input placeholder="Event Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Event Description" value={desc} onChange={e => setDesc(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={addEvent}>Add Event</button>
      </div>
      <div className="cards-container">
        {events.length === 0 ? <p>No events added yet</p> : events.map(e => (
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

export default AdminDashboard;
