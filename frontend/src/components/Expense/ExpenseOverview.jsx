import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper";

const ExpenseOverview = ({ transactions = [], onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result || []);
  }, [transactions]);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg font-semibold text-gray-800">
            Expense Overview
          </h5>
          <p className="text-sm text-gray-500">
            Track your spending trends over time
          </p>
        </div>

        <button
          onClick={onExpenseIncome}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          <LuPlus className="text-lg" />
          Add Expense
        </button>

      </div>

      <div className="mt-8">
        <CustomLineChart data={chartData} />
      </div>

    </div>
  );
};

export default ExpenseOverview;