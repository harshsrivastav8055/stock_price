const WebSocket = require('ws');

// WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Function to generate random price
function generateRandomPrice() {
  return (Math.random() * 100).toFixed(2); // Random price between 0 and 100 with two decimals
}

// Broadcast price to all connected clients
function broadcastPrice() {
  const price = generateRandomPrice();
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ price, timestamp: new Date().toISOString() }));
    }
  });
}

// Send a random price every 2 seconds
setInterval(broadcastPrice, 2000);

console.log('WebSocket server is running on ws://localhost:8080');
