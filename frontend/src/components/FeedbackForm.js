import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ feedback, rating });
            setFeedback('');
            setRating(5);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <h3>Feedback</h3>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
                required
            />
            <div>
                <label>Rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;