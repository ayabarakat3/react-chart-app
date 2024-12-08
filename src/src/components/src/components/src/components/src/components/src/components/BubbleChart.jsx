import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: data.expenses.map((expense, index) => ({
          x: expense, 
          y: data.profits[index], 
          r: data.sales[index] / 10, 
        })),
        backgroundColor: 'rgba(168, 232, 252, 0.8)', 
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

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
