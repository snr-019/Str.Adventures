// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import { Grid, Select, MenuItem, InputLabel,IconButton, FormControl,InputAdornment } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useAuth } from "../../context/authContext.jsx";
// import { useNavigate } from "react-router-dom";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link to ='/'style={{ color: '#0f7c6c' }}>
//         Str Adventures
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const { signUp } = useAuth()
//   const navigate = useNavigate()

//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData  = {
//       first_name: data.get("firstName"),
//       last_name: data.get("lastName"),
//       email: data.get('email'),
//       phone: data.get('phone'),
//       address:data.get('address'),
//       gender:data.get('gender'),
//       age:data.get('age'),
//       password: data.get('password'),

//     }
//     const res = await signUp(userData)
//     if (res.status) navigate('/SignIn')
//     else alert(res.error || "Some error occured")
//   };

//   return (
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
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   type='email'
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="phone"
//                   label="Phone Number"
//                   name="phone"
//                   autoComplete="phone"
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="address"
//                   label="Address"
//                   name="address"
//                   autoComplete="address"
//                   sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: '#0f7c6c', // Border color
//               },
//               '&:hover fieldset': {
//                 borderColor: '#0f7c6c', // Border color on hover
//               },
//               '&.Mui-focused fieldset': {
//                 borderColor: '#0f7c6c', // Border color when focused
//               },
//             },
//             '& .MuiInputLabel-root': {
//               color: '#0f7c6c', // Label color
//             },
//             '& .MuiInputBase-input': {
//               color: '#0f7c6c', // Input text color (alternative)
//             },
//           }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                  <TextField
//                   required
//                   fullWidth
//                   id="age"
//                   label="Age"
//                   name="age"
//                   type="number" 
//                   autoComplete="age"
//                   inputProps={{ min: 0 }} 
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                  />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                   <FormControl fullWidth required 
//                    sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                       '& .MuiSelect-select': {
//                         color: '#0f7c6c', // Text color
//                       },
//                     },
//                     '& .MuiSvgIcon-root': {
//                       color: '#0f7c6c', // Arrow color
//                     },
//                   }}
//                   >
//                   <InputLabel id="gender-label" style={{color:'#0f7c6c'}}>Gender</InputLabel>
//                   <Select
//                      labelId="gender-label"
//                      id="gender"
//                      name="gender"
//                      label="Gender"
//                      autoComplete="gender"
//                      defaultValue=""     
//                    >
//                     <MenuItem value="Male" style={{color:'#0f7c6c',border:'2px solid  #f9ede7'}}>Male</MenuItem>
//                     <MenuItem value="Female" style={{color:'#0f7c6c'}}>Female</MenuItem>
//                     </Select>
//                   </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: '#0f7c6c', // Border color
//                       },
//                       '&:hover fieldset': {
//                         borderColor: '#0f7c6c', // Border color on hover
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#0f7c6c', // Border color when focused
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#0f7c6c', // Label color
//                     },
//                     '& .MuiInputBase-input': {
//                       color: '#0f7c6c', // Input text color (alternative)
//                     },
//                   }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={() => setShowPassword(prev => !prev)}
//                           sx={{
//                             color: showPassword ? '#0f7c6c' : 'inherit', // Color when showPassword is true
//                             '&:hover': {
//                               color: showPassword ? '#0c6358' : 'inherit', // Color when hovered and showPassword is true
//                             },
//                           }}
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility  style={{ color: '#0f7c6c' }}/>}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt:3,
//                 mb:2,
//                 backgroundColor: '#0f7c6c', // Background color
//                 color: '#f9ede7', // Text color
//                 '&:hover': {
//                   backgroundColor: '#0c6358', // Background color on hover
//                 },
//               }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid item>
//                 <Link to="/SignIn" variant="body2" style={{color:'#0f7c6c'}}>
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 3, pb:3 }} style={{color:'#0f7c6c'}}/>
//       </Container>
//     </ThemeProvider>
//   );
// }

/**********************************with proper validation**************************** */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid, MenuItem, IconButton, InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from "../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const defaultTheme = createTheme();

export default function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({}); // State for errors

  const validate = (data) => {
    const newErrors = {};
    // if (!data.first_name) newErrors.firstName = "First Name is required.";
    if (!data.first_name || !/^[A-Za-z]+$/.test(data.first_name)) newErrors.firstName = !data.first_name ? "First Name is required." : "Alphabets only.";
    if (!data.last_name || !/^[A-Za-z]+$/.test(data.last_name)) newErrors.lastName = !data.last_name ? "Last Name is required." : "Alphabets only.";
    if (!data.last_name) newErrors.lastName = "Last Name is required.";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Valid Email is required.";
    if (!data.phone || !/^\d{10,16}$/.test(data.phone)) newErrors.phone = "Valid Phone Number is required.";
    if (!data.address) newErrors.address = "Address is required.";
    if (data.age <= 16 || !data.age) newErrors.age = "Valid Age is required.";
    if (!data.gender) newErrors.gender = "Gender is required.";
    if (!data.password || data.password.length < 6) newErrors.password = "Password must be at least 6 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: data.get('email'),
      phone: data.get('phone'),
      address: data.get('address'),
      gender: data.get('gender') ,
      age: data.get('age'),
      password: data.get('password'),
    };

    if (validate(userData)) {
      const res = await signUp(userData);
      if (res.status) navigate('/SignIn');
      else alert(res.error || "Some error occurred");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{ border: '2px solid #f9ede7', marginTop: '30px' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#0f7c6c' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: '#0f7c6c', fontWeight: '600 ' }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={{'& .MuiOutlinedInput-root': {'& fieldset': {  borderColor: '#0f7c6c',},'&:hover fieldset': {  borderColor: '#0f7c6c',},'&.Mui-focused fieldset': {  borderColor: '#0f7c6c', }, },'& .MuiInputLabel-root': {color: '#0f7c6c', },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  sx={{'& .MuiOutlinedInput-root': {  '& fieldset': {borderColor: '#0f7c6c',},'&:hover fieldset': {borderColor: '#0f7c6c',},'&.Mui-focused fieldset': { borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&:hover fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&:hover fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  error={!!errors.address}
                  helperText={errors.address}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&:hover fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  inputProps={{ min: 16 }}
                  error={!!errors.age}
                  helperText={errors.age}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&:hover fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
              
             
            <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      required
                      label="Gender"
                      id="gender"
                      name="gender"
                      error={!!errors.gender} // Show error state if there's an error
                      helperText={errors.gender} // Display the error message
                      variant="outlined"
                      sx={{
                        '& .MuiInputLabel-root': {
                          color: '#0f7c6c', // Label color
                          // color: errors.gender ? '#d32f2f' : '#0f7c6c', // Change to red if there's an error
                          
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#0f7c6c', // Border color
                          },
                          '&:hover fieldset': {
                            borderColor: '#0f7c6c', // Border color on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#0f7c6c', // Border color when focused
                          },
                        },
                        '& .MuiSelect-select': {
                          color: '#0f7c6c', // Text color
                        },
                        '& .MuiSvgIcon-root': {
                          color: '#0f7c6c', // Arrow color
                        },
                      }}
                    >
                   <MenuItem value="Male" style={{ color: '#0f7c6c' }}>Male</MenuItem>
                   <MenuItem value="Female" style={{ color: '#0f7c6c' }}>Female</MenuItem>
                 </TextField>
                 </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&:hover fieldset': {
                        borderColor: '#0f7c6c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0f7c6c',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#0f7c6c',
                    },
                    '& .MuiInputBase-input': {
                      color: '#0f7c6c',
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#0f7c6c', '&:hover': { bgcolor: '#0f7c6c' } }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signIn" style={{ color: '#0f7c6c' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
