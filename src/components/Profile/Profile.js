import React, { useState } from "react";
import profilestyle from "./Profile.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    description: "",
    date: "",
    isLateNight: "",
    budget: "",
    duration: "",
    clubName : "",
    speakerList: "",
    sponsorList: "",
    remarks : ""
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
    axios
      .post("http://localhost:5000/api/events/create", {
        name: event.name,
        venue: event.venue,
        description: event.description,
        date: event.date,
        isLateNight: event.isLateNight,
        budget: event.budget,
        duration: event.duration,
        clubName : event.clubName,
        speakerList : event.speakerList,
        sponsorList : event.sponsorList,
      })
      .then((res) => {
        // console.log(res);
        alert("Successfully created event");
        navigate("/student", { replace: true });
      })
      .catch((error) => {
        if(error.response.data.message === "Venue already booked for this date") {
          alert("Venue already booked for this date");
        }
        else 
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
          <select
            name="venue"
            value={event.venue}
            onChange={handleChange}
            required>
            <option value="">Select</option>
            <option value="Auditorium">Auditorium</option>
            <option value="CRC">CRC</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            required></textarea>
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
        <div>
          <label>Is Event Late Night:</label>
          <select
            name="isLateNight"
            value={event.isLateNight}
            onChange={handleChange}
            required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label>Budget:</label>
          <input
            type="number"
            name="budget"
            value={event.budget}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={event.duration}
            onChange={handleChange}
            required
          />


        </div>
        <div>
          <label>Club Name:</label>
          <select
            name="clubName"
            value={event.clubName}
            onChange={handleChange}
            required>
            <option value="">Select</option>
            <option value="Axis">Axis</option>
            <option value="E-Cell">E-Cell</option>
            <option value="ACM">ACM</option>
            <option value="IV-Labs">IV-Labs</option>
            <option value="HallaBol">HallaBol</option>
          </select>

        </div>

         <div>
          <label>Speaker List:</label>
          <textarea
            name="speakerList"
            value={event.speakerList}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Sponsor List:</label>
          <textarea
            name="sponsorList"
            value={event.sponsorList}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
