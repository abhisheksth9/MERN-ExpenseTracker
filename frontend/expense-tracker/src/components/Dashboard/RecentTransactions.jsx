import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentTransactions = ({ transactions = [], onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>

        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions.length === 0 && (
          <p className="text-sm text-gray-400">No transactions found</p>
        )}

        {transactions.slice(0, 5).map((item, index) => (
          <TransactionInfoCard
            key={item._id || index}
            title={
              item.type === "expense"
                ? item.category || "Expense"
                : item.source || "Income"
            }
            icon={item.icon}
            date={item.date ? moment(item.date).format("Do MMM YYYY") : ""}
            amount={item.amount || 0}
            type={item.type}
            hideDeleteBin
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;