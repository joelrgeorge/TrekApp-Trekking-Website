import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap'; // Import Bootstrap components if used
import '../styles/users.css'; // Import your CSS file

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/users');
      setUsers(response.data.data); // Assuming the response contains an array of user objects
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      // Send a DELETE request to your API to delete the user
      await axios.delete(`http://localhost:4000/api/v1/users/${userId}`);

      // Remove the deleted user from the local state
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== userId)
      );
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
          <h4 style={{fontFamily: 'Josefin Sans, sans-serif', fontSize: '64px', textAlign: 'center'}}>User List</h4>
          </Col>
          <Col lg="12">
            <table className="table user-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;