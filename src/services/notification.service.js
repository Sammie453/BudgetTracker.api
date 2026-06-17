const checkBudgetAlerts = (budgetAmount, currentSpending) => {
    const percentageUsed = (currentSpending / budgetAmount) * 100;

    if (percentageUsed >= 100) {
        return {
            type: 'CRITICAL',
            message: 'Budget exceeded!'
        };
    }

    if (percentageUsed >= 90) {
        return {
            type: 'WARNING',
            message: 'You have used 90% of your budget.'
        };
    }

    if (percentageUsed >= 75) {
        return {
            type: 'INFO',
            message: 'You have used 75% of your budget.'
        };
    }

    return null;
};

module.exports = {
    checkBudgetAlerts
};