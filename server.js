// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3008;

// Serve all static files from this directory (HTML, CSS, JS)
app.use(express.static(__dirname));

// Optional: Custom route override if you want specific logic
// app.get('/chatterlings/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'chatterlings', 'index.html'));
// });

// Fallback for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Launchpad running at http://localhost:${PORT}`);
});