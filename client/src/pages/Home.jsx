import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Home = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    api.get('/notifications')
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Neighborhood Notifications</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
