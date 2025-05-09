// import React, { useEffect, useState } from 'react';
// import './Notification.css';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Adjust if your backend port is different

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     socket.on('newNotification', (notification) => {
//       setNotifications((prev) => [notification, ...prev]);
//     });

//     return () => {
//       socket.off('newNotification');
//     };
//   }, []);

//   return (
//     <div className="notification-container">
//       <h3>🔔 Notifications</h3>
//       {notifications.length === 0 ? (
//         <p className="no-notifications">No new notifications.</p>
//       ) : (
//         <ul className="notification-list">
//           {notifications.map((notif, index) => (
//             <li key={index} className="notification-item">
//               <strong>{notif.title}</strong>
//               <p>{notif.message}</p>
//               <span>{new Date(notif.timestamp).toLocaleString()}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notification;
import React, { useEffect, useState } from 'react';
import './Notification.css';
import { io } from 'socket.io-client';
import api from '../services/api';

const socket = io('http://localhost:5000'); // Adjust port as needed

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch existing notifications from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await api.get('/notifications'); // Ensure backend has this route
        setNotifications(res.data.reverse()); // Show latest first
      } catch (error) {
        console.error('Failed to load notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  // Listen for real-time notifications
  useEffect(() => {
    socket.on('newNotification', (notification) => {
      setNotifications(prev => {
        const exists = prev.some(n => n.id === notification.id); // prevent duplicates
        if (exists) return prev;
        return [notification, ...prev];
      });
    });

    return () => {
      socket.off('newNotification');
    };
  }, []);

  return (
    <div className="notification-container">
      <h3>🔔 Notifications</h3>
      {notifications.length === 0 ? (
        <p className="no-notifications">No notifications yet. Stay tuned for updates!</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notif, index) => (
            <li key={index} className="notification-item">
              <strong>{notif.title}</strong>
              <p>{notif.message}</p>
              <span className="timestamp">
                {new Date(notif.timestamp).toLocaleString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
