import React, { useState, useContext } from 'react';
import { EventContext } from '../../context/EventContext';

function RegisterForm() {
  const { addAttendee } = useContext(EventContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addAttendee({ id: Date.now(), name });
    setName('');
    alert('Registration Successful!');
  };

  return (
    <div>
      <h2>Visitor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Register Table Ticket</button>
      </form>
    </div>
  );
}

export default RegisterForm;
