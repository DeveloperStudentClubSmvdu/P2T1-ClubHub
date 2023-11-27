import React from 'react';
import './EventCard.css';

const EventCard = ({ props }) => {
        const events = [
          {
            title: 'Saraswati Vandana',
            date: 'December 15, 2023',
            description: 'Enjoy an evening of live music under the stars.',
          },
          {
            title: 'Titiksha TechFest 2K24',
            date: 'May 20, 2024',
            description: 'Unplugged performances by local artists.',
          },
        ];
      
  return (
    <div className="event-card-container">
      <h2>Upcoming Events</h2>
      <hr />
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">Date: {event.date}</p>
          <p className="event-description">{event.description}</p>
        </div>
      ))}
      <button>View All Events</button>
    </div>
  );
};
export default EventCard;
