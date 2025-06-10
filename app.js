const express = require('express');
const app = express();
app.use(express.json());

const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const errorHandler = require('./middleware/errorHandler');

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/messages', messageRoutes);

// Error handler (must be after routes)
app.use(errorHandler);

module.exports = app;
