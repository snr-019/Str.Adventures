
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { MantineProvider } from '@mantine/core';
import { WOW } from 'wowjs';
import { AuthContextProvider } from './context/authContext.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'animate.css'; 

const MainApp = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

 
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
    <AuthContextProvider>
      <MantineProvider>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>  
      </MantineProvider>
    </AuthContextProvider>
  </Elements>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

