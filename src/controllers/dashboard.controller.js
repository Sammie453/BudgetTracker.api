const transactionRepository =
    require('../repositories/transaction.repository');

const budgetRepository =
    require('../repositories/budget.repository');

const getSummary = (req, res) => {

    const transactions =
        transactionRepository.getAll();

    const budgets =
        budgetRepository.getAll();

    const totalSpent =
        transactions.reduce(
            (sum, transaction) =>
                sum + transaction.amount,
            0
        );

    const totalBudget =
        budgets.reduce(
            (sum, budget) =>
                sum + budget.limit,
            0
        );

    res.json({
        totalTransactions:
            transactions.length,
        totalSpent,
        totalBudget,
        remainingBudget:
            totalBudget - totalSpent
    });
};

module.exports = {
    getSummary
};