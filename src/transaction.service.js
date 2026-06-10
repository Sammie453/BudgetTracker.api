const getMonthlyReport = (
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

    return {
        month,
        year,
        totalSpent:
            monthlyTransactions.reduce(
                (sum, transaction) =>
                    sum + transaction.amount,
                0
            ),
        transactionCount:
            monthlyTransactions.length
    };
};

module.exports = {
    getMonthlyReport
};