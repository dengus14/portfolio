require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4002;

connectDB()

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);