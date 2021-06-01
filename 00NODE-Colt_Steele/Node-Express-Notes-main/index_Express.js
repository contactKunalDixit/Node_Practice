/* eslint-disable max-len */
const express = require('express');

const app = express();

// console.dir(app);

// 3000 is just a PORT number on which the Express Server listens to the incoming requests, ...and then executes the call back function
// //
// app.use((req, res) => {
// console.log('We GOT A NEW REQUEST');
// console.dir(req);
// console.dir(res);
// res.send('Hello, i come as a RESPONSE');÷
// res.send('<h1>THis is RESPONSE header</h1>');
// res.send({ name: 'Kunal' });
// res.send([1, 2, 3]);
// });

/*
* Any time any incoming requests is received, the "app.use()"" executes. Thats the purpose of app.use()
* It doesnt matter where the incoming request is directed to or which page i.e. wether it is to home page or about us page or any other page

* Doesnt matter if it is get request or post request...all requests will get catered to
*/

/*
Todo: Whenever we have any request coming up/ being received (http),the http request always comes up in the form of a simple text. HTTP request is not javascript object and neither it is particualar to any specific language. Instead it is simple text info.

Todo: But the beauty of Express is that it can parse it and auto creates 2 objects (and thier associated properties and methods) which are automatically passed as arguements in app.use()

Todo: Generally these 2 OBJECTS are named as req, res . req as requests and this represents INCOMING request . res for response and this represents OUTGOING response
*/

/*

* res.send() : is an important method of object 'res' (req and res are objects created by the Express framework based on the HTTP request received from the clients end).
* It sends back the HTTP response to the client
* The body parameter can be a buffer object, a string, an Object, * Boolean or an Array
* e.g.
* res.send({some:'json'})
* res.send('<p>some HTML</p>')
* res.status(404).send("Sorry, we cannot find that")
*
* Alongwith doing above, this method automatically assigns  * content-Length and content-type HTTP response header field (unless previously * defined)
*
* when the parameter is a string, the content-type is set to "text/* html". e.g. res.send('<p>some HTML</p>')
*
* when the parameter is an array or an object, the express responds * with the JSON representation :
* res.send({user:"tobi"})
* res.send([1,2,3])

*/
/*
* NOTE: imp tip: whenever you make any change in the js file...make sure to re run the file in node terminal, unless you executing the file through 'nodemon' after npm installing nodemon */
/*
 * Also, we can either have app.use((req,res)=>{}) or app.get('path', callbackFunc). Using both may give us an error
*
There can only be one res.send() because once you have sent something back to the client, the connection terminates for that request, and that process is taken careOff. If you have multiple res's, then it leads to error so only one res.send()

/*
* Express Routing basics:

* How to respond with different content based on different requests:

* Routing is not only particular to Express but is a term used in all server creation and management

* Routing is basically understanding incoming requests and the path that has been requested by the client and then accordingly matching that to some code or response.
* Routing is important to understand as your responses certainly will differ basis the route/s sought by the client.
*/

//  Lets start by adding simple routes:
//  /cats : "meow"
//  /dogs: "Woof"
//  / : "This is the home page"

// **********************************************************
// * GET REQUEST
// **********************************************************
/*
*app.get() exoects two parameters , 1st the path that we are matching e.g. "/cats" and then the callback function (which is absolutely the same as used with app.use(req,res) with the logic that this callback function will run when the incoming requests matches the stated mentioned path(1st parameter))
*/

// todo : Example of a cat's route
app.get('/cats', ((req, res) => {
  // res.send('This is a cat request');
  console.log('This is a cat request');

  res.send('This is MEEEOOWWWWWWWWWWWWWW GRRRRRRRR');
}));

// todo : Example of a dog's route

app.get('/dogs', (req, res) => {
  console.log("This is a DOG's request");
  res.send('WOOOOF');
});

// todo : Example of a root's route i.e. "/"
app.get('/', (req, res) => {
  console.log('THIS IS THE ROOT REQUEST');
  res.send('THIS IS THE HOME');
});

/*
todo: EXPRESS PATH PARAMETERS:
* We cant really specify each path for each of the page as there can be multiple pages in a website so instead we define a pattern, thus we work on a better mechanism of defining a variable path parameter
* in below, '/r/:' is pattern the server will search for when the requests is received(especially anything that comes after ":"). localhost:8080/r/cat and localhost:8080/r/dogs will get accounted for and will be considered BUT localhost:8080/cat and localhost:8080/dog will not be considered because they are dont have '/r/' pattern.

* so in short, the exact pattern that follows '/r/:' will be considered. Remember the importance of ":"
*/

app.get('/r/:subreddit', (req, res) => {
  console.log('This is a PARAM in Action');
  res.send('THIS is Express Path Params in ACTION');
});

app.get('/s/:searchVar', (req, res) => {
  const { searchVar } = req.params;
  const { count, color } = req.query;
  if (!count) {
    res.send('Nothing found if nothing searched');
  } else {
    console.log(req.query);
    console.log(`The client as mentioned ${searchVar} as the Path Parameter`);
    console.log(`The query selector specified by client are count as ${count} and color ${color}`);
    // res.send(`The client as mentioned ${searchVar} as the Path Parameters`);
    res.send(`The query selector specified by client are count as ${count} and color ${color}`);
  }
});

// todo: (Final catch 'get' (wild card character '*') - incase you would like to put a customised message for if you recieve a get 'Request' with an invalid path that doesnt exists in your website, use "*"....BUT make a point to never mention the below code in the beginning because "*" matches all the path patterns ,,,thus all paths written after the below code will be ignored by Express..so ALWAYS keep the below code as the last option in the sequence:

// app.get('*', (req, res) => {
//   // console.log('Customised msg for INVALID path');
//   res.send('THIS IS NOT A VALID PATH, CHECK AGAIN');
// });

// **********************************************************
// * POST REQUEST  - USE POSTMAN to observe the post request and response in execution
// **********************************************************

app.post('/cats', (req, res) => {
  console.log('THIS IS A POST REQUEST FOR CATS');
  res.send('THIS IS A POST REQUEST FOR CATS...and different from GET REQUEST');
});

/*
*  app.listen(port, callback()) : just starts the server and and is ready to listen to requests
*/

app.listen(8080, () => {
  console.log('LISTENING ON THE PORT 8080');
});

/*
The above prog continues to listen to the incoming requests on the port 3000,
But where are these requests coming from since we are not mentioning any URLs.
Well, this 3000 port is on our local machine and NO other user on any other machine or any where in network can access and send requests to this local PORT 3000.

Thus we can only access it only through this very machine

The way to access it is to write localhost:3000 as the URL

where:
localhost is the local machine which you are working on
// eslint-disable-next-line max-len
3000: is the port number through which the communication estabilishes between server(express) and browser

Port is just like virtual addresses on the machine where different communications can be established. emails exchanges, http requests etc  - all can be established on different port addresses 3000, 8080 etc but channelised on the same machine

If you'll have 2 or more different apps running on a express server, you'll have to specify and associate different ports to each of them.

You cant have them run on the same port address

and thats the whole purpose of ports existance. You can have different servers run for different applications say one server on 3000, other on 8080 and so on, managing different traffic on different ports...all being managed from the same machine
*/

/*
 *  Chapter: req.param:

* This property is (GIVES) an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available through req.params.name. This object defaults to {}.

* It tells you (in an Object form), what route path has been mentioned by the client and captures it theroff in an Object form

 */
//* Here, paramVar is a a sort of variable and captures anything that gets passed in the pattern :(oneWord)
// * If client requests for  /c/:paramVar/var2 : this is a different pattern since there is word/var 'var2' after ":"

//  In ghe below example, we have two variables being tracked and both the variables with prefixed ":" are defining a certain pattern

app.get('/c/:paramVar/:postId', (req, res) => {
  const { paramVar, postId } = req.params;

  console.log(paramVar);
  console.log('This is req.param example');
  res.send(`The client requested for postID ${postId} on the page ${paramVar}`);
});

// * **************
/*
* Query String is the portion of the URL wich starts with "?" and client can include and pass on the information in this query String to back server. The information is commonly stored in the form of key value pairs
* Often applications are setup that they are expecting something in the query string
* e.g. if you search something on MDN pages say colors, ...then you'd be able to see the query string "?q=colors" in the URL

* the "q" is just the name of the query string

* If you modify your search to search for Node, ..then the query String changes to "?q=node"

todo : Its very important to track query string (aka key value pairs) so that the info which the client has requested can be searched in the database and relevant info can be processed and provided back to the client

* We dont need to track query string by specifying a certain pattern in the get("path",callback(req,res)) but instead there is a dedicated property available in 'req' object called as req.query
*/

app.get('/r/searchVar', (req, res) => {
  const { searchVar } = req.params;
  console.log(req.query);
  console.log(`The client as mentioned ${searchVar} as the query Selector`);
  res.send(`The client as mentioned ${search} as the query Selector`);
});
