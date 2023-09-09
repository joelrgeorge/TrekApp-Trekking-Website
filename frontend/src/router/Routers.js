import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from "../pages/ThankYou";
import AddTours from '../admin/AddTours';
import AllTours from '../admin/AllTours';
import Dashboard from '../admin/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import Users from '../admin/Users';
import Bookings from '../admin/Bookings';
import Statistics from '../admin/Statistics';

import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />

      <Route path='/tours' element={<Tours />} />
      <Route path='/about' element={<About />} />
      <Route path='/tour/:_id' element={<TourDetails />} />

      <Route path="/dashboard" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <Dashboard />
      </ProtectedRoute>} />

      <Route path="/dashboard/statistics" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <Statistics />
      </ProtectedRoute>} />

      <Route path="/dashboard/all-tours" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <AllTours />
      </ProtectedRoute>} />

      <Route path="/dashboard/add-tours" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <AddTours />
      </ProtectedRoute>} />

      <Route path="/dashboard/Bookings" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <Bookings />
      </ProtectedRoute>} />

      <Route path="/dashboard/users" element={<ProtectedRoute> {/* Use ProtectedRoute here */ }
        <Users />
      </ProtectedRoute>} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />

      <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  );
}

export default Routers;
