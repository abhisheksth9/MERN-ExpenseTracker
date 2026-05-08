import { useState } from "react";
import Input from "../Inputs/Input";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => {
    setIncome({ ...income, [key]: value });
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-5 border border-gray-100">
      <div className="mb-4">
        <Input
          value={income.source}
          onChange={({ target }) =>
            handleChange("source", target.value)
          }
          label="Income Source"
          placeholder="Salary, Freelance, Bonus..."
          type="text"
        />
      </div>

        <div className="mb-4">
        <label className="text-[13px] text-slate-800 block text-sm text-gray-700 mb-2">
            Income Category
        </label>

        <select
            value={income.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="input-box w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
        >
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Business">Business</option>
            <option value="Investment">Investment</option>
            <option value="Bonus">Bonus</option>
            <option value="Rental Income">Rental Income</option>
            <option value="Passive Income">Passive Income</option>
            <option value="Commission">Commission</option>
            <option value="Gift">Gift</option>
            <option value="Other">Other</option>
        </select>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Input
            value={income.amount}
            onChange={({ target }) =>
              handleChange("amount", target.value)
            }
            label="Amount"
            placeholder="Enter amount"
            type="number"
          />
        </div>
        <div>
          <Input
            value={income.date}
            onChange={({ target }) =>
              handleChange("date", target.value)
            }
            label="Date"
            type="date"
          />
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-5 shadow-lg">
        <p className="text-sm opacity-80">Income Preview</p>

        <h3 className="text-xl font-bold mt-1">
          {income.source || "No Source"}
        </h3>

        <div className="flex justify-between items-center mt-3">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {income.category || "No Category"}
          </span>

          <span className="text-2xl font-bold">
            {income.amount ? `Rs. ${income.amount}` : "Rs. 0"}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={() => onAddIncome(income)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white font-semibold px-8 py-3 rounded-2xl"
        >
          + Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;