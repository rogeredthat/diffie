let fq = require('fuzzquire');
let express = require('express');

var app = express();
app.use('/diffie', fq('exchange'));

module.exports = app;