import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username, password });
  return response.data;
};

export const getMemberDetails = async (memberId) => {
  const response = await axios.get(`${API_URL}/members/${memberId}`);
  return response.data;
};

export const createDeposit = async (memberId, amount) => {
  const response = await axios.post(`${API_URL}/deposits`, { memberId, amount });
  return response.data;
};
