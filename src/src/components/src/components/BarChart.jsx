import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months, 
    datasets: [
      {
        label: 'Sales',
        data: data.sales, 
        backgroundColor: 'rgba(249, 214, 232, 0.8)', 
        borderColor: 'rrgba(134, 11, 74, 0.8)', 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;