import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({ new: false, confirm: false });
  const { token } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
        const response = await axios.post(`http://localhost:8082/api/reset-password/${token}`, {
        newPassword,
      });

      if (response.status === 200) {
        alert('Password has been reset successfully');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Error resetting password');
    }
  };

  const handleChange = (setter) => (event) => setter(event.target.value);

  const toggleVisibility = (key) => () =>
    setShowPassword((prevState) => ({ ...prevState, [key]: !prevState[key] }));

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
          Enter your new password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="New Password"
            type={showPassword.new ? 'text' : 'password'}
            value={newPassword}
            onChange={handleChange(setNewPassword)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility('new')} edge="end">
                    {showPassword.new ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type={showPassword.confirm ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleChange(setConfirmPassword)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility('confirm')} edge="end">
                    {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Reset Password
          </Button>
          <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Link to="/SignIn" variant="body2">
            Back to Sign In
          </Link>
        </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
