let expenses = [];

// Get all expenses
const getAll = () => {
    return expenses;
};

// Get expense by ID
const getById = (id) => {
    return expenses.find(
        expense => expense.id === Number(id)
    );
};

// Create expense
const create = (expense) => {
    expenses.push(expense);
    return expense;
};

// Update expense
const update = (id, updatedData) => {
    const index = expenses.findIndex(
        expense => expense.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    expenses[index] = {
        ...expenses[index],
        ...updatedData
    };

    return expenses[index];
};

// Delete expense
const remove = (id) => {
    const index = expenses.findIndex(
        expense => expense.id === Number(id)
    );

    if (index === -1) {
        return false;
    }

    expenses.splice(index, 1);
    return true;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};