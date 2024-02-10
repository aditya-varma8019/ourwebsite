import React, { useState } from 'react';

const ApprovalRequestsTable = () => {
  // Sample data for approval requests
  const [approvalRequests, setApprovalRequests] = useState([
    {
      id: 1,
      description: 'Request 1 Description',
      name: 'John Doe',
      time: '10:00 AM',
      venue: 'Meeting Room 1',
      date: '2024-02-10',
    },
    {
      id: 2,
      description: 'Request 2 Description',
      name: 'Jane Smith',
      time: '02:00 PM',
      venue: 'Conference Hall',
      date: '2024-02-12',
    },
    // Add more approval requests as needed
  ]);

  // Function to handle approval
  const handleApprove = (id) => {
    // Logic to approve request with id
    console.log(`Request with ID ${id} approved`);
  };

  // Function to handle rejection
  const handleReject = (id) => {
    // Logic to reject request with id
    console.log(`Request with ID ${id} rejected`);
  };

  return (
    <div>
      <h2>Approval Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Name</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {approvalRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.description}</td>
              <td>{request.name}</td>
              <td>{request.time}</td>
              <td>{request.venue}</td>
              <td>{request.date}</td>
              <td>
                <button onClick={() => handleApprove(request.id)}>Approve</button>
                <button onClick={() => handleReject(request.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalRequestsTable;
