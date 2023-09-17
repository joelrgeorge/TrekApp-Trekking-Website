import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import * as XLSX from "xlsx";
import "../styles/booking.css";

const Bookingss = () => {
  const [bookings, setBookings] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bookingResponse = await axios.get(`http://localhost:4000/api/v1/booking/`);
      setBookings(bookingResponse.data.data);

      // Fetch tour data
      const tourResponse = await axios.get(`http://localhost:4000/api/v1/tours`);
      setTours(tourResponse.data.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/booking/${bookingId}`);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId)
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const exportToExcel = () => {
    // Create a dataset with tour details
    const dataset = bookings.map((booking) => ({
      UserEmail: booking.userEmail,
      FullName: booking.fullName,
      GuestSize: booking.guestSize,
      Phone: booking.phone,
      BookAt: tours.find((tour) => tour.title === booking.tourName)?.date &&
      new Date(tours.find((tour) => tour.title === booking.tourName).date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      // Fetch and display tour details based on booking data
      "pickup":booking.pickup,
      "Tour Details": tours.find((tour) => tour.title === booking.tourName)?.title,
    }));

    // Sort the dataset by "Tour Details" property (tour titles)
    const sortedDataset = [...dataset].sort((a, b) =>
      a["Tour Details"].localeCompare(b["Tour Details"])
    );

    const ws = XLSX.utils.json_to_sheet(sortedDataset);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bookings");
    XLSX.writeFile(wb, "bookings.xlsx");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Bookings</h4>
          </Col>
          <Col lg="12">
          <table className="table bookings-table">
              <thead>
                <tr>
                  <th>User Email</th>
                  <th>Full Name</th>
                  <th>Guest Size</th>
                  <th>Phone</th>
                  <th>Dated</th>
                  {/* Add this column header for tour details */}
                  <th>Pickup</th>
                  <th>Tour Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7">Loading...</td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td>{booking.userEmail}</td>
                      <td>{booking.fullName}</td>
                      <td>{booking.guestSize}</td>
                      <td>{booking.phone}</td>
                      <td>
  {tours.find((tour) => tour.title === booking.tourName)?.date &&
    new Date(tours.find((tour) => tour.title === booking.tourName).date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
</td>

                      <td>{booking.pickup}</td>
                      <td>
                        {/* Display tour details based on booking data */}
                        {tours.find((tour) => tour.title === booking.tourName)?.title}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                        {/* You can add more actions here */}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Button onClick={exportToExcel}>Export to Excel</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bookingss;
