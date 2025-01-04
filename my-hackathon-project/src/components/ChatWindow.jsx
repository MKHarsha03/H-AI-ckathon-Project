import React from 'react';
import '../index.css';

const ChatWindow = ({ messages }) => {
  console.log('Messages:', messages); // Debug log to check messages array
  return (
    <div className="chat-window">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))
      ) : (
        <div>No messages yet. Start the conversation!</div>
      )}
    </div>
  );
};

export default ChatWindow;