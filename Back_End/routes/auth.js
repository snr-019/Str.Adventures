import express from "express";
import UserControllers from "../controller/UserController.js";
import emailContact from "../Services/emailContact.js";
import BookingController from "../controller/BookingController.js";
import authMiddleware from "../middelware/auth.js";
import PasswordController from "../controller/PasswordController.js";
import PaymentController from "../controller/PaymentController.js";
import FeedBackController from "../controller/FeedBackController.js";
import ConsentController from "../controller/ConsentController.js";

const router = express.Router()

router.post('/login', UserControllers.login)
router.post('/new-user', UserControllers.newRegister)
router.get('/users' ,authMiddleware,UserControllers.getAllUsers)
router.get('/profile',authMiddleware,UserControllers.getUserProfile);
router.get('/getuser',UserControllers.getUsers);
router.put('/update-profile',authMiddleware,UserControllers.updateUserProfile)



router.post('/newbooking',authMiddleware,BookingController.createBooking);
router.get('/bookings',authMiddleware,BookingController.getBookings);
router.get('/getbookings',BookingController.getTotalBookings);
router.put('/updatebookings/:id', BookingController.updateBooking);
router.delete('/deletebookings/:id',authMiddleware, BookingController.deleteBooking);




router.post('/forgot-password', PasswordController.forgotPassword);
router.post('/reset-password/:token', PasswordController.resetPassword);


router.post('/create-payment-intent', PaymentController.paymentIntents);
router.post('/confirmed-payment',PaymentController.confirmPayment);




router.post('/send',emailContact.sendEmail);
router.post('/feedback',FeedBackController.submitFeedback);


router.post('/consent-form',authMiddleware,ConsentController.submitConsentForm);
router.get('/consent/:id',authMiddleware,ConsentController.getConsentFormDetails);



export default router
