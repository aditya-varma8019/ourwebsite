import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './EventSummary.module.css'; // Import CSS 
import axios from 'axios';

function EventSummaryForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventSummary, setEventSummary] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const navigate = useNavigate();

  const handlePhotoChange = (event) => {
    setSelectedPhotos(Array.from(event.target.files));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const uploadPromises = selectedPhotos.map(async (file) => {
        const formData = new FormData();
        formData.append('upload_preset', 'eventimage');
        formData.append('file', file);
  
        const response = await fetch('https://api.cloudinary.com/v1_1/dv7atj27o/image/upload', { method: 'POST', body: formData });
        const data = await response.json();
        console.log(data.url);
        return data.url;
      });
  
      const imageUrls = await Promise.all(uploadPromises);
  
      await axios.post('http://localhost:5000/api/upload/create', {
        eventName,
        eventDate,
        eventLocation,
        eventSummary,
        images: imageUrls
      });
  
      alert(`Event added successfully!`);
  
      // Reset form fields after submission
      setEventName('');
      setEventDate('');
      setEventLocation('');
      setEventSummary('');
      setSelectedPhotos([]);
  
      navigate('/display-summary');
    } catch (error) {
      console.error('Error submitting event:', error);
      // Handle error accordingly, e.g., display an error message to the user
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2>Event Summary Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </div>
        <div>
          <label>Event Date:</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
        </div>
        <div>
          <label>Event Location:</label>
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required />
        </div>
        <div>
          <label>Event Summary:</label>
          <textarea value={eventSummary} onChange={(e) => setEventSummary(e.target.value)} required />
        </div>
        <div>
          <label>Choose Photos:</label>
          <input type="file" accept="image/*" multiple onChange={handlePhotoChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventSummaryForm;
