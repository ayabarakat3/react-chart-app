import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense, 
          y: data.profits[index], 
        })),
        backgroundColor: 'rgba(250, 253, 178, 0.8)', 
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
