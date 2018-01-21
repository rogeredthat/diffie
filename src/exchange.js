let fq = require('fuzzquire');
let express = require('express');
let router = express.Router();
let compute = fq('compute');
let lowdb = require('lowdb');
let FileSync = require('lowdb/adapters/FileSync');

let adapter = new FileSync('keys.json');
let db = lowdb(adapter);

router.get('/exchange', (req, res) => {
    let data = compute.server(req.query.modulo, req.query.base, req.query.value);
    db.defaults({keys:[]}).write();
    db.get('keys').push({user:req.query.user, key:data.secret}).write();
    console.log(req.query.user + "'s secret is:", data.secret);
    res.json({
		value: data.bob,
    });
});

module.exports = router;