import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './dashMetrics.css'; // Import the CSS file for styling

function DashboardMetrics() {
  const [totalBookings, setTotalBookings] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch token from localStorage
        const token = localStorage.getItem('authToken');

        // Fetch bookings with token in the headers
        const bookingsResponse = await Axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/getbookings`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const bookings = bookingsResponse.data;
        setTotalBookings(bookings.length);

        // Fetch all users
        const usersResponse = await Axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Set total number of users
        setTotalUsers(usersResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div style={{marginLeft:'250px',width:'70%',marginTop:'50px',height:'120px',display:'flex'}}>
      <div className="metric">
        <h3 style={{color:'#0f7c6c'}}>Successfull Bookings</h3>
        <p>{totalBookings !== null ? totalBookings : 'Loading...'}</p>
      </div>
      <div className='metric' style={{marginTop:'10px'}}> 
        <h3 style={{color:'#0f7c6c',marginBottom:'2px'}}>Users Registered</h3>
        <p>{totalUsers !== null ? totalUsers : 'Loading...'}</p>
      </div>
      </div>
  );
}

export default DashboardMetrics;
