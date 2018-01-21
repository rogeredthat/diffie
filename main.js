let fq = require('fuzzquire');
let express = require('express');
var app = express();

app.use('/diffie', fq('exchange'));
app.get('/secrets', (req, res, next) => {
    res.end(0);
});
module.exports = app;