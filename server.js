// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Use PORT from .env, fallback to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Root route fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and bind to 0.0.0.0 for external access
app.listen(PORT, '0.0.0.0', () => {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? `http://${process.env.HOST || 'your-server-ip'}:${PORT}`
    : `http://localhost:${PORT}`;

  console.log(`🚀 Launchpad running at ${baseUrl}`);
});