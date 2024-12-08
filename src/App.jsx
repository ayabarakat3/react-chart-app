import React, { useEffect, useState } from 'react';
import BarChart from './src/BarChart';
import LineChart from './src/LineChart';
import ScatterChart from './src/ScatterChart';
import BubbleChart from './src/BubbleChart';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/public.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the JSON file:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Interactive Charts with React and Chart.js</h1>

      <div>
        <h2>Bar Chart shows Monthly Sales</h2>
        <BarChart data={data} />
      </div>

      <div>
        <h2>Line Chart shows Monthly Profits</h2>
        <LineChart data={data} />
      </div>

      <div>
        <h2>Scatter Chart shows Expenses vs. Profits</h2>
        <ScatterChart data={data} />
      </div>

      <div>
        <h2>Bubble Chart shows Sales, Profits, and Expenses</h2>
        <BubbleChart data={data} />
      </div>
    </div>
  );
};

export default App;