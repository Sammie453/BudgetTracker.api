const repository = require('../repositories/income.repository');

const getAllIncome = (req, res) => {
    res.json(repository.getAll());
};

const createIncome = (req, res) => {
    const income = {
        id: Date.now(),
        source: req.body.source,
        amount: req.body.amount,
        date: req.body.date
    };

    repository.create(income);

    res.status(201).json(income);
};

module.exports = {
    getAllIncome,
    createIncome
};