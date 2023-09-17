import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
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
date: '', // New field for tour date
    pickupOption1: '', // Add these fields
    pickupOption2: '',
    pickupOption3: '',
    pickupOption4: '',
    pickupOption5: '',
    pickupOption6: '',
    pickupOption7: '',
    pickupOption8: '',
    pickupOption9: '',
    pickupOption10: '',
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

  const handlePickupChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      pickups: {
        ...prevData.pickups,
        [name]: value,
      },
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
          date: '',
          pickupOption1: '', // Add these fields
          pickupOption2: '',
          pickupOption3: '',
          pickupOption4: '',
    pickupOption5: '',
    pickupOption6: '',
    pickupOption7: '',
    pickupOption8: '',
    pickupOption9: '',
    pickupOption10: '',
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
              

              
<FormGroup>
  <Label>Date</Label>
  <Input
    type="date"
    name="date"
    value={tourData.date}
    onChange={handleChange}
    required
  />
</FormGroup>

<FormGroup>
  <Label>Pickup Option 1</Label>
  <Input
    type="text"
    name="pickupOption1"
    value={tourData.pickupOption1}
    onChange={handleChange}
   
  />
</FormGroup>

<FormGroup>
  <Label>Pickup Option 2</Label>
  <Input
    type="text"
    name="pickupOption2"
    value={tourData.pickupOption2}
    onChange={handleChange}
    
  />
</FormGroup>

<FormGroup>
  <Label>Pickup Option 3</Label>
  <Input
    type="text"
    name="pickupOption3"
    value={tourData.pickupOption3}
    onChange={handleChange}
   
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 4</Label>
  <Input
    type="text"
    name="pickupOption4"
    value={tourData.pickupOption4}
    onChange={handleChange} 
    
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 5</Label>
  <Input
    type="text"
    name="pickupOption5"
    value={tourData.pickupOption5}
    onChange={handleChange}
    
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 6</Label>
  <Input
    type="text"
    name="pickupOption6"
    value={tourData.pickupOption6}
    onChange={handleChange}
   
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 7</Label>
  <Input
    type="text"
    name="pickupOption7"
    value={tourData.pickupOption7}
    onChange={handleChange}
   
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 8</Label>
  <Input
    type="text"
    name="pickupOption8"
    value={tourData.pickupOption8}
    onChange={handleChange}
    
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 9</Label>
  <Input
    type="text"
    name="pickupOption9"
    value={tourData.pickupOption9}
    onChange={handleChange}
    
  />
</FormGroup>
<FormGroup>
  <Label>Pickup Option 10</Label>
  <Input
    type="text"
    name="pickupOption10"
    value={tourData.pickupOption10}
    onChange={handleChange}
  
  />
</FormGroup>


<Button type="submit" color="primary">
                Add Tour
              </Button>



            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddTours;
