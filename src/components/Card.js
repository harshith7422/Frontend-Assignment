// src/components/Card.js
import React from 'react';

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return '🔴'; // Urgent
    case 3:
      return '🟡'; // High
    case 2:
      return '🟠'; // Medium
    case 1:
      return '🔵'; // Low
    case 0:
    default:
      return '⚪'; // No priority
  }
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return 'Urgent';
    case 3:
      return 'High';
    case 2:
      return 'Medium';
    case 1:
      return 'Low';
    case 0:
    default:
      return 'No priority';
  }
};

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="profile-pic">
          {/* Add profile picture here */}
        </div>
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-footer">
        <div className="priority-tag">
          <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
          <span className="priority-label">{getPriorityLabel(ticket.priority)}</span>
        </div>
        <div className="feature-tag">
          <span>Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
