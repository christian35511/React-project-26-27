import React from 'react';

function EventSchedule() {
  const slots = [
    { time: '09:00 AM', event: 'Opening Ceremony & Keynote' },
    { time: '10:00 AM', event: 'Live Robotics Demonstration' },
    { time: '11:30 AM', event: 'Coding Hackathon Presentations' }
  ];

  return (
    <div>
      <h2>Event Schedule</h2>
      <table>
        <thead>
          <tr><th>Time</th><th>Activity</th></tr>
        </thead>
        <tbody>
          {slots.map((slot, index) => (
            <tr key={index}>
              <td>{slot.time}</td>
              <td>{slot.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventSchedule;
