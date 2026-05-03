import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const COLORS = ["#875cf5", "#cfbefb"];

const CustomBarChart = ({ data = [] }) => {
  const chartData = useMemo(() => data ?? [], [data]);

  const getBarColor = (index) => COLORS[index % COLORS.length];

  if (!chartData.length) {
    return (
      <div className="flex items-center justify-center w-full h-[300px] text-gray-400 text-sm">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          barCategoryGap="20%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#eee"
          />

          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fill: "#666" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#666" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="amount"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
            animationEasing="ease-out"
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getBarColor(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(CustomBarChart);