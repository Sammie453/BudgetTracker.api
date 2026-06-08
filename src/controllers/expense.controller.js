const repository = require('../repositories/expense.repository');

// GET ALL
const getAll = (req, res) => {
    const expenses = repository.getAll();
    res.json(expenses);
};

// GET BY ID
const getById = (req, res) => {
    const expense = repository.getById(req.params.id);

    if (!expense) {
        return res.status(404).json({
            message: 'Expense not found'
        });
    }

    res.json(expense);
};

// CREATE
const create = (req, res) => {
    const { title, amount, category } = req.body;

    const expense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        createdAt: new Date()
    };

    repository.create(expense);

    res.status(201).json({
        message: 'Expense created successfully',
        data: expense
    });
};

// UPDATE
const update = (req, res) => {
    const updated = repository.update(req.params.id, req.body);

    if (!updated) {
        return res.status(404).json({
            message: 'Expense not found'
        });
    }

    res.json(updated);
};

// DELETE
const remove = (req, res) => {
    const deleted = repository.remove(req.params.id);

    if (!deleted) {
        return res.status(404).json({
            message: 'Expense not found'
        });
    }

    res.status(204).send();
};

// EXPORT (MUST BE LAST)
module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};