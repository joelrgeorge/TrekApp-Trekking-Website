import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/alltours.css';

const AllTours = () => {
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
    <Container className="all-tours-container">
      <h2>All Tours</h2>
      {tours.map((tour) => (
        <div key={tour._id} className="tour-card">
          <img src={tour.photo} alt={tour.title} className="tour-image" />
          <div className="tour-details">
            <div className="tour-info">
              <ul>
              <li><h4>{tour.city}</h4></li>
              <li><h6>{tour.title}</h6></li>
              <li><h6>{tour.address}</h6></li>
              </ul>
            </div>
            <div className="tour-price">
              <ul>
             <li> <h6>${tour.price} /per person</h6></li>
             </ul>
            </div>
           
            <div className="tour-description">
              <p>{tour.description}</p>
            </div>
          </div>
          <div className="delete-button">
            <button onClick={() => handleDeleteTour(tour._id)}>Delete</button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AllTours;
