import React from 'react';
import { Line } from 'react-chartjs-2';
import './style.css'; 
import 'chart.js/auto';

const BookingsChart = () => {
  const bookingsData = [
    { date: '01-01-24', bookings: 1 },
    { date: '01-02-24', bookings: 10 },
    { date: '01-03-24', bookings: 15 },
    { date: '01-04-24', bookings: 5 },
    { date: '01-05-24', bookings: 20 },
  ];

  const labels = bookingsData.map(item => item.date);
  const dataValues = bookingsData.map(item => item.bookings);

  const data = {
    labels,
    datasets: [
      {
        label: 'No.of Bookings',
        data: dataValues,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.3 
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
    <div className="chart-container" style={{marginLeft:'300px'}}>
      <div>
        <h2 style={{marginBottom:'10px',textAlign:'center',fontSize:'20px'}}>Bookings Over Time</h2>
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BookingsChart;
