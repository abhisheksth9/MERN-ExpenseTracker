import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount = 0,
  type = "expense",
  hideDeleteBin = false,
  onDelete,
}) => {
  const isIncome = type === "income";

  const getAmountStyles = () => {
    return isIncome
      ? "bg-green-50 text-green-500"
      : "bg-red-50 text-red-500";
  };

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60 transition-colors">
      
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
        {icon ? (
          <img
            src={icon}
            alt={title}
            className="w-6 h-6 object-contain"
          />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex items-center justify-between">
        
        <div>
          <p className="text-sm text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>

        {!hideDeleteBin && onDelete && (
          <button
            onClick={onDelete}
            aria-label="Delete transaction"
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
          >
            <LuTrash2 />
          </button>
        )}

        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}
        >
          <h6 className="text-xs font-medium">
            {isIncome ? "+" : "-"} {formattedAmount}
          </h6>
          {isIncome ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;