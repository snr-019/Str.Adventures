import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const Booking_Tour = () => {
  const { state } = useLocation();
  const basePrice = state?.basePrice.replace("₹","") || 48000;
  const formDetails = {
    packageName: state?.booking_dest_name || 'Kashmir Tour Package for Family',
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    price: basePrice,
    numberOfPersons: 1,
  };
  const [formData, setFormData] = useState(formDetails);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [askPayment, setAskPayment] = useState(false)
  const [packageId, setPackageId] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {

        const { name, value } = e.target;
        // if (name === 'phoneNumber' && !/^\d*$/.test(value)) return;
        setFormData(prevFormData => {
          const newValue = name === 'numberOfPersons' ? parseInt(value, 10) : value;
          const newFormData = { ...prevFormData, [name]: newValue };
          if (name === 'numberOfPersons') {
            newFormData.price = basePrice * newValue;
          }
          return newFormData;
        });
      };
    const formattedPrice = `₹${formData.price.toLocaleString()}.00`;
    console.log('Formatted Price:', formattedPrice);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const token= localStorage.getItem('authToken')
      const response = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/newbooking`,formData,{
        headers :{
          'Authorization': `Bearer ${token}`
      }});
    
      console.log('Booking successful:', response.data);
      const packageId = response.data.data._id;
      setPackageId(packageId);
      console.log('Package ID:', packageId);
      setAskPayment(true)
      setMessage('Your booking was successful! A confirmation email has been sent. Please vist the Dashboard section and fill the Consent Form'); 
     
    } catch (error) {
      console.error('Error booking tour:', error.response ? error.response.data : error.message);
      setMessage('There was an error booking your tour. Please try again later.');
      setDialogOpen(true); 
    } finally {
      setLoading(false);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  


const processPayment = async (event) => {
  event.preventDefault();
  setPaymentProcessing(true);
  const cardElement = elements.getElement(CardElement);

  try {
    // Create payment method
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (paymentError) {
      console.error('[paymentError]', paymentError);
      return;
    }

    // Create payment intent on the server
    const paymentIntentResponse = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/create-payment-intent`, {
      price: formData.price, // Pass the amount or other required data
    });

    const { clientSecret } = paymentIntentResponse.data;

    // Confirm card payment
    const { error: intentError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (intentError) {
      console.error('[intentError]', intentError);
      return;
    }

    if (!packageId) {
      console.error('packageId is missing');
      return;
    }

    // Confirm payment on the server
    const confirmPaymentResponse = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/confirmed-payment`, {
      packageId,
      paymentIntentId: paymentIntent.id, 
    });

    const confirmPaymentResult = confirmPaymentResponse.data;

    if (confirmPaymentResult.error) {
      console.error('[confirmPaymentError]', confirmPaymentResult.error);
      return;
    }

    // Handle success
    setFormData(formDetails); 
    setDialogOpen(true);
    setPackageId(''); 
    setAskPayment(false);
    console.log('Payment processed successfully');

  } catch (error) {
    console.error('Payment processing error:', error);
  }
  finally {
    setPaymentProcessing(false); // Set to false once payment processing is done
  }
};




  const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',    
      '::placeholder': {
        color: '#0f7c6c',
      },
    },
    invalid: {
      color: 'red',
      iconColor: 'red',
    },
  },
};
  return (
    <div>
     { !askPayment &&
      <form 
        onSubmit={handleSubmit} 
        style={{ 
        maxWidth: '400px', 
        margin: 'auto',
        padding: '15px',
        border: '2px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fff'
      }}
     >
  <div>
     <label htmlFor="packageName" style={{ color: '#0f7c6c', fontWeight: '600' }}>Package Name</label>
      <input
      type="text"
      id="packageName"
      name="packageName"
      value={formData.packageName}
      readOnly
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        fontWeight: '500',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
    />
  </div>
  <div>
    <label htmlFor="name" style={{ color: '#0f7c6c', fontWeight: '600' }}>Name</label>
    <input
      type="text"
      title="Please enter only alphabetic characters."
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
      required
    />
  </div>
  <div>
    <label htmlFor="email" style={{ color: '#0f7c6c', fontWeight: '600' }}>Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
      required
    />
  </div>
  <div>
    <label htmlFor="phoneNumber" style={{ color: '#0f7c6c', fontWeight: '600' }}>Phone Number</label>
    <input
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      pattern="[\+?0-9]{10,16}"
      title="Please enter a valid phone number."
      value={formData.phoneNumber}
      onChange={handleChange}
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
      required
    />
  </div>
  <div>
    <label htmlFor="date" style={{ color: '#0f7c6c', fontWeight: '600' }}>Date</label>
    <input
      type="date"
      id="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
      required
    />
  </div>
  <div>
    <label htmlFor="price" style={{ color: '#0f7c6c', fontWeight: '600' }}>Price</label>
    <input
      type="text"
      id="price"
      name="price"
      value={formattedPrice}
      readOnly
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        fontWeight: '500',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
    />
  </div>
  <div>
    <label htmlFor="numberOfPersons" style={{ color: '#0f7c6c', fontWeight: '600' }}>How many persons</label>
    <input
      type="number"
      id="numberOfPersons"
      name="numberOfPersons"
      value={formData.numberOfPersons}
      onChange={handleChange}
      min="1"
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '7px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        padding: '6px',
        color: '#0f7c6c',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
      }}
      onFocus={(e) => e.target.style.borderColor = '#0f7c6c'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
      required
    />
  </div>
  <button 
    type="submit" 
    style={{ 
      display: 'block', 
      width: '100%', 
      padding: '10px', 
      backgroundColor: '#0f7c6c', 
      color: 'white', 
      border: 'none', 
      borderRadius: '5px', 
      transition: 'background-color 0.3s ease-in-out' 
    }}
    disabled={loading}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#0d6a5b'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#0f7c6c'}
  >
    {loading ? 'Processing...' : 'Book Now'}
  </button>
</form>
}
{ askPayment &&
        <form onSubmit={processPayment} style={{border:'2px solid #0f7c6c',borderRadius:'10px',marginTop:'100px'}}>
          <div style={{ padding: '10px 0px',border:"1px solid #dadce3",color:'#0f7c6c',textAlign:'center',fontSize:'30px',fontWeight:'600',marginBottom:'20px',borderRadius:'10px',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)'}}>Payment</div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button 
          type="submit" 
          disabled={!stripe || paymentProcessing}  
          style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#0f7c6c', color: '#dadce3', border: 'none', borderRadius: '5px', marginTop: '15px' }} >

         {paymentProcessing ? 'Processing...' : 'Submit Payment'}
      </button>
    </form>
    }
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{message.includes('successful') ? 'Booking Confirmed' : 'Booking Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
);
};

export default Booking_Tour;
