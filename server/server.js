var express = require('express');
var app = express();

// Setting up database
require('./models/database.js');

app.get('/', function (req, res) {
  res.send('We are the Fantastic 4!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
