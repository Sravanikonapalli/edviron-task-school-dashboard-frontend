import axios from 'axios';

const API_URL = "http://localhost:3000/api"; // Backend API URL

export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    console.log("API Response in getTransactions:", response.data); 

    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

// Fetch transactions for a specific school
export const getTransactionsBySchool = async (school_id) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/by-school`, {
      params: { school_id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions by school:", error);
    throw error;
  }
};

// Fetch transaction status by custom_order_id
export const getTransactionStatus = async (custom_order_id) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/status`, {
      params: { custom_order_id },
    });
    return response.data;
  } catch (error) {
    console.error("Error checking transaction status:", error);
    throw error;
  }
};
