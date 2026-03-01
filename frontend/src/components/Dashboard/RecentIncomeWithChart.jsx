import React, { useEffect, useState } from 'react'

const RecentIncomeWithChart = ({data, totalIncome}) => {
    
    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount,
        }))

        setChartData(dataArr);
    };

    useEffect(() => {})
  return (
    <div>RecentIncomeWithChart</div>
  )
}

export default RecentIncomeWithChart