import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; 

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    age: '',
  });

  // New state to toggle between read-only and editable mode
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCustomerProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No token found');

        const response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response Data:', response.data);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchCustomerProfile();
  }, []);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No token found');

      const response = await axios.put(
        `http://localhost:${process.env.REACT_APP_API_PORT}/api/update-profile`,
        customer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Profile updated successfully:', response.data);
      setIsEditing(false); // Switch back to view mode
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div id='PROFILE'>
      <div className="profile-container shadow mx-1 px-3 bg-light rounded-3 mt-2 mb-2 pb-1">
        <h2 className="mb-4 text-center" style={{ color: '#0f7c6c', fontFamily: 'inter, sans-serif', fontWeight: '600', fontSize: '30px', padding: '10px' }}>My Profile</h2>
        <div className="profile-content">
          <div className="row mb-3 ">
            <div className="col">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="first_name"
                value={customer.first_name}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="last_name"
                value={customer.last_name}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="col">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={customer.address}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="gender" className="form-label">Gender</label>
              <input
                className="form-control"
                id="gender"
                name="gender"
                value={customer.gender}
                onChange={handleChange}
                readOnly={!isEditing}
              >
              </input>
            </div>
            <div className="col">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={customer.age}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div >
            {isEditing ? (
              <button className='form-control' onClick={handleUpdate}>Save Changes</button>
            ) : (
              <button className='form-control' onClick={() => setIsEditing(true)}>Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;

