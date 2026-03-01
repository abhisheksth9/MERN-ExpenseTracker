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
import CustomTooltip from './CustomTooltip';

const CustomBarChart = ({ data = [] }) => {

  const getBarColor = (index) =>
    index % 2 === 0 ? '#875cf5' : '#cfbefb';

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="amount"
            radius={[8, 8, 0, 0]}
          >
            {data.map((_, index) => (
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

export default CustomBarChart;