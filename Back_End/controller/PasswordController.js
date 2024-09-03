import userModel from "../models/user.js";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcryptjs from "bcryptjs"


const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate a reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
      await user.save();
  
      // Send email with reset link
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        to: user.email,
        from: 'stradventures13@gmail.com',
        subject: 'Password Reset',
        text: `You are receiving this because you have requested the reset of the password for your account.\n\n
          Please click on the following link\n\n
          http://localhost:3000/#/reset-password/${resetToken}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };
  
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error('There was an error:', error);
          return res.status(500).json({ message: 'Email could not be sent' });
        }
        res.status(200).json({ message: 'Password reset email sent' });
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
  
    try {
      const user = await userModel.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // Hash the new password before saving
      const hashedPassword = await bcryptjs.hash(newPassword, 10);
  
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
  
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export default {
    forgotPassword,
    resetPassword,
  };