const express = require('express');
const cors = require('cors');

const expenseRoutes = require('./routes/expense.routes');
const incomeRoutes = require('./routes/income.routes');
const summaryRoutes = require('./routes/summary.routes');

const errorHandler = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/summary', summaryRoutes);

app.use(errorHandler);

module.exports = app;

const expenseRoutes = require('./routes/expense.routes');
const incomeRoutes = require('./routes/income.routes');
const summaryRoutes = require('./routes/summary.routes');
app.use((errorHandler));

const express = require('express');
const app = express();

const categoryRoutes =
    require('./routes/categoryRoutes');

app.use(express.json());

app.use('/api/categories', categoryRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});