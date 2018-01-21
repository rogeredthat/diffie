var request = require('request');
var fq = require('fuzzquire');
var compute = fq('compute');

var server = process.argv[2];
var username = process.argv[3];

var data = {};
data.modulo = ~~(Math.random()*100000);
data.base = ~~(Math.random()*100);
var temp = compute.client1(data.modulo, data.base);
data.temp = temp.temp;
data.alice = temp.value;

var url = `${server}/diffie/exchange?`;
url += `modulo=${data.modulo}&`;
url += `base=${data.base}&`;
url += `value=${data.alice}&`;
url += `user=${username}&`;

console.log("Sending request to:", url);
request(url, function (error, response, body) {
  if (error) {
	console.log('error:', error);
	process.exit();
  }
  data.bob = JSON.parse(body).value;
  temp = compute.client2(data.modulo, data.bob, data.temp);
  data.secret = temp.secret;
  console.log("Secret Computed:", data.secret);
});