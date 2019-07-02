const express = require('express');
const app = express();
const test = require('../helper');

app.get('/', (req, res) => {
  const name = test();
  res.send(`Goodbye ${name.first} ${name.last}`);
})

app.listen(3008, ()=> {
  console.log('listening on port 3008')
})