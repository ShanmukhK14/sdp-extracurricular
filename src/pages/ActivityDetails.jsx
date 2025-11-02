import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ActivityDetails.css';

const ActivityDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  if (!event) {
    return (
      <div className="activity-details">
        <h2>No Event Selected</h2>
        <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
      </div>
    );
  }

  return (
    <div className="activity-details">
      <div className="details-card">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>
        <p className="event-date"><strong>Date:</strong> {event.date}</p>
        <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
      </div>
    </div>
  );
};

export default ActivityDetails;
