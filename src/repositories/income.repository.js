let incomes = [];

const getAll = () => incomes;

const getById = (id) =>
    incomes.find(i => i.id === Number(id));

const create = (income) => {
    incomes.push(income);
    return income;
};

const update = (id, data) => {
    const income = getById(id);

    if (!income) return null;

    Object.assign(income, data);

    return income;
};

const remove = (id) => {
    const index = incomes.findIndex(
        i => i.id === Number(id)
    );

    if (index === -1) return false;

    incomes.splice(index, 1);

    return true;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};