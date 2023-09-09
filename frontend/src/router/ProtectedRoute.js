import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user.role === 'admin') {
    return children;
  } else {
    // Redirect to a different route or show an error message for non-admin users
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
