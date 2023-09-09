// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get('http://localhost:4000/tours/');
      setTours(response.data.data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };
  


  
  const handleDeleteTour = async (tourId) => {
    try {
      // Send a DELETE request to remove the tour with the specified ID
      await axios.delete(`http://localhost:4000/tours/${tourId}`);
      // Update the tours list by removing the deleted tour
      setTours((prevTours) => prevTours.filter((tour) => tour._id !== tourId));
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };
  
 
  return (
    
    
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <nav className="dashboard-nav">
        {/* Wrap "User" and "Users" links in a div */}
        <div className="nav-box">
          <Link to="/dashboard/all-tours">All Tours</Link>
          <Link to="/dashboard/users">Users</Link>
        </div>
      </nav>
      <div className="table-container"> {/* Wrap the table in a container */}
        <h2>Tour Packages</h2>
        <table className="tour-table"> {/* Apply the tour-table class here */}
          <thead>
            <tr>
            <th>Photo</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>City</th>
              <th>Address</th>
             
              <th>Actions</th> {/* Add a new column for actions */}
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                 <td>
                  <img src={tour.photo} alt={`Image for ${tour.title}`} width="100" height="100" />
                </td>
                <td>{tour.title}</td>
                <td>${tour.price}</td>
                <td>{tour.desc}</td>
                <td>{tour.city}</td>
                <td>{tour.address}</td>
               
                <td>
                  <button onClick={() => handleDeleteTour(tour._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;