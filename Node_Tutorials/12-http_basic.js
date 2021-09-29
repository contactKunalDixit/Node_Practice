const http = require('http');
// console.log(http);

/* In the below statement, we are using method "createServer" to initiate a server request, and then saving it in variable "server". The 'createServer' would take a callback function which'll always 2 parameters which'll always be objects themselves, mostly named as req for 'request' and res for "response" */
//? The first parameter 'req' (which'll be an object in itself) always represents the INCOMING request. This object 'req' would have captured the info like the method used by the user alongwith other imp info

//? The second parameter (which will also be an object) would be the response we'll send through the server. Both will have thier own respective objects, methods and properties

const server = http.createServer((req, res) => {
	/*  
    // console.log(req);
    */
	if (req.url === '/') {
		/* 3 */
		res.write('Welcome to our Home page'); /* 1 */
		res.end(); /* 2 */
	} else if (req.url === '/about') {
		res.write('This is ABOUT PAGE');
		res.end();
	} else {
		res.write(
			`<h1>Oops</h1>
            <p>We cant seem to find the page that you are looking up</p>
            <a href = "/">back home</a>`
		);
		res.end();
	}
});
// console.log(server);
// server.listen(): helps you set the listening port at 5000 or any other number. The port listens to the user incoming requests.
server.listen(5000, () => {
	console.log('The Server is on and Running');
});

/*
1.  res.write(): to write a 'response' which'll be send to the user 

2.  res.end(): To conslude the request after the response has been sent to the user. This signals that there would not be any more data to be written 

3. req.url: We are using simle if statements to define what happens depending upon the url we would recieve from the user,, and accordingly we can determine our responses
if its home i.e. "/", then one kind of response and if its say "/about", then a different response.
If the user types anything else, then a page not found response with an anchor tag pointing to the home page "/"

*/
