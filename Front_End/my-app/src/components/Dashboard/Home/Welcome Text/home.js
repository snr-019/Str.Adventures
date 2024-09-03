import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Welcome = () => {
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const token = localStorage.getItem('authToken');
        const response = await Axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const { first_name, last_name } = response.data;
        setUserName(`${first_name} ${last_name}`);
      } catch (error) {
        console.error('Error fetching user data', error);
      } 
    };

    fetchUserData();
  }, []);
  return (
    <section id="home" style={{ padding: '20px',paddingBottom:'0px', textAlign: 'center',color:'#0f7c6c',marginTop:'20px',paddingLeft:'100px' }}>
      <h1 style={{fontSize:'2rem'}}>Welcome to Str Adventures, {userName}!</h1>
    </section>
  );
};

export default Welcome;

