let bigint = require('big-integer');

module.exports = function compute(modulo, base, value) {
	let data = {};
	data.modulo = modulo;
    data.base = bigint(base);
    data.alice = bigint(value);
    data.temp = ~~(Math.random() * 10000);
    data.bob = data.base.modPow(data.temp, data.modulo);
    data.secret = data.alice.modPow( data.temp, data.modulo);
    return data;
}