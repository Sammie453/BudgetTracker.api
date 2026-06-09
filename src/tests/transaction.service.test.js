// tests/transaction.service.test.js

const transactionService =
    require('../services/transaction.service');

describe(
    'Transaction Service',
    () => {

        test(
            'should calculate monthly summary',
            () => {

                const transactions = [
                    {
                        amount: 100,
                        createdAt:
                            '2026-06-01'
                    },
                    {
                        amount: 200,
                        createdAt:
                            '2026-06-10'
                    },
                    {
                        amount: 300,
                        createdAt:
                            '2026-05-01'
                    }
                ];

                const summary =
                    transactionService
                        .getMonthlySummary(
                            transactions,
                            6,
                            2026
                        );

                expect(
                    summary.totalSpent
                ).toBe(300);

                expect(
                    summary.transactionCount
                ).toBe(2);
            }
        );
    }
);