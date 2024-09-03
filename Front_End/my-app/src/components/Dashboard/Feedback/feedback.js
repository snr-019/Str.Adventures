import React, { useState } from 'react';
import axios from 'axios';
import './feedback.css'; 
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // Controls the dialog visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/feedback`, { name, feedback });
      if (response.status === 200) {
        setOpen(true); // Show the dialog on successful submission
        setName('');
        setFeedback('');
      }
    } catch (error) {
      setError('Failed to submit feedback.');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  return (
    <div className="feedback-form-container">
      <h2 style={{color:'#0f7c6c',textAlign:'center'}}>Give Us Your Feedback!</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}

      {/* Dialog for Feedback Submission */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback Submitted</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your feedback!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackForm;
