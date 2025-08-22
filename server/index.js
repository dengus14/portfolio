const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})