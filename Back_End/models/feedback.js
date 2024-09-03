import mongoose from "mongoose"

const FeedbackSchema = new mongoose.Schema({
  name: 
      { type: String,
        required: true
      },

  feedback:
   { type: String,
     required: true },
     
});

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

export default FeedbackModel
