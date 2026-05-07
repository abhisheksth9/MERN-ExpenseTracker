import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper";
import getDateRange from "../../utils/dateFilter";

const ExpenseOverview = ({ transactions, onAddExpense }) => {
  const [chartData, setChartData] = useState([]);
  const [range, setRange] = useState("monthly");

  useEffect(() => {
    const { start, end } = getDateRange(range);

    const filtered = transactions.filter((t) => {
      const date = new Date(t.date);
      return date >= start && date <= end;
    });

    const result = prepareExpenseLineChartData(filtered, range);
    setChartData(result);
  }, [transactions, range]);

  return ( 
      <div className='card'> 
        <div className='flex items-center justify-between'> 
          <div> 
            <h5 className='text-lg'>Expense Overview</h5> 
            <p className='text-ls text-gray-400 mt-0.5'>Track earning and analyze</p> 
          </div> 
        <div className="flex items-center gap-3"> 
          <select 
            value={range} 
            onChange={(e) => setRange(e.target.value)} 
            className="add-btn"> 
            <option value="daily">Daily</option> 
            <option value="weekly">Weekly</option> 
            <option value="monthly">Monthly</option> 
            <option value="yearly">Yearly</option> 
          </select> 
          
          <button 
            className="add-btn flex items-center gap-1" 
            onClick={onAddExpense} > 
            <LuPlus className="text-lg" /> Add Expense 
          </button>
        </div>
      </div> 
      <div className="mt-8"> 
        {chartData.length > 0 ? ( 
          <CustomLineChart data={chartData} /> 
        ) : ( 
        <p className="text-center text-gray-400 text-sm py-10"> 
        No expense data available for this period 
        </p> 
        )} 
      </div> 
    </div> 
) } 

export default ExpenseOverview;