const getAllExpenses = (req, res) => {
  res.json([]);
};

const createExpense = (req, res) => {
  res.status(201).json(req.body);
};

const getExpenseById = (req, res) => {
  res.json({ _id: req.params.id });
};

const deleteExpense = (req, res) => {
  res.json({ message: 'Deleted' });
};

module.exports = {
  getAllExpenses,
  createExpense,
  getExpenseById,
  deleteExpense
};