import StripeApp from 'stripe'
import BookingModel from "../models/booking.js";
import dotenv from "dotenv";
dotenv.config()
const stripe = StripeApp(process.env.STRIPE_KEY)
 const paymentIntents = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.price, // amount in cents
      currency: 'inr',
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}



const confirmPayment = async (req, res) => {
  const { packageId, paymentIntentId } = req.body;

  if (!packageId || !paymentIntentId) {
    return res.status(400).json({ error: 'Package ID and Payment Intent ID are required.' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ error: 'Payment has not been completed successfully.' });
    }

    const updatedBooking = await BookingModel.findOneAndUpdate(
      { _id: packageId },
      { paymentStatus: 'confirmed' },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }

    res.status(200).json({
      success: true,
      message: 'Payment confirmed and booking updated successfully.',
      booking: updatedBooking,
    });
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




export default {
   paymentIntents,
   confirmPayment
}
