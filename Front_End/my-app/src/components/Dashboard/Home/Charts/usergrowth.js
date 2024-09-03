import React from 'react';
import { Line } from 'react-chartjs-2';
import './style.css';
import 'chart.js/auto';

 const UserGrowthChart = () => {
  const userData = [
    { date: '01-01-24', userCount: 1 },
    { date: '01-02-24', userCount: 10 },
    { date: '01-03-24', userCount: 15 },
    { date: '01-04-24', userCount: 11 },
    { date: '01-05-24', userCount: 20 },
  ];

  const labels = userData.map(item => item.date);
  const dataValues = userData.map(item => item.userCount);

  const data = {
    labels,
    datasets: [
      {
        label: 'No.of Users',
        data: dataValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      y: {
        beginAtZero: true 
      }
    },
    plugins: {
      legend: {
        display: true, 
        position: 'top'
      }
    }
  };

  return (
    <div className="chart-container">
      <div>
        <h2 style={{marginBottom:'10px',textAlign:'center',fontSize:'20px'}}>User Growth Over Time</h2>
      </div>
      <div className="chart">
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default UserGrowthChart;
