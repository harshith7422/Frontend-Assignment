// src/utils/ticketUtils.js
export const groupTickets = (tickets, users, grouping) => {
    switch (grouping) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets, users);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return groupByStatus(tickets);
    }
  };
  
  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const status = ticket.status;
      if (!acc[status]) acc[status] = [];
      acc[status].push(ticket);
      return acc;
    }, {});
  };
  
  const groupByUser = (tickets, users) => {
    return tickets.reduce((acc, ticket) => {
      const user = users.find(u => u.id === ticket.userId);
      const userName = user ? user.name : 'Unassigned';
      if (!acc[userName]) acc[userName] = [];
      acc[userName].push(ticket);
      return acc;
    }, {});
  };
  
  const groupByPriority = (tickets) => {
    const priorityLabels = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No Priority'
    };
  
    return tickets.reduce((acc, ticket) => {
      const priority = priorityLabels[ticket.priority];
      if (!acc[priority]) acc[priority] = [];
      acc[priority].push(ticket);
      return acc;
    }, {});
  };
  
  export const sortTickets = (groupedTickets, sorting) => {
    const sortedGroups = {};
    
    Object.keys(groupedTickets).forEach(key => {
      sortedGroups[key] = [...groupedTickets[key]].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    
    return sortedGroups;
  };