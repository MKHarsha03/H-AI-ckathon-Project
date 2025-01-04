import React, { useState } from 'react';
import '../index.css';

const ChatInput = ({ onSendMessage, onResetChat }) => {
  const [text, setText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSend();
      event.preventDefault();
    }
  };

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="chat-input">
      <button 
        className="reset-button" 
        onClick={onResetChat} 
      >
        <img src="https://cdn-icons-png.freepik.com/256/3047/3047185.png?semt=ais_hybrid" alt="Refresh" width="30" height="30" />
      </button>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask LAAW AI something..." 
        rows={1}
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
