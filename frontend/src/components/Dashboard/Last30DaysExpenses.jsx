import React, { useMemo } from 'react';
import { prepareExpensesBarChartData } from '../../utils/helper';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const Last30DaysExpenses = ({ data = [] }) => {
  const chartData = useMemo(() => {
    return prepareExpensesBarChartData(data);
  }, [data]);

  const totalExpenses = useMemo(() => {
    return data.reduce((sum, item) => sum + (item.amount || 0), 0);
  }, [data]);

  const highestExpense = useMemo(() => {
    if (!chartData.length) return null;

    return chartData.reduce((max, item) =>
      item.amount > max.amount ? item : max
    );
  }, [chartData]);
  
  if (!chartData.length) {
    return (
      <div className="card col-span-1 p-8 text-center border border-dashed border-gray-300 rounded-2xl bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl"></div>
          <h3 className="text-lg font-semibold text-gray-700">
            No Expense Data
          </h3>
          <p className="text-sm text-gray-500">
            No expenses recorded in the last 30 days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card col-span-1 p-6 rounded-2xl shadow-sm border border-gray-100 bg-white">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-xl font-bold text-gray-800">
            Last 30 Days Expenses
          </h5>
          <p className="text-sm text-gray-500 mt-1">
            Overview of your recent spending activity
          </p>
        </div>

        <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-right">
          <p className="text-xs font-medium uppercase tracking-wide">
            Total Spent
          </p>
          <h4 className="text-lg font-bold">
            Rs {totalExpenses.toFixed(2)}
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">Transactions</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {data.length}
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">Highest Expense</p>
          <h3 className="text-lg font-bold text-red-500">
            Rs {highestExpense?.amount?.toFixed(2)}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default Last30DaysExpenses;