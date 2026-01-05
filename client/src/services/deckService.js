import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

// ADD COMPANY
export const addDeck = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/api/deck/add`, formData);
        return response.data;
    } catch (error) {
        console.error('Error on addDeck:', error);
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to adding deck'
        };
    }
};
