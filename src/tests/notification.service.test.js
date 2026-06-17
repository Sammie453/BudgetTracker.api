const notificationService = require('../services/notification.service');

describe('Notification Service', () => {

    test('should return INFO alert', () => {
        const result =
            notificationService.checkBudgetAlerts(1000, 800);

        expect(result.type).toBe('INFO');
    });

    test('should return WARNING alert', () => {
        const result =
            notificationService.checkBudgetAlerts(1000, 950);

        expect(result.type).toBe('WARNING');
    });

    test('should return CRITICAL alert', () => {
        const result =
            notificationService.checkBudgetAlerts(1000, 1100);

        expect(result.type).toBe('CRITICAL');
    });

});