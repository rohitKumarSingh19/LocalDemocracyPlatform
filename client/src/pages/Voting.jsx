// import React, { useState } from 'react';
// import api from '../services/api';

// const Voting = () => {
//   //const [__pollId, setPollId] = useState('123');
//   const pollId='123'
//   const [option, setOption] = useState('');

//   const handleVote = async (e) => {
//     e.preventDefault();
//     await api.post('/vote', {pollId, option });
//     alert('Vote submitted');
//     setOption('');
//   };

//   return (
//     <form onSubmit={handleVote}>
//       <h2>Community Voting</h2>
//       <input
//         placeholder="Your option"
//         value={option}
//         onChange={e => setOption(e.target.value)}
//         required
//       />
//       <button type="submit">Vote</button>
//     </form>
//   );
// };

// export default Voting;
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../services/api';

const socket = io('http://localhost:5000'); // change URL in production

const Voting = () => {
  const [option, setOption] = useState('');
  const [votes, setVotes] = useState([]);
  const pollId = '123'; // Ideally dynamic

  useEffect(() => {
    socket.on('vote-submitted', (data) => {
      if (data.pollId === pollId) {
        setVotes(prev => [...prev, data]); // Add new vote
      }
    });

    return () => {
      socket.off('vote-submitted');
    };
  }, []);

  const handleVote = async (e) => {
    e.preventDefault();
    try {
      await api.post('/vote', { pollId, option });
      setOption('');
    } catch (err) {
      alert(err.response?.data?.message || 'Vote failed');
    }
  };

  return (
    <div>
      <h2>Community Voting</h2>
      <form onSubmit={handleVote}>
        <input
          placeholder="Your option"
          value={option}
          onChange={e => setOption(e.target.value)}
          required
        />
        <button type="submit">Vote</button>
      </form>

      <h3>🗳️ Live Votes</h3>
      <ul>
        {votes.map((v, idx) => (
          <li key={idx}>{v.option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Voting;
