import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "./edit.css"

const Edit = () => {
    // const [name,setName] = useState("");
    const navigate = useNavigate();
    const { name } = useParams();
    const [event, setEvent] = useState({
        name: "",
        venue: "",
        description: "",
        date: "",
        isLateNight: "",
        budget: "",
        duration: "",
        clubName: "",
        speakerList: "",
        sponsorList: "",
        remarks: ""
    });

    useEffect(() => {
        // Fetch event data when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/events/getByName/${name}`
                );
                setEvent(response.data); // Set the event data when the request is successful
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        };

        fetchData();
    }, [name]);

    // console.log(event);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/api/events/update/', event)
            .then((res) => {
                alert("Successfully updated event");
                navigate("/student", { replace: true });
            })
            .catch((error) => {
                console.error("Error:", error.response.data.message);
                // Handle error, perhaps set some error state
            });
    }

    return (
        <div className={"profile    "}>
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
                    <label htmlFor="venue">Venue:</label>
                    <select
                        name="venue"
                        value={event.venue}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Auditorium" id="Auditorium" name="Auditorium">Auditorium</option>
                        <option value="CRC" id="CRC" name="CRC">CRC</option>
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
                        value={event.date.substring(0, 10)}
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
                        required
                    >
                        <option value="">Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
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
                        required
                    >
                        <option value="">Select</option>
                        <option value="Axis">Axis</option>
                        <option value="E-Cell">E-Cell</option>
                        <option value="ACM">ACM</option>
                        <option value="IV-Labs">IV-Labs</option>
                        <option value="Halla Bol">Halla Bol</option>
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

                <div>
                    <label>Remarks:</label>
                    <textarea
                        name="remarks"
                        value={event.remarks}
                        onChange={handleChange}
                    ></textarea>
                </div>


                <button type="submit">Update Event</button>
            </form>
        </div>
    );

};

export default Edit;


// const Edit = () => {
//     return <h1>Edit</h1>;
// }

// export default Edit;