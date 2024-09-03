import React, { useState } from 'react';
import BookingRow from './My_Booking';
import "./My_Booking.css"; 
import  AdminDashboard from "./All_Bookings.jsx";
const BookingList = () => {
    const [bookings] = useState([
        {
            bookId: '',
            billingName: '',
            date: '',
            total: '',
            paymentStatus: ''
        }
    ]);

    const handleViewDetails = (booking) => {
        console.log('View details for booking:', booking);
        // Add your logic for viewing details here
    };

    return (
        <div>
            <AdminDashboard />
           <div className="container mt-4" id='PEN'>
            <h2 style={{color:'#0f7c6c',textAlign:'center',fontFamily:'inter, sans-serif',fontSize:'30px',fontWeight:'600 '}}>Booking Details</h2>
            {bookings.map((booking, index) => (
                <BookingRow
                    key={index}
                    booking={booking}  // Ensure 'booking' is correctly passed here
                    onViewDetails={handleViewDetails}
                />
            ))}
        </div>
        </div>
    );
};

export default BookingList;
