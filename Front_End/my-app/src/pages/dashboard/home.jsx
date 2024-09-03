import React from 'react';
import DashboardLayout from "../../components/common/DashboardLayout.jsx";
import DashboardMetrics from "../../components/Dashboard/Home/DashMetrics/dashMetrics.js";
import Welcome from '../../components/Dashboard/Home/Welcome Text/home.js';
import SocialSource from "../../components/Dashboard/Home/Socails/socials.js";
import UserGrowthChart from "../../components/Dashboard/Home/Charts/usergrowth.js";
import BookingsChart from "../../components/Dashboard/Home/Charts/bookchart.js";

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '20px'
};


const HomePage = () => {
  return (
    <DashboardLayout >
       <Welcome />
        <div style={{display:'flex',marginTop:'10px',paddingBottom:'0px',marginBottom:'0px',height:'200px'}}>
         <DashboardMetrics />
         <SocialSource />
         </div>
          <div style={containerStyle}>
        <UserGrowthChart />
        <BookingsChart />
        </div>
    </DashboardLayout>
  );
}

export default HomePage;
