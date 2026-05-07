import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = [
  "#EF4444",
  "#22C55E",
];

const FinanceOverview = ({
  totalIncome,
  totalExpense,
}) => {
  const savings = Math.max(totalIncome - totalExpense, 0);
  const savingsRate = totalIncome > 0
    ? ((savings / totalIncome) * 100).toFixed(1)
    : 0;

  const overviewData = [
    {
      name: "Expenses",
      amount: totalExpense,
    },
    {
      name: "Savings",
      amount: savings,
    },
  ];

  const legendItems = [
    { label: "Expenses", color: "bg-red-500" },
    { label: "Savings", color: "bg-green-500" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Financial Overview
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          How your income is allocated
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Income</p>
          <p className="text-lg font-bold text-gray-800">
            Rs. {totalIncome}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Savings Rate</p>
          <p className="text-lg font-bold text-green-600">
            {savingsRate}%
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <CustomPieChart
          data={overviewData}
          label="Income Allocation"
          totalAmount={`Rs. ${totalIncome}`}
          colors={COLORS}
          showTextAnchor
        />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {legendItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100"
            >
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm text-gray-700 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceOverview;