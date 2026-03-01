import React, { useMemo } from 'react';
import { prepareExpensesBarChartData } from '../../utils/helper';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const Last30DaysExpenses = ({ data = [] }) => {

  const chartData = useMemo(() => {
    return prepareExpensesBarChartData(data);
  }, [data]);

  if (!chartData.length) {
    return (
      <div className="card col-span-1 p-6 text-center text-gray-500">
        No expense data available for the last 30 days.
      </div>
    );
  }

  return (
    <div className="card col-span-1 p-6">
      <h5 className="text-lg font-semibold mb-4">
        Last 30 Days Expenses
      </h5>

      <CustomBarChart data={chartData} />
    </div>
  );
};

export default Last30DaysExpenses;