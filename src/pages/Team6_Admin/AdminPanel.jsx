import React, { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

function AdminPanel() {
  const { clubs, updateClubStatus } = useContext(EventContext);

  return (
    <div>
      <h2>Head Teacher Panel</h2>
      {clubs.map(club => (
        <div key={club.id} style={{ margin: '10px 0', borderBottom: '1px solid #ccc' }}>
          <p>{club.name} ({club.status})</p>
          {club.status === 'Pending' && (
            <button onClick={() => updateClubStatus(club.id, 'Approved')}>Approve Booth</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
