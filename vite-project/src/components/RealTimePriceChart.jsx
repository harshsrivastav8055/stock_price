import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const App = () => {
  const [priceData, setPriceData] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const websocket = new WebSocket('ws://localhost:8080');

    // Set WebSocket instance
    setWs(websocket);

    // Handle incoming messages
    websocket.onmessage = (event) => {
      const { price, timestamp } = JSON.parse(event.data);
      setPriceData((prevData) => [...prevData, { price: parseFloat(price), timestamp }].slice(-20)); // Keep only last 20 data points
    };

    return () => {
      websocket.close(); // Clean up WebSocket connection
    };
  }, []);

  // Prepare data for Chart.js
  const chartData = {
    labels: priceData.map((data) => new Date(data.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price',
        data: priceData.map((data) => data.price),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Live Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default App;
