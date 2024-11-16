import React, { useState, useEffect } from 'react';
import { getMessages, sendMessage } from '../services/messageService';
import Message from './Message';

const ChatBox = ({ userId, roomId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages when the component mounts or roomId changes
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getMessages(roomId);
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, [roomId]);

  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (message.trim()) {
      try {
        // Send the message and clear the input field
        await sendMessage(userId, roomId, message);
        setMessage('');
        // Optionally update the UI with new message immediately
        setMessages((prevMessages) => [
          ...prevMessages,
          { userId, text: message, createdAt: new Date() },
        ]);
      } catch (error) {
        console.error('Error sending message', error);
      }
    }
  };

  return (
    <div className="chatbox bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="messages space-y-4 overflow-y-auto h-72 mb-4">
        {messages.map((msg) => (
          <Message key={msg._id} message={msg} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message"
          className="flex-1 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
