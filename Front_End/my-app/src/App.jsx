import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Destination from "./pages/Destination.jsx";
import Packages from "./pages/Packages.jsx";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import Profile from "./pages/dashboard/Profile.jsx"
import { useAuth } from './context/authContext.jsx'
import Header from "./pages/dashboard/header.jsx";
import BookingDetails from "./pages/dashboard/booking-details.jsx";
import DashboardLayout from "./components/common/DashboardLayout.jsx";
import BookProp from "./components/Book_Now/BookProp.jsx";
import Booking_Tour from "./pages/Book_Tour.jsx";
import UserPage from "./pages/dashboard/customerprofiles.jsx"
import HomePage from "./pages/dashboard/home.jsx"
import AboutUs from "./components/About/AboutUs.jsx";
import ForgotPassword from "./Settings/forgotpwd.js"
import ResetPassword from "./Settings/resetpwd.js";
import FeedPage from "./pages/dashboard/feedback.jsx";
import ConsentPage from "./pages/dashboard/consent.jsx";
import Soon from "./components/Soon.jsx";

function App() {
  const { isAuth } = useAuth()
  const openRoutes  =[
    { url: '/SignIn', elm: <SignIn />  },
    { url: '/SignUp', elm: <SignUp /> },
    { url: '/BookProp', elm:<Navigate to="/SignIn"  /> },
    { url: '/about', elm: <AboutUs /> },
    { url: '/forgotpassword', elm:<ForgotPassword /> },
    { url: '/reset-password/:token', elm:<ResetPassword /> },
    
  
  ]

  const closedRoutes = [
    { url: '/dashboard', elm: <Dashboard />},
    { url: '/profile', elm: <Profile />},
    { url: '/customerprofile',elm: <UserPage />},
    { url: '/home',elm: <HomePage />},
    { url: '/feedback',elm: <FeedPage />},
    { url: '/consent',elm: <ConsentPage />},
    { url: '/header', elm: <Header />},
    { url: '/bookingdetails', elm: <BookingDetails />},
    { url: '/dashboardlayout', elm: <DashboardLayout />},
    { url: '/BookProp', elm:<BookProp /> },
    { url: '/book-now', elm:<Booking_Tour /> },
    { url: '/forgotpassword', elm:<ForgotPassword /> },
    { url: '/about', elm: <AboutUs /> },
    { url: '/SignIn', elm:<Navigate to="/BookProp"  /> },

  ]

  const routes = isAuth === true ? closedRoutes:openRoutes;

  const renderHTML = routes.map(r => <Route path={r.url} element={r.elm} />)

  return(
    <div>
    <HashRouter  basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destination/:url" element={<Destination />} />
        <Route path="/packages/:url" element={<Packages />} />
        <Route path="/soon" element={<Soon />} />
        {renderHTML} 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;
