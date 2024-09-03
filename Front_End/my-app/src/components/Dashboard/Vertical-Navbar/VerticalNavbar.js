import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VerticalNavbar.css';
import { Button } from "@mantine/core";
import { useAuth } from '../../../context/authContext';
const VerticalNavbar = () => {
  const { isAuth, logout,user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-custom nav-side" id='small'>
      <ul className="navbar-nav d-flex flex-column">
      <li className="nav-item time" id="home">
          <a className="nav-link" href="#home" style={{ color: '#0F7C6C' }}>Home</a>
        </li>
       
        <li className="nav-item time" id='profile'>
          <a className="nav-link" href="#profile" style={{ color: '#0F7C6C' }}> My Profile</a>
        </li>
        <li className="nav-item time" id="setting">
          <a className="nav-link" href="#bookingdetails" style={{ color: '#0F7C6C' }}>Booking Details</a>
        </li>
        {user?.type !== 'admin' && ( 
          <li className="nav-item time" id='feedback'>
            <a className="nav-link" href="#feedback"  style={{ color: '#0F7C6C' }}>Give Feedback</a>
          </li> 
        )}
        {user?.type === 'admin' && ( 
          <li className="nav-item time" id='customerprofile'>
            <a className="nav-link" href="#customerprofile" style={{ color: '#0F7C6C' }}>Customer Profiles</a>
          </li> 
        )}
        {user?.type !== 'admin' && ( 
          <li className="nav-item time" id='consent'>
            <a className="nav-link" href="#consent" style={{ color: '#0F7C6C' }}>Consent Form</a>
          </li> 
        )}
         <li className="nav-item time" id="setting">
          <a className="nav-link" href="#" style={{ color: '#0F7C6C' }}>Exit Dashboard</a>
        </li>    
         {isAuth && (
          <div className="mid" id='log'>
            <Button id="booking" onClick={() => logout()}>LOG OUT</Button>
          </div>
           )}

       
      </ul>
    </nav>
  );
};

export default VerticalNavbar;

