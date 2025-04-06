import axios from 'axios';

const API_BASE_URL = "http://localhost:5000";

export const analyzeInvestment = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/analyze`, data);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
