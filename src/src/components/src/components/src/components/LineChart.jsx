import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months, 
    datasets: [
      {
        label: 'Profits',
        data: data.profits, 
        borderColor: 'rgba(225, 57, 129, 0.8)', 
        borderWidth: 1,
        fill: false, 
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
// Code meant to make sure that it begins the chart at zero 
  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;