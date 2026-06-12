const express = require('express');
const router = express.Router();

const controller = require('../controllers/expense.controller');

// GET all
router.get('/', controller.getAllExpenses);

// CREATE
router.post('/', controller.createExpense);

// GET by id
router.get('/:id', controller.getExpenseById);

// DELETE
router.delete('/:id', controller.deleteExpense);

module.exports = router;