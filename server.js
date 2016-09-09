'use strict';

const express = require('express');

// Constants
const PORT = 8082;

// App
const app = express();
app.get('/add/:num1/:num2', function (req, res) {
  var value = { result: req.params.num1 + req.params.num2 , from: "NodeJs services"};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(value));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
