import React, { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

export default function DashboardHome() {
  const { attendees, clubs } = useContext(EventContext);
  const approvedClubs = clubs.filter(c => c.status === 'Approved').length;

  return (
    <div>
      <h1>Club Day Dashboard</h1>
      <div>
        <h3>Total Registered Visitors: {attendees.length}</h3>
        <h3>Active Club Booths: {approvedClubs}</h3>
      </div>
    </div>
  );
}


