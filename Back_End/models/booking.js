import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please provide user's name"],
  },
  email: {
    type: String,
    required: [true, "Please provide user's email"],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide Phone Number "]
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  numberOfPersons: {
    type: Number,
    required: true,
    min: 1,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'failed'],
    default: 'pending',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConsentForms',
    }
});


const BookingModel = mongoose.model('Bookings', bookingSchema);
export default BookingModel
