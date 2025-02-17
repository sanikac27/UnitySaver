import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API calls
export const fetchTransactions = async () => {
  const response = await api.get('/api/transactions');
  return response.data;
};

export const createTransaction = async (data) => {
  const response = await api.post('/api/transactions', data);
  return response.data;
};

export default api;
