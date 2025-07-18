// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Use PORT from .env, fallback to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Root route fallback (can be overridden by index.html if served statically)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`🚀 Launchpad running at http://localhost:${PORT}`);
  }
});