import React, { useState } from 'react';
import { useEvent } from '../../context/EventContext';

export default function RegisterMain() {
  // Extract your state handlers directly from your context code
  const { clubs, addAttendee } = useEvent();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: '',
    attendanceDay: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const isEmailValid = formData.email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = 
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.club !== '' &&
    formData.attendanceDay !== '' &&
    formData.agree === true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Dispatches the controlled form state directly to your EventContext array
      addAttendee({
        name: formData.name,
        email: formData.email,
        club: formData.club,
        attendanceDay: formData.attendanceDay
      });
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      club: '',
      attendanceDay: '',
      agree: false
    });
    setSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* FORM INTERFACE */}
      <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h2>Club Day Registration</h2>
        
        {submitted && (
          <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
            🎉 <strong>Success!</strong> Registration successfully appended to central Context attendees list.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required 
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderColor: !isEmailValid ? 'red' : '#ccc' }}
              required 
            />
            {!isEmailValid && (
              <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '4px' }}>
                ❌ Please enter a valid email address.
              </span>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select a Club:</label>
            <select 
              name="club" 
              value={formData.club} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px' }}
              required
            >
              <option value="">-- Choose a Club --</option>
              {/* Dynamically loads options directly out of your context club definition map */}
              {clubs.map((club) => (
                <option key={club.id} value={club.name}>
                  {club.name} ({club.room})
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Attendance Day:</label>
            <label style={{ marginRight: '15px' }}>
              <input 
                type="radio" 
                name="attendanceDay" 
                value="Day 1 (Friday)" 
                checked={formData.attendanceDay === 'Day 1 (Friday)'} 
                onChange={handleChange} 
              /> Day 1 (Friday)
            </label>
            <label>
              <input 
                type="radio" 
                name="attendanceDay" 
                value="Day 2 (Saturday)" 
                checked={formData.attendanceDay === 'Day 2 (Saturday)'} 
                onChange={handleChange} 
              /> Day 2 (Saturday)
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                name="agree" 
                checked={formData.agree} 
                onChange={handleChange} 
              /> I agree to follow the code of conduct.
            </label>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              type="submit" 
              disabled={!isFormValid} 
              style={{ 
                padding: '10px 15px', 
                backgroundColor: isFormValid ? '#007bff' : '#cccccc', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: isFormValid ? 'pointer' : 'not-allowed',
                flex: 1
              }}
            >
              Submit Registration
            </button>
            <button 
              type="button" 
              onClick={handleReset} 
              style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div style={{ flex: 1, backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px dashed #007bff', height: 'fit-content' }}>
        <h3 style={{ marginTop: 0, color: '#007bff' }}>🔍 Live Ticket Preview</h3>
        <hr style={{ borderColor: '#e2e2e2' }} />
        <div style={{ marginTop: '15px' }}>
          <p><strong>Visitor Name:</strong> {formData.name || <span style={{ color: 'green', fontStyle: 'italic' }}>Typing...</span>}</p>
          <p><strong>Email:</strong> {formData.email || <span style={{ color: '#aaa', fontStyle: 'italic' }}>Typing...</span>}</p>
          <p><strong>Selected Club:</strong> {formData.club || <span style={{ color: '#aaa', fontStyle: 'italic' }}>None chosen</span>}</p>
          <p><strong>Pass Type:</strong> {formData.attendanceDay || <span style={{ color: '#aaa', fontStyle: 'italic' }}>No day selected</span>}</p>
          <p><strong>Status:</strong> {formData.agree ? '✅ Terms Accepted' : '❌ Pending Agreement'}</p>
        </div>
      </div>

    </div>
  );
}
