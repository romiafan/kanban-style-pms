import axios from 'axios';

export const updateTask = async (task) => {
  const response = await axios.put(`${API_BASE_URL}/api/tasks/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`);
  return response.data;
};
export const createTask = async (task) => {
  const response = await axios.post(`${API_BASE_URL}/api/tasks`, task);
  return response.data;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/projects`);
  return response.data;
};

export const createProject = async (project) => {
  const response = await axios.post(`${API_BASE_URL}/api/projects`, project);
  return response.data;
};
