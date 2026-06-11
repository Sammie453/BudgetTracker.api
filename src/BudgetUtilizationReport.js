const getBudgetReport = (
    budgets,
    transactions
) => {

    return budgets.map(budget => {

        const spent =
            transactions
                .filter(
                    transaction =>
                        transaction.category ===
                        budget.category
                )
                .reduce(
                    (sum, transaction) =>
                        sum + transaction.amount,
                    0
                );

        return {
            category:
                budget.category,
            limit:
                budget.limit,
            spent,
            remaining:
                budget.limit - spent
        };
    });
};