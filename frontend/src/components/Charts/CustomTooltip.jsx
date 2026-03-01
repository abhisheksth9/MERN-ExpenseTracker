const CustomTooltip = ({ active, payload }) => {

  if (!active || !payload || !payload.length) return null;

  const { category, amount } = payload[0].payload;

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200">
      <p className="text-xs font-semibold text-purple-700 mb-1">
        {category}
      </p>

      <p className="text-sm text-gray-600">
        Amount:{" "}
        <span className="font-semibold text-gray-900">
          ${amount.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default CustomTooltip;