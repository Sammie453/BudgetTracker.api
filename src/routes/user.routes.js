const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.get(
    '/profile',
    controller.getProfile
);
router.put(
    '/profile',
    controller.updateProfile
);
router.post(
    '/profile',
    controller.updateProfile
);

module.exports = router;