const validateIncome = (req, res, next) => {
    const { source, amount } = req.body;

    if (!source || source.trim() === '') {
        return res.status(400).json({
            message: 'Income source is required'
        });
    }

    if (!amount || Number(amount) <= 0) {
        return res.status(400).json({
            message: 'Amount must be greater than 0'
        });
    }

    next();
};

module.exports = validateIncome;