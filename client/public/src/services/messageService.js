import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const sendMessage = async (userId, roomId, text) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, {
      userId,
      roomId,
      text,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message', error);
    throw error;
  }
};

export const getMessages = async (roomId) => {
  try {
    const response = await axios.get(`${API_URL}/messages/${roomId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages', error);
    throw error;
  }
};
