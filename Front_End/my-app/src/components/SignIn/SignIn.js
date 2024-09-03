// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useAuth } from "../../context/authContext.jsx";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" align="center" {...props} style={{color:'#0f7c6c'}}>
//       {'Copyright © '}
//       <Link to ='/'  style={{ color: '#0f7c6c' }}>
//         Str Adventures
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const { login } = useAuth()
//   const [showPassword, setShowPassword] = React.useState(false);
//   const remember = {
//      email: localStorage.getItem('remember-email'),
//      password: localStorage.getItem('remember-password'),
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     if (data.get('remember')) {
//       localStorage.setItem("remember-email", data.get('email'))
//       localStorage.setItem("remember-password", data.get('password'))
//     }

//     const response = await login(data.get('email'), data.get('password'))
//     if (response.status == false)
//       alert(response?.error || "error occured while logging in")
//   };

//   return (
//     <div >
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs" style={{ border: '2px solid #f9ede7',marginTop:'30px' }}>
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: '#0f7c6c' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" style={{color:'#0f7c6c',fontWeight:'600 '}}>
//             Sign in
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               defaultValue={remember?.email ?? ''}
//               autoFocus
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                 },
//                 '& .MuiInputLabel-root': {
//                   color: '#0f7c6c',
//                 },
//                 '& .MuiInputLabel-formControl': {
//                   color: '#0f7c6c',
//                   },
//                 '& .MuiInputLabel-root-animated': {
//                   color: '#0f7c6c',
//                 },
//               }}
//             />
//              <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               defaultValue={remember?.password ?? ''}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#0f7c6c',
//                   },
//                 },
//                 '& .MuiInputLabel-root': {
//                   color: '#0f7c6c',
//                 },
//                 '& .MuiInputLabel-formControl': {
//                   color: '#0f7c6c',
//                   },
//                 '& .MuiInputLabel-animated': {
//                   color: '#0f7c6c',
//                 },
//               }}
//               autoComplete="current-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={() => setShowPassword(prev => !prev)}
//                       sx={{
//                         color: showPassword ? '#0f7c6c' : 'inherit', // Color when showPassword is true
//                         '&:hover': {
//                           color: showPassword ? '#0c6358' : 'inherit', // Color when hovered and showPassword is true
//                         },
//                       }}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility  style={{ color: '#0f7c6c' }} />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" name="remember"  style={{color:'#0f7c6c'}} /> }
//               label="Remember me"
//               style={{color:'#0f7c6c'}} />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
//                 mb: 2,
//                 backgroundColor: '#0f7c6c', // Background color
//                 color: '#f9ede7', // Text color
//                 '&:hover': {
//                   backgroundColor: '#0c6358', // Background color on hover
//                 },
//               }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
            
//                 <Link to='/forgotpassword'variant="body2"  style={{color:'#0f7c6c'}}>

//                   Forgot Password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link to="/SignUp" variant="body2"  style={{color:'#0f7c6c'}} >
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 3,pb:3 }}  style={{color:'#0f7c6c',}} />
//       </Container>
//     </ThemeProvider>
//     </div>
//   );
// }



/**************************************with form validation**************************************************** */

import  { React,useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Typography, Container, Box, Grid, IconButton, InputAdornment} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from "../../context/authContext.jsx";

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props} style={{ color: '#0f7c6c' }}>
      {'Copyright © '}
      <Link to='/' style={{ color: '#0f7c6c' }}>Str Adventures</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: localStorage.getItem('remember-email') || '',
    password: localStorage.getItem('remember-password') || '',
    remember: false
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email,include @ / "."';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (formData.remember) {
      localStorage.setItem("remember-email", formData.email);
      localStorage.setItem("remember-password", formData.password);
    }

    const response = await login(formData.email, formData.password);
    if (!response.status) {
      alert(response?.error || "Error occurred while logging in");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{ border: '2px solid #f9ede7', marginTop: '30px' }}>
        <CssBaseline />
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: '#0f7c6c' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: '#0f7c6c', fontWeight: '600 ' }}>
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              autoFocus
              error={!!errors.email}
              helperText={errors.email}
              sx={{'& .MuiOutlinedInput-root': {'& fieldset': { borderColor: '#0f7c6c' },'&:hover fieldset': { borderColor: '#0f7c6c' },'&.Mui-focused fieldset': { borderColor: '#0f7c6c' },},'& .MuiInputLabel-root': { color: '#0f7c6c' }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{
                        color: showPassword ? '#0f7c6c' : 'inherit',
                        '&:hover': { color: showPassword ? '#0c6358' : 'inherit' },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility style={{ color: '#0f7c6c' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{'& .MuiOutlinedInput-root': {'& fieldset': { borderColor: '#0f7c6c' },'&:hover fieldset': { borderColor: '#0f7c6c' },'&.Mui-focused fieldset': { borderColor: '#0f7c6c' },},'& .MuiInputLabel-root': { color: '#0f7c6c' } }}
            />
            <FormControlLabel
              control={<Checkbox name="remember" checked={formData.remember} onChange={handleChange} style={{ color: '#0f7c6c' }} />}
              label="Remember me"
              style={{ color: '#0f7c6c' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2,backgroundColor: '#0f7c6c',color: '#f9ede7','&:hover': { backgroundColor: '#0c6358' },}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/forgotpassword' variant="body2" style={{ color: '#0f7c6c' }}>Forgot Password?</Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2" style={{ color: '#0f7c6c' }}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 3, pb: 3 }} />
      </Container>
    </ThemeProvider>
  );
}
