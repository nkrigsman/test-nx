const express = require('express');
const app = express();
const test = require('../helper');

app.get('/', (req, res) => {
  const name = test();
  res.send(`Hello ${name.first} ${name.last}`);
})

app.listen(3006, ()=> {
  console.log('listening on port 3006')
})