import { useState, useEffect } from 'react';
import BarChart from './src/src/components/BarChart';
import LineChart from './src/src/components/LineChart';
import ScatterChart from './src/src/components/ScatterChart';
import BubbleChart from './src/src/components/BubbleChart';
import './App.css';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Interactive Charts with React and Chart.js</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
}

export default App;