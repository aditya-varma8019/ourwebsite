import React from 'react';
import styles from './display.css'; // Import CSS module

function EventSummaryDisplay({ eventName, eventDate, eventLocation, eventSummary, selectedPhotos }) {
  return (
    <div className={styles['summary-container']}>
      <h2>Event Summary</h2>
      <div className={styles['summary-item']}>
        <strong>Event Name:</strong> {eventName}
      </div>
      <div className={styles['summary-item']}>
        <strong>Event Date:</strong> {eventDate}
      </div>
      <div className={styles['summary-item']}>
        <strong>Event Location:</strong> {eventLocation}
      </div>
      <div className={styles['summary-item']}>
        <strong>Event Summary:</strong> {eventSummary}
      </div>
      <div className={styles['summary-item']}>
        <strong>Selected Photos:</strong> 
        {selectedPhotos.map((photoUrl, index) => (
          <img key={index} src={photoUrl} alt={`Photo ${index}`} className={styles['photo']} />
        ))}

      </div>
    </div>
  );
}

export default EventSummaryDisplay;
