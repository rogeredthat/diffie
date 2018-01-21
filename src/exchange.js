let fq = require('fuzzquire');
let express = fq('express');
let router = express.Router();

router.get('/', function (req, res) {
    // Response will hold our unique id and public key.
    res.end('Served public key');
});

router.post('/', function(req, res) {
    // Request body will hold identity, and public key of sender.
    res.end('Saved public keys');
});

module.exports = router;