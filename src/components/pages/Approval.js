import React, { useEffect, useState } from 'react';
import './approval.css';

const ApprovalRequestsTable = () => {
    // Sample data for approval requests
    const [approvalRequests, setApprovalRequests] = useState([

        // Add more approval requests as needed
    ]);

    //   const [requestsData, setRequestData] = useState([]);

    const getRequestData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/events');
            const data = await response.json();
            setApprovalRequests(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getRequestData();
    }, [])

    // Function to handle approval
    const handleApprove = async (name) => {
        try {
            // Make an HTTP request to update the database
            const response = await fetch("http://localhost:5000/api/events/toapprove", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any authorization headers if required
                },
                body: JSON.stringify({ name: name }),
            });

            if (!response.ok) {
                throw new Error('Failed to update approval status');
            }

            // If the request is successful, update the UI or fetch updated data
            // For example, you can remove the approved request from the local state
            // or fetch the updated list of approval requests.
            getRequestData();
            console.log(`Request with ID ${name} approved`);
        } catch (error) {
            console.error('Error approving request:', error.message);
        }
    };



    // Function to handle rejection
    const handleReject = async (name) => {
        try {
            // Make an HTTP request to update the database
            const response = await fetch("http://localhost:5000/api/events/toreject", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any authorization headers if required
                },
                body: JSON.stringify({ name: name }),
            });

            if (!response.ok) {
                throw new Error('Failed to update approval status');
            }

            // If the request is successful, update the UI or fetch updated data
            // For example, you can remove the rejected request from the local state
            // or fetch the updated list of approval requests.
            getRequestData();
            console.log(`Request with ID ${name} rejected`);
        } catch (error) {
            console.error('Error rejecting request:', error.message);
        }
    };

    return (
        <div className="approval-requests-table">
            <h2 className="table-heading">Approval Requests</h2>
            <table className="approval-table">
                <thead>
                    <tr>
                        <th className="table-header">Description</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Time</th>
                        <th className="table-header">Venue</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {approvalRequests.map((request) => (
                        request.isPending && (
                            <tr key={request.id} className="table-row">
                                <td className="table-cell">{request.description}</td>
                                <td className="table-cell">{request.name}</td>
                                <td className="table-cell">{request.time}</td>
                                <td className="table-cell">{request.venue}</td>
                                <td className="table-cell">{request.date}</td>
                                <td className="table-cell">
                                    <button className="action-button approve-button" onClick={() => handleApprove(request.name)}>Approve</button>
                                    <button className="action-button reject-button" onClick={() => handleReject(request.name)}>Reject</button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovalRequestsTable;
