import React from 'react';


import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import AdminNav from '../../admin/AdminNav';
import { useLocation } from 'react-router-dom';


const Layout = () => {

const location = useLocation()

    return (
    <>

    {
        location.pathname.startsWith('/dashboard') ? <AdminNav/> :   <Header />
    }
      
    <Routers />
    <Footer />
    </>
    );
};

export default Layout;
