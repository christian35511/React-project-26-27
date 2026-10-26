import React, { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

function ClubList() {
  const { clubs } = useContext(EventContext);

  return (
    <div>
      <h2>Participating Clubs</h2>
      <ul>
        {clubs.map(club => (
          <li key={club.id}>
            <strong>{club.name}</strong> - Location: {club.room} | <em>{club.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;
