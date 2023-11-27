import React, { useState } from 'react';
import './Events.css';

const EventCardForm = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
    };

    onAddEvent(newEvent);

    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <div className="event-form">
      <article className='create-event'>
      <h3>Create Event</h3>
      
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label>
          Event Date:
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </label>
        <label>
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
      </article>
    </div>
  );
};

export default EventCardForm;
