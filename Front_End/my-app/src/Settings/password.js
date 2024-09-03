import React, { useState } from 'react';
import {Container,Typography,TextField,Button,Link,Box} from '@mui/material';

function PwdApp() {  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Handle password change logic
      alert("Password changed successfully!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirm-password"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Apply
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="#" variant="body2">
              Back to Log In
            </Link>
            <Link href="#" variant="body2">
              Register
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default PwdApp;

