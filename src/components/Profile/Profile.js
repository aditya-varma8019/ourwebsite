import React, { useState } from "react";
import profilestyle from "./Profile.module.css";
import axios from "axios";

const EventForm = () => {
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    description: "",
    time: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, you can send 'event' to backend or perform any other action
    axios.post("http://localhost:5000/api/events/create", {
          name: event.name,
          venue: event.venue,
          description: event.description,
          time: event.time,
          date: event.date,
        })
        .then((res) => {
          alert("Successfully created event");
          // navigate("/login", { replace: true });
        })
        .catch((error) => {
          console.error("Error:", error.response.data.message);
          // Handle error, perhaps set some error state
        });
  };

  return (
    <div className={profilestyle.profile}>
      <h1 style={{ color: "black" }}>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={event.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={event.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
