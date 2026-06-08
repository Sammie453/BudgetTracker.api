// repositories/category.repository.js

let categories = [];

const getAll = () => categories;

const getById = (id) => {
    return categories.find(category => category.id === Number(id));
};

const create = (category) => {
    categories.push(category);
    return category;
};

const update = (id, updatedData) => {
    const index = categories.findIndex(
        category => category.id === Number(id)
    );

    if (index === -1) return null;

    categories[index] = {
        ...categories[index],
        ...updatedData
    };

    return categories[index];
};

const remove = (id) => {
    const index = categories.findIndex(
        category => category.id === Number(id)
    );

    if (index === -1) return false;

    categories.splice(index, 1);
    return true;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};