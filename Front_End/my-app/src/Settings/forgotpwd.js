import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import {Container,Typography, TextField,Button,Box} from '@mui/material';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');  

    try {
      const response = await axios.post(`http://localhost:8082/api/forgot-password`, { email });
      alert(response.data.message); 
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred.');  
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '500px',
          border:'2px solid #dadce3',
          borderRadius:'10px'
        }}
      >
        <Typography component="h1" variant="h5" style={{fontFamily:'inter, sans-serif',fontWeight:'600', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: '#dadce3',fontSize:'30px',color:'#0f7c6c',width:'100%',textAlign:'center',padding:'10px 0px',borderTopRightRadius:'5px',borderTopLeftRadius:'5px'}}>
          Forgot Password
        </Typography>
        <Typography variant="subtitle1" sx={{ pt: 4,pb:4,pl:4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)' }}>
          Enter your email address and we’ll send a link to reset your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} 
        sx={{ 
           width: '100%'
           }}>
          <TextField
            required
            fullWidth
            id="email"
            label="Your Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            disabled={loading}  
            sx={{
              border:'2px solid #dadce3',
              borderTopLeftRadius:'5px',
              borderTopRightRadius:'5px',
              '& label': {
                color: '#0f7c6c', // Label color
              },
              '& label.Mui-focused': {
                color: '#0f7c6c', // Label color when focused
              },
              '& .MuiInputBase-input': {
                color: '#0f7c6c', 
              },
              '& .MuiOutlinedInput-root': {
               '& fieldset': {
               borderColor: '#0f7c6c', // Default border color
               },
               '&:hover fieldset': {
                borderColor: '#dadce3', // Border color on hover
               },
              '&.Mui-focused fieldset': {
                borderColor: '#dadce3',
              }},
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ p:1,background:'#0f7c6c',color:'#dadce3',borderRadius:'0px',  
              '&:hover': {
                background: '#dadce3', 
                color: '#0f7c6c',       
              },
            }}
            disabled={loading}  
          >
            {loading ? 'Sending...' : 'Request New Password'}
          </Button>
          {error && <Typography color="error">{error}</Typography>}  
          <Box display="flex" justifyContent="space-between"
          sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)'}} 
          >
            <Link to="/SignIn" variant="body2"
            style={{color:'#0f7c6c',marginLeft:'50px',paddingTop:'20px',marginBottom:'20px',fontWeight:'600',fontFamily:'inter, sans-serif'}}>
              Back to Log In
            </Link>
            <Link to="/SignUp" variant="body2"  style={{color:'#0f7c6c',paddingTop:'20px',marginRight:'50px',marginBottom:'20px',fontWeight:'600',fontFamily:'inter, sans-serif'}}>
              Register
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
