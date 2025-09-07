import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/login`, user);
  return response.data;
};

export const saveToken = (token) => {
  localStorage.setItem('jwt', token);
};

export const getToken = () => {
  return localStorage.getItem('jwt');
};

export const logout = () => {
  localStorage.removeItem('jwt');
};
