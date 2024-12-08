import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
// Code used to import important data needed. 

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: type,
      data: data,
      options: options,
    });

    return () => {
      if (chartRef.current) {
        chart.destroy(); 
// This code is used to completely remove the chart when needed. 
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;