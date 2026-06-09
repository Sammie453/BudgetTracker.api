// services/budget.service.js

let budgets = [];

const setBudget = (category, limit) => {
    const budget = { category, limit };

    const existing = budgets.find(
        b => b.category === category
    );

    if (existing) {
        existing.limit = limit;
        return existing;
    }

    budgets.push(budget);
    return budget;
};

const getBudget = (category) => {
    return budgets.find(
        b => b.category === category
    );
};

const checkBudget = (
    category,
    currentSpending
) => {
    const budget = getBudget(category);

    if (!budget) {
        return {
            exceeded: false,
            message: 'No budget set'
        };
    }

    return {
        exceeded: currentSpending > budget.limit,
        remaining:
            budget.limit - currentSpending
    };
};

module.exports = {
    setBudget,
    getBudget,
    checkBudget
};