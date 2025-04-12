import React, { useEffect, useState } from 'react';
import './Notification.css';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust if your backend port is different

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('newNotification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      socket.off('newNotification');
    };
  }, []);

  return (
    <div className="notification-container">
      <h3>🔔 Notifications</h3>
      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notif, index) => (
            <li key={index} className="notification-item">
              <strong>{notif.title}</strong>
              <p>{notif.message}</p>
              <span>{new Date(notif.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
