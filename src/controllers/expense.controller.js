const repository =
    require('../repositories/expense.repository');

const createExpense = (req, res) => {
    const { title, amount, category } = req.body;

    const expense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        createdAt: new Date()
    };

    repository.create(expense);
    const getById = (id) => {
    return expenses.find(
        expense => expense.id === Number(id)
    );
};

    res.status(201).json({
        message: 'Expense created successfully',
        data: expense
    });
    module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
const updateExpense = (req, res) => {
    const expense =
        repository.update(
            req.params.id,
            req.body
        );

    if (!expense) {
        return res.status(404).json({
            message: 'Expense not found'
        });
    }

    res.json(expense);
};
const deleteExpense = (req, res) => {
    const deleted =
        repository.remove(req.params.id);

    if (!deleted) {
        return res.status(404).json({
            message: 'Expense not found'
        });
    }

    res.status(204).send();
};
};