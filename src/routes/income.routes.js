const express = require('express');
const router = express.Router();

const controller =
    require('../controllers/income.controller');

router.get('/', controller.getAllIncome);
router.post('/', controller.createIncome);

module.exports = router;