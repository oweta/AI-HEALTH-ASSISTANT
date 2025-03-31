// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: 'user', text: userInput }]);
    const response = await fetchChatbotResponse(userInput); // Call backend API to get response
    setMessages([...messages, { sender: 'bot', text: response }]);
    setUserInput('');
  };

  return (
    <div>
      <div className="chatbox">
        {messages.map((message, idx) => (
          <div key={idx} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
