import React, { useEffect, useState } from "react";
import "./singleReq.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleRequest = () => {
  const { name } = useParams();
  const [event, setEvent] = useState(null); // State to hold the event data
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    // Fetch event data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/events/getByName/${name}`
        );
        setEvent(response.data); // Set the event data when the request is successful
        console.log(approvals);

      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchData(); // Call the async function
  }, [name, approvals]); // Make sure to re-fetch when the name parameter changes

  // Move the setter function outside of useEffect
useEffect(() => {
  const setter = () => {
    if (event && event.numberOfPermissions) {
      if (event.numberOfPermissions === 3) {
        setApprovals([1, 2, 3]);
      } else if (event.numberOfPermissions === 4) {
        setApprovals([1, 2, 3, 5]);
      } else if (event.numberOfPermissions === 5) {
        setApprovals([1, 2, 3, 6]);
      } else if (event.numberOfPermissions === 6) {
        setApprovals([1, 2, 3, 4, 5]);
      } else if (event.numberOfPermissions === 7) {
        setApprovals([1, 2, 3, 4, 6]);
      }
    }
  };

  setter(); // Call the setter function when event changes
}, [event]);

  return (
    <>
      {event && (
        <div className="single-request-container">
          <p className="approval-status">
            Faculty Incharge{" "}
            {event.isApproved1 ? (
              <span className="checkmark">✔️</span>
            ) : (
              <span className="cross">❌</span>
            )}
          </p>
          <p className="approval-status">
            Associate Dean{" "}
            {event.isApproved2 ? (
              <span className="checkmark">✔️</span>
            ) : (
              <span className="cross">❌</span>
            )}
          </p>
          <p className="approval-status">
            Dean{" "}
            {event.isApproved3 ? (
              <span className="checkmark">✔️</span>
            ) : (
              <span className="cross">❌</span>
            )}
          </p>

          {approvals.includes(5) && (
            <p className="approval-status">
              CRC{" "}
              {event.isApproved5 ? (
                <span className="checkmark">✔️</span>
              ) : (
                <span className="cross">❌</span>
              )}
            </p>
          )}
          {approvals.includes(6) && (
            <p className="approval-status">
              Audi{" "}
              {event.isApproved6 ? (
                <span className="checkmark">✔️</span>
              ) : (
                <span className="cross">❌</span>
              )}
            </p>
          )}
          {approvals.includes(4) && (
            <div className="security-crc-container">
              <p>
                Security{" "}
                {event.isApproved4 ? (
                  <span className="checkmark">✔️</span>
                ) : (
                  <span className="cross">❌</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SingleRequest;
