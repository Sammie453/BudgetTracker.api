// services/transaction.service.js

const getMonthlySummary = (
    transactions,
    month,
    year
) => {

    const monthlyTransactions =
        transactions.filter(transaction => {

            const date =
                new Date(transaction.createdAt);

            return (
                date.getMonth() + 1 === month &&
                date.getFullYear() === year
            );
        });

    const totalSpent =
        monthlyTransactions.reduce(
            (sum, transaction) =>
                sum + transaction.amount,
            0
        );

    return {
        month,
        year,
        transactionCount:
            monthlyTransactions.length,
        totalSpent
    };
};

module.exports = {
    getMonthlySummary
};