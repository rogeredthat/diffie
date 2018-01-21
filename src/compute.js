let bigint = require('big-integer');

let server = function serverCompute(modulo, base, value) {
	let data = {};
	data.modulo = modulo;
    data.base = bigint(base);
    data.alice = bigint(value);
    data.temp = ~~(Math.random() * 10000);
    data.bob = data.base.modPow(data.temp, data.modulo);
    data.secret = data.alice.modPow( data.temp, data.modulo);
    return data;
};

let client1 = function clientCompute1(modulo, base) {
	let data = {};
	data.modulo = modulo;
    data.base = bigint(base);
    data.temp = ~~(Math.random() * 10000);
    data.value = data.base.modPow(data.temp, data.modulo);
    return data;
};

let client2 = function clientCompute2(modulo, value, temp) {
	let data = {};
	data.modulo = modulo;
    data.temp = temp;
    data.bob = bigint(value);
    data.secret = data.bob.modPow( data.temp, data.modulo);
    return data;
};

module.exports = {
	client1,
	client2,
	server,
};