import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './studentapp.css';
import { Link, useNavigate } from 'react-router-dom';
import "./singleReq.css"

const StudentRequestsTable = () => {
    const navigate = useNavigate();
    const handleClick = (request) => {
        navigate(`/singlereq/${request.name}`);
    }

    const [approvalRequests, setApprovalRequests] = useState([]);

    const getRequestData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/events');
            setApprovalRequests(response.data);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getRequestData();
    }, []);

    return (
        <div>
            <h1 className="dashboard-heading">Student DashBoard</h1>

            <button className="action-button create-request-button">
                <Link to={"/newevent"}>
                    Create New Event Approval Request
                </Link>
            </button>

            <div className="approval-requests-container">
                {/* Pending requests section */}
                <div className="approval-requests-table">
                    <h2 className="table-heading">Approval Requests</h2>
                    <table className="approval-table">
                        <thead>
                            <tr>
                                <th className="table-header">Name</th>
                                <th className="table-header">Description</th>
                                <th className="table-header">Date</th>
                                <th className="table-header">Duration</th>
                                <th className="table-header">Venue</th>
                                <th className="table-header">Is Late Night</th>
                                <th className="table-header">Budget</th>
                                <th className="table-header">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvalRequests.map(request => {

                                let x = 0;
                                let y = request.numberOfPermissions;

                                let den;
                                if(y === 3) den = 3;
                                else if(y === 4) den = 4;
                                else if(y === 5) den = 4;
                                else if(y === 6) den = 5;
                                else if(y === 7) den = 5;

                                if (request.isApproved1) x++;
                                if (request.isApproved2) x++;
                                if (request.isApproved3) x++;
                                if (request.isApproved4) x++;
                                if (request.isApproved5) x++;
                                
                                console.log(x, y);
                                return (
                                <tr key={request.id} className="table-row">
                                    <td className="table-cell name-underline" onClick={()=>navigate(`/eventpage/${request.name}`)}>{request.name}</td>
                                    <td className="table-cell">{request.description}</td>
                                    <td className="table-cell">{(request.date).substring(0, 10)}</td>
                                    <td className="table-cell">{request.duration}</td>
                                    <td className="table-cell">{request.venue}</td>
                                    <td className="table-cell">{request.isLateNight ? 'Yes' : 'No'}</td>
                                    <td className="table-cell">₹{request.budget}</td>
                                    <td className="table-cell">
                                        {/* <button className="action-button approve-button" onClick={() => handleApprove(request.name)}>Approve</button>
                                        <button className="action-button reject-button" onClick={() => handleReject(request.name)}>Reject</button> */}



                                        {/* {(x < y) && (
                                            <button className="action-button approve-button-blue" onClick={() => handleClick(request)}>{`Pending +( ${x / den})`}</button>
                                        )} */}
                                        {/* {(x === den) && ( */}
                                            <button className="action-button approve-button-green" onClick={() => handleClick(request)}>{`View (${x}/${den})`}</button>
                                        {/* )} */}
                                        
                                        {/* {!request.isPending && !request.isApproved && (
                                            <button className="action-button approve-button-red" onClick={() => handleClick(request)}>{`Rejected ( ${x / den})`}</button>
                                        )} */}


                                    </td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Non-pending requests section */}
                {/* <div className="approval-requests-table">
                <h2 className="table-heading">Requests Not Pending</h2>
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
                        {approvalRequests.map(request => (
                            !request.isPending && (
                                <tr key={request.id} className="table-row">
                                    <td className="table-cell">{request.description}</td>
                                    <td className="table-cell">{request.name}</td>
                                    <td className="table-cell">{request.time}</td>
                                    <td className="table-cell">{request.venue}</td>
                                    <td className="table-cell">{request.date}</td>
                                    <td className="table-cell"> */}

                {/* <button className="action-button approve-button" onClick={() => handleApprove(request.id)}>Approve</button>
                                        <button className="action-button reject-button" onClick={() => handleReject(request.id)}>Reject</button> */}
                {/* </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div> */}
            </div>

        </div>
    );
};

export default StudentRequestsTable;
