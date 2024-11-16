import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createFormData } from '../utils/formData';
import { useAuth } from '../hooks/useAuth';

const ChatPage = () => {
  const { authToken } = useAuth();
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!authToken) {
      history.push('/login');
    }

    // Here you would fetch existing messages from the backend
    // Example: setMessages(fetchedMessages);
  }, [authToken, history]);

  const sendMessage = () => {
    // You can send the message to the backend and update the state
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="chat-page">
      <h2>Chat Room</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;
