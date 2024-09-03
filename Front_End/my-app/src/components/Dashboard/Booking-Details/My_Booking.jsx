import React from 'react';
const BookingRow = ({ booking, onViewDetails }) => {
    return (
        <div className="booking-row shadow p-3 bg-light rounded-3 d-flex justify-content-between align-items-center" style={{border:'1px solid #dadce3',color:'#0f7c6c',fontFamily:'inter, sans-serif'}}>
            <div >
                <p><strong>Book ID:</strong> {booking.bookId}</p>
                <p><strong>Billing Name:</strong> {booking.billingName}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Total:</strong> {booking.total}</p>
                <p><strong>Payment Status:</strong> {booking.paymentStatus}</p>
            </div>
            <button className="btn" onClick={() => onViewDetails(booking)} style={{background:'#DADCE3',border:'1px solid #0F7C6C',color:'#0f7c6c',fontFamily:'inter, sans-serif'}}>
               Download Pdf
            </button>
        </div>
    );
};

export default BookingRow;
