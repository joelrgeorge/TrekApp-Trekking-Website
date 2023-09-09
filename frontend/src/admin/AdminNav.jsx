import React, {useContext} from 'react';
import { Container,Row } from 'reactstrap';
import {AuthContext} from "../context/AuthContext"

import userIcon from '../assets/images/user.png';
import "../styles/admin-nav.css";
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";


const admin__nav = [
  {
      display: 'Home', // Add the "Home" button
      path:'/home' // Specify the path for the "Home" button
  },
  {
       display: 'Statistics',
       path: '/dashboard/statistics'
  },
  {
      display: 'Dashboard',
      path:'/dashboard'
  },
  {
      display: 'All-Tours',
      path:'/dashboard/all-tours'
  },
  {
      display: 'Add-Tours',
      path:'/dashboard/add-tours'
  },
  {
      display: 'Bookings',
      path:'/dashboard/Bookings'
  },
  {
      display: 'Users',
      path:'/dashboard/users'
  },
]

  

const AdminNav = () => {

    const {user} = useContext(AuthContext);

    return (
        <>
        <header className='admin__header'>
            <div className='admin__nav-top'>
                <Container>
<div className='admin__nav-wrapper-top'>
<div className="logo">
            <img src={logo} alt="logo"/>
           
          </div>
          
    <div className='logon'>
     
</div>




<div className="admin__nav-top-right">
    
    <img src={userIcon} alt="" />
</div>
    </div>
    </Container>
</div>
        </header>
<section className='admin__menu p-0'>
    <Container>
        <Row>
        <div className="admin__navigation">
  <ul className='admin__menu-list' style={{ display: 'flex', gap: '10px' }}>
    {
      admin__nav.map((item, index) => (
        <li className="admin__menu-item" key={index}>
          <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active__admin-menu ': ''}>{item.display}</NavLink>
        </li>
      ))
    }
  </ul>
</div>

        </Row>
    </Container>

</section>

        </>
    );
}

export default AdminNav;
