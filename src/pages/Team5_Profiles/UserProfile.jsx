import React, { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

function UserProfile() {
  const { attendees } = useContext(EventContext);
  const latestUser = attendees[attendees.length - 1];

  return (
    <div>
      <h2>Your Badge Details</h2>
      {latestUser ? (
        <div>
          <p><strong>Name:</strong> {latestUser.name}</p>
          <p><strong>Role:</strong> Registered Visitor</p>
          <p><strong>Pass ID:</strong> #{latestUser.id}</p>
        </div>
      ) : (
        <p>No registration detected. Go to the Register tab to create your visitor profile.</p>
      )}
    </div>
  );
}

export default UserProfile;
