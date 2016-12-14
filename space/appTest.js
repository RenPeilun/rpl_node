var http = require('http'); //调用了Node.js提供的http模块
var querystring = require('querystring');

var contents = querystring.stringify({
	name: 'rpl',
	email: 'rpl@123.com',
	address: 'XXX RD.'
});

var options = {
	host: 'localhost',
	path: '/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': contents.length
	}
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});

req.write(contents);
req.end();