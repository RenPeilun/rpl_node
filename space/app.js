var http = require('http'); //调用了Node.js提供的http模块

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); //对所有的请求答复同样的内容，即
	res.write('<h1>Node.js</h1>');                     //Node.js
	res.end('<p>Hello world!</p>');                    //Hello world!
}).listen(3000);

console.log("HTTP server is listening at port 3000.");//打开localhost:3000