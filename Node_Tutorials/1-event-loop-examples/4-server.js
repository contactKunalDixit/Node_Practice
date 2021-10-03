const http = require('http');

const server = http.createServer((req, res) => {
	/* http.createServer() is async in nature, hence the callback is offloaded and the execution continues to proceed with the rest of the following code. Once the request is recieved (i.e. page @localhost:5000 is refereshed, the response "Hello World" is sent and console logs "request event")
	 */
	console.log('request event');
	res.end('Hello World');
});

server.listen(5000, () => {
	console.log('Server listening on port : 5000....');
});
