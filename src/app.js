const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const expenseRoutes = require('./routes/expense.routes');
const incomeRoutes = require('./routes/income.routes');
const summaryRoutes = require('./routes/summary.routes');
const categoryRoutes = require('./routes/categoryRoutes');
const dashboardRoutes = require('./routes/dashboard.routes');

// Route usage
app.use('/api/expenses', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/summary', summaryRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Budget Tracker API running' });
});

// Error handler (must be last)
const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);

module.exports = app;