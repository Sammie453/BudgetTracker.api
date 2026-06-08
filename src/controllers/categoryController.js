// controllers/categoryController.js

const repository = require('../repositories/category.repository');

const getAll = (req, res) => {
    res.json(repository.getAll());
};

const getById = (req, res) => {
    const category = repository.getById(req.params.id);

    if (!category) {
        return res.status(404).json({
            message: 'Category not found'
        });
    }

    res.json(category);
};

const create = (req, res) => {
    const category = {
        id: Date.now(),
        name: req.body.name
    };

    repository.create(category);

    res.status(201).json(category);
};

const update = (req, res) => {
    const category = repository.update(
        req.params.id,
        req.body
    );

    if (!category) {
        return res.status(404).json({
            message: 'Category not found'
        });
    }

    res.json(category);
};

const remove = (req, res) => {
    const deleted = repository.remove(req.params.id);

    if (!deleted) {
        return res.status(404).json({
            message: 'Category not found'
        });
    }

    res.status(204).send();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};