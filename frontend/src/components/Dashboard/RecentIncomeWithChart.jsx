import React, { useEffect, useMemo, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ['#875CF5', '#FA2C37', '#60D394', '#FF9F1C', '#2EC4B6'];

const RecentIncomeWithChart = ({ data = [], totalIncome = 0 }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const groupedData = data.reduce((acc, item) => {
      const category = item?.category || 'Other';

      if (!acc[category]) {
        acc[category] = 0;
      }

      acc[category] += Number(item?.amount || 0);

      return acc;
    }, {});

    const formattedData = Object.entries(groupedData).map(
      ([category, amount]) => ({
        name: category,
        amount,
      })
    );

    setChartData(formattedData);
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  const highestIncomeCategory = useMemo(() => {
    if (!chartData.length) return null;

    return chartData.reduce((max, item) =>
      item.amount > max.amount ? item : max
    );
  }, [chartData]);

  if (!chartData.length) {
    return (
      <div className="card p-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl"></div>

          <h3 className="text-lg font-semibold text-gray-700">
            No Income Data
          </h3>

          <p className="text-sm text-gray-500">
            No income records found for the last 60 days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-6 rounded-2xl shadow-sm border border-gray-100 bg-white">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-xl font-bold text-gray-800">
            Last 60 Days Income
          </h5>

          <p className="text-sm text-gray-500 mt-1">
            Breakdown of recent income categories
          </p>
        </div>

        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-right">
          <p className="text-xs font-medium uppercase tracking-wide">
            Total Income
          </p>

          <h4 className="text-lg font-bold">
            Rs {Number(totalIncome).toLocaleString()}
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">        
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">Income Categories</p>

          <h3 className="text-2xl font-bold text-gray-800">
            {chartData.length}
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">Highest Category</p>

          <h3 className="text-md font-bold text-green-600 truncate">
            {highestIncomeCategory?.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Rs {highestIncomeCategory?.amount?.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <CustomPieChart
          data={chartData}
          label="Total Income"
          totalAmount={`Rs ${Number(totalIncome).toLocaleString()}`}
          showTextAnchor
          colors={COLORS}
        />
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;