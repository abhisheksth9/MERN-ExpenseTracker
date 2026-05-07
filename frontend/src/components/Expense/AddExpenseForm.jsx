import React, { useState } from "react";
import Input from "../Inputs/Input";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    description: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => {
    setExpense({ ...expense, [key]: value });
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-5 border border-gray-100">
      <div className="mb-4">
        {/* Add Description Section */}
        <Input
          value={expense.description}
          onChange={({ target }) =>
            handleChange("description", target.value)
          }
          label="Expense Description"
          placeholder="Rent, Groceries..."
          type="text"
        />
      </div>

        {/* Expense Category */}
        <div className="mb-4">
          <label className="text-[13px] text-slate-800 block text-sm text-gray-700 mb-2">
            Expense Category
          </label>

          <select
            value={expense.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="input-box w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Groceries">Groceries</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              type="number"
              value={expense.amount}
              onChange={({ target }) =>
                handleChange("amount", target.value)
              }
              placeholder="Enter amount"
              label="Amount"
            />
          </div>

          <div>

            <Input
              type="date"
              value={expense.date}
              label="Date"
              onChange={({ target }) =>
                handleChange("date", target.value)
              }
            />
          </div>
        </div>
      {/* </div> */}

      {/* Preview Card */}
      <div className="mt-6 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl p-5 shadow-lg">

        <p className="text-sm opacity-80">
          Expense Preview
        </p>

        <h3 className="text-xl font-bold mt-1">
          {expense.category || "No Category Selected"}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className="bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium">
            {expense.date || "No Date"}
          </span>

          <span className="text-2xl font-bold">
            {expense.amount ? `Rs. ${expense.amount}` : "Rs. 0"}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={() => onAddExpense(expense)}
          className="bg-gradient-to-r from-violet-600 to-purple-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white font-semibold px-8 py-3 rounded-2xl">
          + Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;