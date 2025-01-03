import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import '../index.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const userMessage = { text, sender: 'user' };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { text, sender: 'bot' }; 
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="app-container"> 
      <div className="chat-section">
        <h1 className="chat-heading">LAAW AI</h1>
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;