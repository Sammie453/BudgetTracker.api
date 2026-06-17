const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

router.post('/check', notificationController.checkAlerts);

module.exports = router;