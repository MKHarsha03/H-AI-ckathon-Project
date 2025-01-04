import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import '../index.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMessage = { text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (data.response) {
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage = { text: 'Error: No response from the bot.', sender: 'bot' };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { text: '❌ Failed to fetch response from backend.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleResetChat = () => {
    setMessages([]);
  };

  return (
    <div className="app-container">
      <div className="chat-section">
        <h1 className="chat-heading">LAAW AI</h1>
        <ChatWindow messages={messages} />
        <ChatInput 
          onSendMessage={sendMessage} 
          onResetChat={handleResetChat} 
        />
      </div>
    </div>
  );
};

export default ChatApp;
