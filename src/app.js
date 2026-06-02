const express = require('express');
const cors = require('cors');

const expenseRoutes = require('./routes/expense.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);

module.exports = app;