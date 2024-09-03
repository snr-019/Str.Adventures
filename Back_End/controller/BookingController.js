import BookingModel from "../models/booking.js";
import {sendEmail} from "../Services/emailBooking.js"; 

// Create a new booking
const createBooking = async (req, res) => {
    const newBooking = new BookingModel({...req.body,userId:req.user._id});

    try {
        const savedBooking = await newBooking.save();
        const emailText = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        width: 90%;
                        margin: auto;
                        max-width: 600px;
                        background: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        padding-bottom: 20px;
                    }
                    .header img {
                        max-width: 120px;
                    }
                    .content {
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 20px;
                    }
                    .content p {
                        margin: 0 0 10px;
                    }
                    .footer {
                        text-align: center;
                        font-size: 14px;
                        color: #888;
                    }
                    
                    .details {
                        margin-top: 20px;
                        border-top: 1px solid #ddd;
                        padding-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/PxLQjT4/f6e982ad-e456-4e4e-9c8a-3a59b86a3442-photoaidcom-cropped.png" alt="StrAdventures Logo" border="0" /></a>
                    </div>
                    <div class="content">
                        <p>Dear ${savedBooking.name},</p>
                        <p>Your tour Package <strong>${savedBooking.packageName}</strong> has been successfully booked!</p>
                        <p>Here are the details of your booking:</p>
                        <div class="details">
                            <p><strong>Booking Date:</strong> ${savedBooking.date}</p>
                            <p><strong>Number of Persons:</strong> ${savedBooking.numberOfPersons}</p>
                            <p><strong>Total Price:</strong> ₹${savedBooking.price}</p>
                        </div>
                        <p> Thank You for Booking with us! </p>
                        <p>We look forward to providing you with an unforgettable experience. If you have any questions or need assistance, feel free to contact us.</p>
                        <p>Best Regards</>
                        <p>Str Adventures </>
        
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Str Adventures. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;
        const adminEmailText = `
        <h1>New Booking Alert</h1>
        <p>A new booking has been made:</p>
        <p><strong>Package Name:</strong> ${savedBooking.packageName}</p>
        <p><strong>Name:</strong> ${savedBooking.name}</p>
        <p><strong>Email:</strong> ${savedBooking.email}</p>
        <p><strong>Phone Number:</strong> ${savedBooking.phoneNumber}</p>
        <p><strong>Booking Date:</strong> ${savedBooking.date}</p>
        <p><strong>Number of Persons:</strong> ${savedBooking.numberOfPersons}</p>
        <p><strong>Total Price:</strong> ₹${savedBooking.price}</p>
      `;
        try {
          sendEmail(req.body.email, 'Booking Confirmation', emailText);
          sendEmail('stradventures13@gmail.com', 'New Booking Alert', adminEmailText);
            res.status(200).json({ success: true, message: 'Your tour is booked and a confirmation email has been sent.  ', data: savedBooking });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            res.status(200).json({ success: true, message: 'Your tour is booked, but there was an error sending the confirmation email', data: savedBooking });
        }
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ success: false, message: 'Validation error', details: err.message });
        } else {
            console.error('Internal server error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }
};




const getBookings = async (req, res) => {
    try {
        // console.log({  user: req.user, type: req.user.type, eval: req.user.type === "user"})
        if (req.user.type === "user") {

            res.status(200).json(await BookingModel.find({ email: req.user.email }));
        } else {
            res.status(200).json(await BookingModel.find());
        }
        // console.log(req.user); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Update a booking
    const updateBooking = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        // if (req.user.type !== 'admin') {
        //     return res.status(403).json({ message: 'Access denied. Admins only.' });
        //   }
        const updatedBooking = await BookingModel.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json(updatedBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a booking
const deleteBooking = async (req, res) => {
    try {
        // if (req.user.type !== 'admin') {
        //     return res.status(403).json({ message: 'Access denied. Admins only.' });
        //   }
        const { id } = req.params;

        const booking = await BookingModel.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTotalBookings = async (req, res) => {
    try {
        const bookings = await BookingModel.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  }
export default { createBooking, getBookings, updateBooking, deleteBooking,getTotalBookings }




