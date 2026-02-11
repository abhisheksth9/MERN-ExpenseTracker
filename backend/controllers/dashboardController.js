    const Income = require("../models/Income");
    const Expense = require("../models/Expense");
    const { Types } = require("mongoose");

    exports.getDashboardData = async (req, res) => {
        try {
            const userId = new Types.ObjectId(req.user.id);

            const totalIncome = await Income.aggregate([
                { $match: { userId } },
                { $group: { _id: null, total: { $sum: "$amount" } } },
            ]);

            const totalExpense = await Expense.aggregate([
                { $match: { userId } },
                { $group: { _id: null, total: { $sum: "$amount" } } },
            ]);

            const last60daysIncomeTransactions = await Income.find({
                userId,
                date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
            }).sort({ date: -1 });

            const incomeLast60Days = last60daysIncomeTransactions.reduce(
                (sum, tx) => sum + tx.amount,
                0
            );

            const last30daysExpenseTransactions = await Expense.find({
                userId,
                date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
            }).sort({ date: -1 });

            const expenseLast30Days = last30daysExpenseTransactions.reduce(
                (sum, tx) => sum + tx.amount,
                0
            );

            const lastTransactions = [
                ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map(
                    (txn) => ({ ...txn.toObject(), type: "income" })
                ),
                ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map(
                    (txn) => ({ ...txn.toObject(), type: "expense" })
                ),
            ].sort((a, b) => b.date - a.date);

            res.json({
                totalBalance:
                    (totalIncome[0]?.total || 0) -
                    (totalExpense[0]?.total || 0),

                totalIncome: totalIncome[0]?.total || 0,
                totalExpense: totalExpense[0]?.total || 0,

                last30DaysExpense: {
                    total: expenseLast30Days,
                    transactions: last30daysExpenseTransactions,
                },

                last60DaysIncome: {
                    total: incomeLast60Days,
                    transactions: last60daysIncomeTransactions,
                },

                recentTransactions: lastTransactions,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error", err });
        }
    };