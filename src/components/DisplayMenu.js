// src/components/DisplayMenu.js
import React, { useState } from 'react';

const DisplayMenu = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
        Display
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-item">
            <span>Grouping</span>
            <select 
              value={grouping} 
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-item">
            <span>Ordering</span>
            <select 
              value={sorting} 
              onChange={(e) => onSortingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;