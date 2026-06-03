const incomeRepository =
    require('../repositories/income.repository');

const expenseRepository =
    require('../repositories/expense.repository');

const getSummary = (req, res) => {
    const totalIncome =
        incomeRepository.getAll()
            .reduce((sum, item) =>
                sum + Number(item.amount), 0);

    const totalExpenses =
        expenseRepository.getAll()
            .reduce((sum, item) =>
                sum + Number(item.amount), 0);

    const balance =
        totalIncome - totalExpenses;

    res.json({
        totalIncome,
        totalExpenses,
        balance
    });
};

module.exports = {
    getSummary
};