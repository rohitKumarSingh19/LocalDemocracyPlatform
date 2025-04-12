const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const connectDB = require('./config/db');

// Initialize App and Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/feedback', feedbackRoutes);

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*', // Adjust this in production
    methods: ['GET', 'POST']
  }
});

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('✅ New client connected:', socket.id);

  // Example: Receive and broadcast notifications
  socket.on('send-notification', (data) => {
    console.log('📢 Notification received:', data);
    io.emit('receive-notification', data); // Send to all clients
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// Listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
