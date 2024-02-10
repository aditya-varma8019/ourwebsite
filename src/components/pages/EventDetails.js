import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDetails.css'; // Import CSS file
const EventDetails = () => {
    const { name } = useParams(); // Get the parameter from the URL
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState(null);
    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/getByName/${name}`);
                setEventDetails(response.data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
    }, [name]);

    return (
        <div className="event-details-container">
            <div className="event-details-card">
                {eventDetails ? (
                    <div>
                        <h2 className="event-details-title">{eventDetails.name}</h2>
                        <div className="event-details-info">
                            <p><span>Description:</span> {eventDetails.description}</p>
                            <p><span>Date:</span> {(eventDetails.date).substring(0, 10)}</p>
                            <p><span>Duration:</span> {eventDetails.duration}</p>
                            <p><span>Venue:</span> {eventDetails.venue}</p>
                            <p><span>Is Late Night:</span> {eventDetails.isLateNight ? 'Yes' : 'No'}</p>
                            <p><span>Budget:</span> ₹{eventDetails.budget}</p>
                            <p><span>Club Name:</span> {eventDetails.clubName}</p>
                            <p><span>Speaker List:</span> {eventDetails.speakerList}</p>
                            <p><span>Sponsor List:</span> {eventDetails.sponsorList}</p>

                            <p><span>Remarks: </span>{eventDetails.remarks === "" ? 'No Remark' : eventDetails.remarks}</p>

                        </div>
                    </div>
                ) : (
                    <p className="loading-message">Loading event details...</p>
                )}
                {eventDetails && eventDetails.isPending1 ? (<button onClick={()=>navigate

                (`/edit/${eventDetails.name}`)}>edit</button>):(<p>Already Processed</p>)}
            </div>
        </div>
    );
};

export default EventDetails;
