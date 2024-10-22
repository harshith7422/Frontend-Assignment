// src/components/Column.js
import React from 'react';
import Card from './Card';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;