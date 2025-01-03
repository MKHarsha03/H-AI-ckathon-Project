import React, { useState } from 'react';
import ChatWindow from './chatWindow';
import ChatInput from './chatInput';
import '../index.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const userMessage = { text, sender: 'user' };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { text: `🤖 Copilot says: "${text}"`, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="app-container">
      <div className="chat-section">
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
