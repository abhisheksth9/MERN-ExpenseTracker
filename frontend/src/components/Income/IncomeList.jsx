import { useState } from "react";
import { LuDownload, LuTrash2 } from "react-icons/lu";
import {
  FaMoneyCheckAlt,
  FaBriefcase,
  FaChartLine,
  FaGift,
  FaBuilding,
  FaLaptopCode,
  FaUniversity,
  FaCoins,
} from "react-icons/fa";

import moment from "moment";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTransactions = transactions?.filter((income) => {
    if (categoryFilter === "All") return true;

    return income.category === categoryFilter;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Salary":
        return <FaBriefcase />;
      case "Freelance":
        return <FaLaptopCode />;
      case "Business":
        return <FaBuilding />;
      case "Investment":
        return <FaChartLine />;
      case "Bonus":
        return <FaGift />;
      case "Passive Income":
        return <FaCoins />;
      default:
        return <FaMoneyCheckAlt />;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Income History
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Keep track of all your income sources
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="All">All Categories</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Business">Business</option>
            <option value="Investment">Investment</option>
            <option value="Bonus">Bonus</option>
            <option value="Rental Income">Rental Income</option>
            <option value="Passive Income">Passive Income</option>
            <option value="Commission">Commission</option>
            <option value="Gift">Gift</option>
          </select>
          
          <button
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-2xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            onClick={onDownload}
          >
            <LuDownload className="text-lg" />
            Download
          </button>
        </div>
      </div>

      {filteredTransactions?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-14 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No Income Added
          </h3>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredTransactions?.map((income) => (
          <div
            key={income._id}
            className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-green-200 rounded-3xl p-5 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl shadow-sm">
                  {getCategoryIcon(income.category)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {income.source }
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                      {income.category}
                    </span>

                    <span className="text-sm text-gray-500">
                      {moment(income.date).format("Do MMM YYYY")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onDelete(income._id)}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-green-50 hover:bg-green-100 text-green-600 p-2 rounded-xl"
              >
                <LuTrash2 className="text-lg" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Income Amount
              </p>

              <h2 className="text-2xl font-bold text-green-600">
                Rs. {income.amount}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeList;