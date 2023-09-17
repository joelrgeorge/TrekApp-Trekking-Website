import React, {useContext,useRef,useState} from 'react';
import { Container,Row } from 'reactstrap';
import {AuthContext} from "../context/AuthContext"
import {motion} from 'framer-motion'
import userIcon from '../assets/images/user.png';
import "../styles/admin-nav.css";
import { NavLink ,useNavigate} from 'react-router-dom';
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

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const profileActionsRef = useRef(null);
    const menuRef = useRef(null)
    const toggleProfileDropdown = () => {
        setDropdownVisible(!dropdownVisible);
       };
       const logout = ()=> {
        dispatch({type:'LOGOUT'})
        navigate('/')
      }
      const home = ()=> {
        dispatch({type:'HOME'})
        navigate('/')
      }
      const user = ()=> {
        dispatch({type:'USER'})
        navigate('/login')
      }
      
const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    return (
        <>
        <header className='admin__header'>
            <div className='admin__nav-top'>
                <Container>
<div className='admin__nav-wrapper-top'>
<div className="logo">
            <img src={logo} alt="logo"/>
           
          </div>
   



<div className="admin__nav-top-right">
<div className="profile">
  <motion.img
    whileTap={{ scale: 1.1 }}
    src={userIcon}
    alt=""
    onClick={toggleProfileDropdown}
  />

  {dropdownVisible && (
    <div className="profile__actions" ref={profileActionsRef}>
      {/* Use curly braces {} to enclose the content */}
      <div className="d-flex flex-column align-items-center justify-content-center flex-column">
      <span onClick={logout} style={{ color: 'black' }}>Logout</span>
      <span onClick={home} style={{ color: 'black' }}>Home</span>
      <span onClick={user} style={{ color: 'black' }}>Login as user</span>
      </div>
    </div>
  )}
</div>
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
