import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Initiatives = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/initiatives', { title, description });
    setTitle('');
    setDescription('');
    fetchInitiatives();
  };

  const fetchInitiatives = () => {
    api.get('/initiatives').then(res => setList(res.data));
  };

  useEffect(() => {
    fetchInitiatives();
  }, []);

  return (
    <div>
      <h2>Neighborhood Initiatives</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
      <ul>
        {list.map((init, i) => (
          <li key={i}>{init.title}: {init.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Initiatives;