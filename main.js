let fq = require('fuzzquire');
let app = require('express');

let exchange = require('exchange');
let digest = fq('digest');
let resolve = fq('resolve');

app.use('/keys', exchange);

app.get('/', function(req, res) {
    let sample = "Something we retrieved according to the request";
    console.log("Digesting: ", sample);
    res.send(digest());
});
app.post('/', function(req, res) {
    let key = "Something we retrieved from our list of keys";
    console.log("Resolved: ", resolve(req.body));
    res.send('Success');
});

module.exports = app;