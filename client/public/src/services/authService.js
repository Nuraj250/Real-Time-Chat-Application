import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration', error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
};
