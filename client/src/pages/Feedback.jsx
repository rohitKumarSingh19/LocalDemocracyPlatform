import React, { useState } from 'react';
import api from '../services/api';

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [representative, setRepresentative] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/feedback', { representative, message });
    alert('Feedback sent');
    setMessage('');
    setRepresentative('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Feedback</h2>
      <input
        placeholder="Representative"
        value={representative}
        onChange={e => setRepresentative(e.target.value)}
        required
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Feedback;
