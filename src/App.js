// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import DisplayMenu from './components/DisplayMenu';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (value) => {
    setGrouping(value);
    localStorage.setItem('grouping', value);
  };

  const handleSortingChange = (value) => {
    setSorting(value);
    localStorage.setItem('sorting', value);
  };

  return (
    <div className="app">
      <DisplayMenu 
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <KanbanBoard 
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;
