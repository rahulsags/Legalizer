import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust the base URL as needed

// Function to upload a legal document
export const uploadDocument = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/documents/upload/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading document: ' + error.message);
    }
};

// Function to get simplified text for a document
export const getSimplifiedText = async (documentId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/documents/${documentId}/simplified/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching simplified text: ' + error.message);
    }
};

// Function to submit feedback on the generated text
export const submitFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/feedback/`, feedbackData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting feedback: ' + error.message);
    }
};