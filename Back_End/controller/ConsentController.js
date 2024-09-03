import mongoose from "mongoose";
import ConsentModel from "../models/consent.js";
import BookingModel from "../models/booking.js";

const submitConsentForm = async (req, res) => {
    try {
      const formData = req.body;
      const consentForm = new ConsentModel({...formData,userId:req.user._id});
      await consentForm.save();
  
      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to submit form', details: error.message });
    }
  };
  
  const getConsentFormDetails = async (req, res) => {
    try {
     
      const bookingId = req.params.id;
      // Retrieve the booking from the database to get the consentFormId
      const booking = await BookingModel.findById(bookingId);

  
      // Use the consentFormId to retrieve the consent form
      const consentForm = await ConsentModel.findOne({userId:booking.userId});
  
      if (!consentForm) {
        console.warn(`Consent form with ID ${booking.consentFormId} not found`);
        return res.status(404).json({ message: 'Consent form not found' });
      }
  
      // Respond with the consent form details if found
      res.status(200).json(consentForm);
    } catch (error) {
      console.error('Error fetching consent form:', error);
      res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };

 
    export default {
    submitConsentForm,
    getConsentFormDetails
  };