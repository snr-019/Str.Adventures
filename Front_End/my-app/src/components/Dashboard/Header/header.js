import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import img from "./logo.jpeg";
import { useAuth } from '../../../context/authContext';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isAuth, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ top: '50px'}} 
    >
     <MenuItem onClick={handleMenuClose} component={Link} to="/profile" style={{ color: '#0F7C6C' }}>
      My Profile
    </MenuItem>
     {isAuth && (
        <MenuItem onClick={() => { handleMenuClose(); logout(); }} style={{ color: '#0F7C6C' }}>
           Log Out
        </MenuItem>)}
    </Menu>
  );

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#0f7c6c',border: '1px solid #DADCE3',height:'70px'}}>
      <Toolbar>
       <div className="d-flex align-items-center">
              <a href="#" ><img className="logo" src={img} alt="Logo" style={{width:'60px'}} /></a>
              <div className="inner">
                <a className="navbar-brand " id="brand" href="#" style={{color:'#dadce3',fontSize:'20px'}}>
                  Str Adventures
                </a>
                <h6 className="sky" style={{color:'#dadce3'}}>Sky | Terrene | Rapids</h6>
              </div>
        </div>      
        <Typography variant="h6" noWrap style={{color:'#dadce3',textAlign:'center',fontFamily:'inter, sans-serif',fontSize:'30px',fontWeight:'500',paddingLeft:'400px'}}>
          DashBoard
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            style={{
              border: '2px solid #dadce3',
              borderRadius: '50%',
              padding: '5px',
              backgroundColor: '#e9ecef',
              color: '#0f7c6c',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dadce3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default Header;



