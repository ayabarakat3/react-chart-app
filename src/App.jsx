import { useState, useEffect } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart';
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