import React,{useRef,useEffect,useState,useContext} from "react";
import { Container, Row} from "reactstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";
import {AuthContext} from './../../context/AuthContext';
import {motion} from 'framer-motion'
import userIcon from '../../assets/images/user.png';



const nav__links=[
    {
        path:"/home",
        display:"Home"
    },
    {
        path:"/about",
        display:"About"
    },
    {
        path:'/Tours',
        display:"Tours"
    },
]

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const profileActionsRef = useRef(null);
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const toggleProfileDropdown = () => {
    setDropdownVisible(!dropdownVisible);
   };
  
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if (document.body.scrollTop >80 || document.documentElement.scrollTop >80)
      if (headerRef && headerRef.current) {
        // Check if headerRef and headerRef.current exist
        const element = headerRef.current;
      
        if (!element.classList.contains('sticky__header')) {
          // Check if the class 'sticky__header' is not already present
          element.classList.add('sticky__header');
        }
      } else {
        console.error('headerRef or headerRef.current is undefined or null.');
      }
      
    })
  }
  const logout = ()=> {
    dispatch({type:'LOGOUT'})
    navigate('/')
  }


  useEffect(()=>{
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll',stickyHeaderFunc)
  })

const toggleMenu = () => menuRef.current.classList.toggle('show__menu')



  return (
    <header className="header" ref= {headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
      
       
          <div className="logo">
            <img src={logo} alt="logo"/>
           
          </div>
          
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink 
                      to={item.path} 
                      className={(navClass) =>
                         navClass.isActive ? "active__link": ""
                       }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                  ))
}
             </ul>
          </div>

          {/*==========menu ends========*/}

     <div className="nav__icons">    
    <div className="profile">
      <motion.img
        whileTap={{ scale: 1.1 }}
        src={ userIcon}
        alt=""
        onClick={toggleProfileDropdown}
      />

      {dropdownVisible && (
        <div className="profile__actions" ref={profileActionsRef}>
          {
          user ? (
            <div className="d-flex flex-column align-items-center justify-content-center flex-column">
              <span onClick={logout}>Logout</span>
        
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center  justify-content-center flex-column">
              <div className="profile__table">
              <Link to="/register" className="profile__link">
                  Register
                </Link>
                <Link to="/login" className="profile__link">
                  Login
                </Link>
                <Link to="/dashboard" className="profile__link">
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  
</div>


            
            <div className="mobile__menu">
            <span  onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
              
            </span>
             </div>
          </div>

          
        </Row>       
      </Container>
    </header>
  );
};

export default Header;




