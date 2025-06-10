const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Root working!');
});

app.listen(port, () => {
  console.log(`PageTurn listening on port: ${port}`);
});
