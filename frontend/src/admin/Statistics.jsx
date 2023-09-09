import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Statistics.css'; // Import the CSS file

const Statistics = () => {
    const [tourCount, setTourCount] = useState(null);
    const [userCount, setUserCount] = useState(null);
    const [bookingCount, setBookingCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an API request to fetch the tour count from your backend
        axios.get('http://localhost:4000/api/v1/tours/search/getTourCount')
            .then(response => {
                setTourCount(response.data.data);
            })
            .catch(error => {
                console.error('Failed to fetch tour count:', error);
            });

        // Make an API request to fetch the user count from your backend
        axios.get('http://localhost:4000/api/v1/users/search/getUserCount')
            .then(response => {
                setUserCount(response.data.data);
            })
            .catch(error => {
                console.error('Failed to fetch user count:', error);
            });

        // Make an API request to fetch the booking count from your backend
        axios.get('http://localhost:4000/api/v1/booking/search/getBookingCount')
            .then(response => {
                setBookingCount(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch booking count:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="statistics-container">
         
            <div className="count-circle">
                <h2><p>Total Tours</p></h2>
                <div className="circle">{tourCount}</div>
            </div>
            <div className="count-circle">
                <h2><p>Total Users</p></h2>
                <div className="circle">{userCount}</div>
            </div>
            <div className="count-circle">
                <h2><p>Total Bookings</p></h2>
                <div className="circle">{bookingCount}</div>
            </div>
            {/* You can add more statistics here */}
        </div>
    );
}

export default Statistics;
