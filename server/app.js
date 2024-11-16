const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
