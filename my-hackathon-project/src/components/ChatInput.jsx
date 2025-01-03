import React, { useState } from 'react';
import '../index.css';

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      console.log('Sending message:', text); // Debug log
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="chat-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask LAAW AI something..." // Updated placeholder
        rows={1}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;