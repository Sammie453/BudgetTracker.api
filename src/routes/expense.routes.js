const express = require('express');
const router = express.Router();

const controller =
    require('../controllers/expense.controller');

const validateExpense =
    require('../middleware/expense.validation');

router.get('/', controller.getAllExpenses);

router.post(
    '/id',
    validateExpense,
    controller.createExpense
);
router.put(
        '/:id',
        validateExpense,
        controller.updateExpense
 );
router.delete('/:id', controller.deleteExpense);

module.exports = router;
router.get('/:id', controller.getExpenseById);