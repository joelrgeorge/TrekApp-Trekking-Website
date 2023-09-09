import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTours = () => {
  const [tourData, setTourData] = useState({
    title: '',
    city: '',
    address: '',
    distance: '',
    photo: '', // Assuming photo is a URL, you can change this to 'image' and handle file upload
    desc: '',
    price: '',
    maxGroupSize: '',
    reviews: [],
    featured: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API to add the tour
      const response = await axios.post('http://localhost:4000/tours', tourData);

      if (response.status === 200) {
        toast.success('Tour added successfully');
        // Reset the form data after successful addition
        setTourData({
          title: '',
          city: '',
          address: '',
          distance: '',
          photo: '',
          desc: '',
          price: '',
          maxGroupSize: '',
          reviews: [],
          featured: false,
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error adding tour:', error);
      toast.error('Failed to add tour');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Tours</h4>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={tourData.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={tourData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={tourData.address}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Distance</Label>
                <Input
                  type="number"
                  name="distance"
                  value={tourData.distance}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Photo (URL)</Label>
                <Input
                  type="text"
                  name="photo"
                  value={tourData.photo}
                  onChange={handleChange}
              
                />
              </FormGroup>

              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="desc"
                  value={tourData.desc}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={tourData.price}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Max Group Size</Label>
                <Input
                  type="number"
                  name="maxGroupSize"
                  value={tourData.maxGroupSize}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              

              <button className="buy__btn" type="submit">
                Add Tour
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddTours;