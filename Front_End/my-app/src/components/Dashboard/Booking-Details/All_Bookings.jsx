import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import "./All_Booking.css";
import Dialog from '../Consent/dailog.jsx'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Snackbar, IconButton,Button,Modal,Box,TextField } from '@mui/material';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [consentFormDetails, setConsentFormDetails] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // State for controlling update modal
  const [updateBookingData, setUpdateBookingData] = useState(null); // State for storing the booking to update
  const { user } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/bookings`, {
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


 
const handleViewDetails = async (consentFormId) => {
  console.log('Consent Form ID:', consentFormId);

  try {

      if (!consentFormId) {
          console.error('Consent form ID is missing');
          return;
      }

     
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}/api/consent/${consentFormId}`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      const consentForm = response.data;
      
      setConsentFormDetails(consentForm);
      setShowDialog(true);
  } catch (error) {
      console.error('Error fetching consent details:', error);

      // If the backend returns a 404 error, show an alert
      if (error.response && error.response.status === 404) {
          alert('No consent form found. Please fill out the consent form.');
      } else {
          alert('An error occurred while fetching the consent form. Please try again later.');
      }
  }
};


  const handleCloseDialog = () => {
    setShowDialog(false);
    setConsentFormDetails(null);
  };
  
  // Handle delete booking
  const handleDeleteBooking = async (bookingId) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`http://localhost:${process.env.REACT_APP_API_PORT}/api/deletebookings/${bookingId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // Update bookings state after deletion
      setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
      setOpenSnackbar(true); // Show success message
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleOpenUpdateModal = (booking) => {
    setUpdateBookingData(booking);
    setOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setUpdateBookingData(null);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateBookingData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdateBooking = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.put(`http://localhost:${process.env.REACT_APP_API_PORT}/api/updatebookings/${updateBookingData._id}`, updateBookingData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // Update bookings state after update
      setBookings(prevBookings => prevBookings.map(booking => booking._id === response.data._id ? response.data : booking));
      setOpenUpdateModal(false); // Close modal
      setOpenSnackbar(true); // Show success message
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };


  if (loading) return <p>Loading...</p>;

  return (
    <div id="admin-dashboard">
      <h1 style={{color:'#0f7c6c',textAlign:'center',fontFamily:'inter, sans-serif',fontSize:'30px',fontWeight:'600 '}}>Booking Records</h1>
      {error && <p className="error-message">Error: {error}</p>}
      <table className="bookings-table">
        <thead style={{color:'#0f7c6c',fontFamily:'inter, sans-serif'}}>
          <tr>
            <th>ID</th>
            <th>Package Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>No. of Persons</th>
            <th>Price</th>
            <th>Payment Status</th>
            <th>Consent Form</th>
            {user?.type === 'admin' && (
              <th>Update Booking</th>)}
            {user?.type === 'admin' && (
              <th>Delete Booking</th>)}
            </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.packageName}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.date}</td>
                <td>{booking.numberOfPersons}</td>
                <td>{booking.price}</td>
                <td>{booking.paymentStatus}</td>
                <td>
                  <button
                    className="view-details-button"
                    // onClick={() => handleViewDetails(booking._id)}
                    onClick={() => handleViewDetails(booking._id, booking.consentFormId)}
                    style={{border:'1.5px solid #0f7c6c',fontFamily:'inter, sans-serif',fontSize:'10px'}}
                  >
                    View Details
                  </button>
                </td>
                <td>
                {user?.type === 'admin' && (
                  <IconButton
                    onClick={() => handleOpenUpdateModal(booking)}
                    aria-label="edit"
                    style={{border:'2px solid #0f7c6c', color:'#0f7c6c'}}
                  >
                    <EditIcon />
                  </IconButton>)}
                </td>
                <td>
                {user?.type === 'admin' && (
                  <IconButton
                    onClick={() => handleDeleteBooking(booking._id)}
                    aria-label="delete"
                    style={{border:'2px solid #0f7c6c', color:'#0f7c6c'}}
                  >
                    <DeleteIcon />
                  </IconButton>)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="no-data">No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
      <Dialog
        isOpen={showDialog}
        onClose={handleCloseDialog}
        details={consentFormDetails} 
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message="Operation successful"
        action={
          <IconButton size="medium" color="inherit" onClick={handleCloseSnackbar}>
            <DeleteIcon fontSize="medium" />
          </IconButton>
        }
      />
      <Modal
             open={openUpdateModal}
             onClose={handleCloseUpdateModal}
             aria-labelledby="update-booking-title"
            aria-describedby="update-booking-description"
       >     
       <Box className="update-modal" style={{marginTop:'34px',border:'1px solid #0f7c6c'}}>
        <h2 style={{color:'#0f7c6c',textAlign:'center',fontWeight:'600',fontSize:'25px',fontFamily:'inter,sans-serif'}}>Update Booking</h2>
           {updateBookingData && (
            <form>
               <TextField
                 label="Package Name"
                 name="packageName"
                 value={updateBookingData.packageName}
                 onChange={handleUpdateChange}
                 fullWidth
                InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px',
                  }
                }}
                 />
              <TextField
                label="Name"
                name="name"
                value={updateBookingData.name}
                onChange={handleUpdateChange}
                fullWidth
                InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={updateBookingData.email}
                onChange={handleUpdateChange}
                fullWidth
                InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={updateBookingData.phoneNumber}
                onChange={handleUpdateChange}
                fullWidth
                 InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
              />
              <TextField
                label="Date"
                name="date"
                type="date"
                value={updateBookingData.date}
                onChange={handleUpdateChange}
                fullWidth
                 InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Number of Persons"
                name="numberOfPersons"
                type="number"
                value={updateBookingData.numberOfPersons}
                onChange={handleUpdateChange}
                fullWidth
                 InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                value={updateBookingData.price}
                onChange={handleUpdateChange}
                fullWidth
                 InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px'
                  }
                }}
              />
              <TextField
                label="Payment Status"
                name="paymentStatus"
                value={updateBookingData.paymentStatus}
                onChange={handleUpdateChange}
                fullWidth
                 InputProps={{
                  style: {
                   height:'40px',
                   margin:'8px 0px 0px 0px'
                  }
                }}
              />
              <Button
                variant="contained"
                onClick={handleUpdateBooking}
                fullWidth
                style={{background:'#0f7c6c',color:'#dadce3',borderEndStartRadius:'10px',borderStartEndRadius:'10px',padding:'5px 16px'}}
              >
                Update Booking
              </Button>
          </ form>
        )}       
       </Box>       
     </Modal>       
    </div>
  );
};

export default AdminDashboard;



