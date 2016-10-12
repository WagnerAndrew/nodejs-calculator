'use strict';

var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var config = require('./app/config/config');
// App
var app = express();
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

//calculator
var calculatorRoutes = require('./app/calculator/controllers/calculator');
app.use('/', calculatorRoutes);


// Running
var db = mongoose.connect(config.db);
app.listen(config.port);
console.log('Running on http://localhost:' + config.port);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});