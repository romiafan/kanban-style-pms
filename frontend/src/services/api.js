import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/projects`);
  return response.data;
};

// Add more API functions as needed
