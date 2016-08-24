const express = require('express');

// Constants
const PORT = 3002;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Gateway service\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);