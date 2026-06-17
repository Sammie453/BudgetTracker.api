const express = require('express');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/expenses', require('./routes/expense.routes'));

// error handler (if you have one)
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const notificationRoutes = require('./routes/notification.routes');

app.use('/api/notifications', notificationRoutes);

module.exports = app;