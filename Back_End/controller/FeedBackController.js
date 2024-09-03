import FeedbackModel from "../models/feedback.js"; 

const submitFeedback = async (req, res) => {
    const { name, feedback } = req.body;

    try {
        const newFeedback = new FeedbackModel({ 
            name,
            feedback,
        });

        await newFeedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { submitFeedback }; 
