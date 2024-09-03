import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import "./customerprofiles.css";

const UserProfiles = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('authToken'); 
      // console.log(token)
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-dashboard">
      <h1 style={{color:'#0f7c6c',fontFamily:'inter, sans-serif',fontWeight:'600',fontSize:'30px',textAlign:'center'}}>User Registrations</h1>
      {error && <p className="error-message">Error: {error}</p>}
      <table className="bookings-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
             <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.first_name}</td>
                <td>{booking.last_name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.address}</td>
                <td>{booking.age}</td>
                <td>{booking.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">No Users Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfiles;
