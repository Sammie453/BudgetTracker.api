// tests/budget.service.test.js

const budgetService =
    require('../services/budget.service');

describe('Budget Service', () => {

    test('should create a budget', () => {

        const budget =
            budgetService.setBudget(
                'Food',
                500
            );

        expect(budget.category)
            .toBe('Food');

        expect(budget.limit)
            .toBe(500);
    });

    test('should retrieve a budget', () => {

        const budget =
            budgetService.getBudget(
                'Food'
            );

        expect(budget).toBeDefined();
        expect(budget.limit)
            .toBe(500);
    });

    test('should detect exceeded budget', () => {

        const result =
            budgetService.checkBudget(
                'Food',
                600
            );

        expect(result.exceeded)
            .toBe(true);
    });
});