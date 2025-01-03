import React from 'react';
import '../index.css';

const ChatMessage = ({ text, sender }) => (
  <div className={`message-container ${sender === 'user' ? 'user' : 'bot'}`}>
    {sender === 'bot' && <div className="bot-logo">🤖</div>}
    <div className="message-content">{text}</div>
  </div>
);

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} sender={msg.sender} />
        ))
      ) : (
        <div>No messages yet. Start the conversation!</div>
      )}
    </div>
  );
};

export default ChatWindow;