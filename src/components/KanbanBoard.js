// src/components/KanbanBoard.js
import { useMemo } from 'react';
import Column from './Column';
import { groupTickets, sortTickets } from '../utils/ticketUtils';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const groupedAndSortedTickets = useMemo(() => {
    const grouped = groupTickets(tickets, users, grouping);
    return sortTickets(grouped, sorting);
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([key, tickets]) => (
        <Column key={key} title={key} tickets={tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;