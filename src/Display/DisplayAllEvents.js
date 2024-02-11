import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventSummaryDisplay from './EventSummaryDisplay';
import styles from './display.css'; // Import CSS module

function DisplayAllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/upload/all');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>All Events</h1>
      {events.map(event => (
        <EventSummaryDisplay
          key={event._id}
          eventName={event.eventName}
          eventDate={event.eventDate}
          eventLocation={event.eventLocation}
          eventSummary={event.eventSummary}
          selectedPhotos={event.images}
        />
      ))}
    </div>
  );
}

export default DisplayAllEvents;
