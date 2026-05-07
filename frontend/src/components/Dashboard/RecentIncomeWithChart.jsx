import React, { useEffect, useMemo, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ['#875CF5', '#FA2C37', '#60D394', '#FF9F1C', '#2EC4B6'];

const RecentIncomeWithChart = ({ data = [], totalIncome = 0 }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  const highestIncomeSource = useMemo(() => {
    if (!data.length) return null;

    return data.reduce((max, item) =>
      item.amount > max.amount ? item : max
    );
  }, [data]);

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

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-xl font-bold text-gray-800">
            Last 60 Days Income
          </h5>

          <p className="text-sm text-gray-500 mt-1">
            Breakdown of your recent income sources
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
          <p className="text-sm text-gray-500">Income Sources</p>

          <h3 className="text-2xl font-bold text-gray-800">
            {data.length}
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">Highest Source</p>

          <h3 className="text-md font-bold text-green-600 truncate">
            {highestIncomeSource?.source}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Rs {highestIncomeSource?.amount?.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <CustomPieChart
          data={chartData}
          label="Total Income"
          totalAmount={`NRP ${Number(totalIncome).toLocaleString()}`}
          showTextAnchor
          colors={COLORS}
        />
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;