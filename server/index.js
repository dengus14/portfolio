require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors');

const app = express();
const port = 4000

const router = express.Router()
//connecting to the database, in db.js file
connectDB()

//cors and http parser
app.use(cors({
  origin: "http://localhost:3000",  // or 3000 if React runs on 3000
  methods: "GET,POST",
  credentials: true
}));
app.use(express.json());


//basic routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/health', (req, res) => {
  console.log('Health check hit');
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

const projectRoutes = require('./routes/project.routes.js');
app.use('/api/projects', projectRoutes);

const contactRoutes = require('./routes/contact.routes.js');
app.use('/api/contact', contactRoutes);

