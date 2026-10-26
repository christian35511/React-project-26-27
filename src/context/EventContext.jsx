import React, { createContext, useState, useContext } from 'react';


export const EventContext = createContext();

export function EventProvider({ children }) {
  
  const [attendees, setAttendees] = useState([]);
  
 
  const [clubs, setClubs] = useState([
    { id: 1, name: 'React framework', room: 'Lab 1', status: 'Approved' },
    { id: 2, name: 'Machine Learnig', room: 'Lab 2', status: 'Pending' },
    { id: 3, name: 'Graphic & Design', room: 'Lab 3', status: 'Approved' }
  ]);


  const addAttendee = (student) => {
    setAttendees([...attendees, student]);
  };

  
  const updateClubStatus = (id, newStatus) => {
    setClubs(clubs.map(club => club.id === id ? { ...club, status: newStatus } : club));
  };

  return (
    <EventContext.Provider value={{ attendees, clubs, addAttendee, updateClubStatus }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
}
