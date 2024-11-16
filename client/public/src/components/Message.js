import React from 'react';

const Message = ({ message }) => {
  const { userId, text, createdAt } = message;

  return (
    <div className="message flex items-start space-x-2">
      <div className="message-content bg-white p-3 rounded-lg shadow-sm">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">User {userId}</span>
          <span className="text-sm text-gray-500">
            {new Date(createdAt).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-gray-800 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Message;
