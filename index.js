const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Termux Bankend!');
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(` http://localhost:${PORT}`)
});


