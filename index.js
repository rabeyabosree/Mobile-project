const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const Medici = require('./routes/medinie');

app.use('/api/users', Medici);

app.get('/', (req, res) => {
  res.send('Hello from Termux Backend!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(
    `run at: http://localhost:${PORT}`
  );
});
