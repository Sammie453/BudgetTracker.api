const notificationService = require('../services/notification.service');

exports.checkAlerts = async (req, res) => {
    const { budgetAmount, currentSpending } = req.body;

    const alert = notificationService.checkBudgetAlerts(
        budgetAmount,
        currentSpending
    );

    if (!alert) {
        return res.status(200).json({
            message: 'No alerts'
        });
    }

    res.status(200).json(alert);
};