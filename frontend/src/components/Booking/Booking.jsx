import React, { useState, useContext, useEffect } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem,Input,Label, Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: '', // Initialize tourName as an empty string
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
    "pickup":'',
  });

  // Update tourName in the booking state when the tour prop changes
  useEffect(() => {
    if (title) {
      setBooking((prev) => ({ ...prev, tourName: title }));
    }
  }, [title]);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handlerClick = async (e) => {
    e.preventDefault();

    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please sign in');
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });
      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      navigate('/thank-you');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handlerClick}>
        <FormGroup>
    <input
      type="text"
      placeholder="Tour Name"
      id="tourName"
      required
      value={booking.tourName}
      readOnly
    />
  </FormGroup>

          {/* Other input fields */}
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
          <input
  type="text"
  placeholder="Date"
  id="date"
  required
  value={new Date(tour.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })}
  readOnly
/>

            <Label>Pickup</Label>
  <Input
    type="select"
    id="pickup"
    name="pickup"
    value={booking.pickup}
    onChange={handleChange}
    required
  >
    <option value="">Select Pickup Option</option>
    <option value={tour.pickupOption1}>{tour.pickupOption1}</option>
    <option value={tour.pickupOption2}>{tour.pickupOption2}</option>
    <option value={tour.pickupOption3}>{tour.pickupOption3}</option>
    <option value={tour.pickupOption4}>{tour.pickupOption4}</option>
    <option value={tour.pickupOption5}>{tour.pickupOption5}</option>
    <option value={tour.pickupOption6}>{tour.pickupOption6}</option>
    <option value={tour.pickupOption7}>{tour.pickupOption7}</option>
    <option value={tour.pickupOption8}>{tour.pickupOption8}</option>
    <option value={tour.pickupOption9}>{tour.pickupOption9}</option>
    <option value={tour.pickupOption10}>{tour.pickupOption10}</option>
  </Input>
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-circle-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Total </h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handlerClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
