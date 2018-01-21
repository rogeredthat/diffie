let fq = require('fuzzquire');
let express = require('express');
let router = express.Router();
let compute = fq('compute');

router.get('/exchange', function (req, res) {
    let data = compute.server(req.query.modulo, req.query.base, req.query.value);
    process.env.DHKE_SECRET=data.secret;
    console.log("Secret Computed:", data.secret);
    res.json({
		value: data.bob,
    });
});

module.exports = router;