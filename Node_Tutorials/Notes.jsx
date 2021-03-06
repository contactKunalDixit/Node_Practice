/*
!1
Q: What is a NodeJs?
A:  It is an environment which runs run JS outside of Browser.
    It is a runtime environment which uses JavaScript language to execute functions in terminal, i.e. outside of browser environment.
    Helps at backend to provide server services and database connecting services and more to frontEnd of applications
    Built on Chrome's V8 JS engine

!2
Q: What is the difference between Browser Vs Node.JS ?
A: 
 Browser:
    We have access and work with DOM
    There is a Window Object in Browser which is native and comprises of various inbuilt methods and properties
    You can interact with applications through frontEnd functionality in Browser.
    There is No Filesystems to work with
    Fragmentations instead of Version
    ES6 Modules is used. e.g. import {<module>} from "../."  


NodeJS:
    Since the entire implementation happens in Terminal, hence there is no need for reaching browser. Hence, no DOM exists in NodeJS
    There uis no Window Object since window object comes from Browser and there in no Browser services that exists in NodeJS
    NODEJS in primarily used for Server Side Apps and services
    There is FileSystems structure that exsists
    Versions instead of Fragmentations
    CommonJS is used instead of ES6 modules e.g. const <moduleName> = require("./..")

!3
Q: What are the most used GLOBAL objects available in Node:
A: Before going further; understand that there is Global objects available and NO Windows in Node environment.

Each of the below are some commonly used GLOBAL Objects in NODE, which have thier own further properties and methods

__dirname   :   shows path to current directory
__filename  :   shows the file name
require     :   function in CommonJS to use modules

module      :   returns object containing info about current module (file). remember, all files are considered to be modules in themselves

process     :   info about environment where the program is being executed. This is very usefull in getting understanding of the systems like deployment platforms like Heroku and others 




!4
Q: Most used BUILT-IN Modules:

*   OS
*   Path
*   FS
*   HTTP


?? ************ OS **************
const osObj = require('os'); /* returns 'os' object and stores it in 'osObj' */

//info about the current user
// ! console.log(osObj.userInfo());

// method returns the system uptime in seconds
// ! console.log(`The system has been up for ${osObj.uptime()} seconds`);

// method returns the system free memory
// ! console.log(osObj.freemem());

// method returns the system total memory
// ! console.log(osObj.totalmem());

// method returns the localhostname as a string
// ! console.log(osObj.hostname());

// method returns the local host's operating platform
// ! console.log(osObj.platform());

// !    Another way of compiling similar info is to make an object of it and then console logging it

// ! const currentOS = {
// ! name: osObj.platform(),
// ! release: osObj.release(),
// ! totalMem: osObj.totalmem(),
// ! freeMem: osObj.freemem(),
// ! }

//   console.log(currentOS);

/*
?? ************ path **************

const path = require('path');
! returns the specific 'seperator' being used in the system, which can differ depending upon user's customization
console.log(path.sep);

method returns the specific 'seperator' being used
! console.log(path.sep);

Method path.join() : helps join the different paths into one. Dev can specify the exact path he needs, and path.join joins them together with a designated 'separator'

! const filePath = path.join('/content', 'subfolder', 'text.txt');
! console.log(filePath);

Method returns only the  last portion or end point in the certain path
! const fileBase = path.basename(<filepath>)
 path.resolve : This Method resolves and returns an absolute path.
 The leftmost arg is '__dirname' whc=ich helps capture the current directory name where the current file that is being 'executed' resides
 The rest of the following args help you define the direction and the extent to which you'd want to define your absolute path.
 common usage is when you need to provide an absolute path in your applications: Since our applications would run in different systems and different filestructures, where if our applications would require to have access to some resources, they'll have to refer to these absolute file paths rather than relying on relative paths. e.g. file paths could be different in myComputer Vs Heroku etc. Hence, the need for Absolute paths


! const absolutePath = path.resolve(
!	__dirname,
!	'content',
!	'subfolder',
!	'text.txt'
! );

! console.log(absolutePath);


?? *********** FS **************

/*
??  When it comes to 'File System', we have 2 flavours:         
?? Asyncronously i.e. non Blocking  
?? Syncronously i.e. Blocking

****** SYNCRONOUSLY *******
?? In this module, we'll cover the generic concepts which is common to both the flavours and later on, we'll dive deep into understanding the differences and benefits of using one over the other
! As of this moment in the learning, treat them as merely different methods
*/

// For a start, We are focussing on just 4 methods and that too in the sync flavour:

//! const fs = require('fs');
/* Alternatively, You could use destructuring and just specify the relevant methods and props you require from the 'fs' module. In this case we obviously are storing the module in the object 'fs'  */
//! console.log(fs);

// Method READS the content of the file synchronously. The first arg is the address of vthe file. The second arg is majorly always the 'utf-8' character encoding.

//! const first = fs.readFileSync('./content/first.txt', 'utf-8');
//! const second = fs.readFileSync('./content/second.txt', 'utf-8');

//! console.log(first, '; ', second);

// Method to WRITE or CREATE a new file and write in it. The 1st arg is the path of the existing file or if the file wont be found, then it creates a new file like in this case. The second arg is the msg itself that need to go inside that file

//? The below overwrites the old text

// ! fs.writeFileSync(
// !'./content/result-sync.txt', `Here is the result:  ${first}, ${second}`;
// ! );

//! fs.writeFileSync('./content/first.txt', 'Hello World');
//? The above method does't add to the exiwsting content of the file, but the new text simply replaces the old content and overwrites it

//? The below APPENDS and gets added after the old text
//? You just need a third arg which is an object i.e.  {flag:'a'}

//! fs.writeFileSync(
// !'./content/first.txt',
// ! '; This statement has been appended later ;',
// ! { flag: 'a' }
//! );

// ****** ASYNCRONOUSLY *******

// For Async file READING: The first arg is the address, the second arg is the character encoding and the third arg is the most imp arg i.e. - the 'callback' function that needs/ will be called back once the result comes as a success. In this case, if the functionality be able to read something from the file

//? For MORE DETAILS, PLEASE REFER TO 11-FS-ASYNC.JS

// ?? ************ HTTP **************

// ! const http = require('http');
// console.log(http);

/* In the below statement, we are using method "createServer" to initiate a server request, and then saving it in variable "server". The 'createServer' would take a callback function which'll always 2 parameters which'll always be objects, mostly named as req for 'request' and res for "response" */
//? The first parameter 'req' (which'll be an object in itself) always represents the INCOMING request. This object 'req' would have captured the info like the method used by the user, and other imp info that would be stored in this object

//? The second parameter (which will also be an object) would be the response we'll send through the server

// ! const server = http.createServer((req, res) => {
/*  
    // console.log(req);
    */
// ! if (req.url === '/') {
/* 3 */
//! res.write('Welcome to our Home page'); /* 1 */
// !res.end(); /* 2 */
// !} else if (req.url === '/about') {
// !res.write('This is ABOUT PAGE');
//! res.end();
// !} else {
//! res.write(
//! `<h1>Oops</h1>
//! <p>We cant seem to find the page that you are looking up</p>
// !<a href = "/">back home</a>`
// !);
// !res.end();
// !}
// !});
// console.log(server);
// server.listen(): helps you set the listeining port at 5000 or any other number
// !server.listen(5000, () => {
// ! console.log('The Server is on and Running');
// ! });

/*
1.  res.write(): to write a 'response' whill be send to the user 

2.  res.end(): To conslude the request after the response has been sent to the user. This signals that there would not be any more data to be written 

3. req.url: We are using simle if statements to define what happens depending upon the url we would recieve from the user,, and accordingly we can determine our responses
if its home i.e. "/", then one kind of response and if its say "/about", then a different response.
If the user types anything else, then a page not found response with an anchor tag pointing to the home page "/"



? For MORE DETAILS, PLEASE REFER TO 12-http.JS
*/

/*

Q: NPM :

NPM is a node packet manager which is a huge repo of previously written codes by other devs, which we can reuse rather than scratching projects from scratch.
You can write your own code too and then share i with other devs.

Package  = modules = dependencies..all mean the same thing: previous written code by others

?? NOTE: There is no quality control.  A Good package generally would have a high weekly download count. Another thing is to look out for bugs and comments left by others. Sometimes the working solution is provided seperately and a link is mentioned in the NPM repo.




    Node packet manager: 

        Packages aka dependencies aka modules can be installed as GLOBALS or for LOCALs         i.e. for specific projects

        GLOBALs:    npm install -g <package Manager>
        LOCALs:     sudo npm install <package Manager> (sudo especially in case of Macs)

        NOTE: Local DEPENDENCY is what is most commonly used and is preffered option        most of the times over Global installation

? Q: What is package.json file?

        A: Its a manifest file ** (stores important info about project/package aka dependencies). This file stores the dependencies info in the jSON format and its execution creates the node_modules folder which actually consists the dependencies aka packages aka modules folders.

There are 2 ways in which package.json can be created:
Manual approach: manually create package.json in the root, then manually create properties etc

Quick approach: npm init (step by step, press enter to skip)
Quickes approach: npm init -y (everything default)

        IMPORTANT NOTE:

        Do not upload node_modules as they are usually heavy files
        
        Instead :
        CREATE a '.gitignore' file and write "/node_module" in it and it'll be ignored by git while everything else gets uploaded; Then once its there on github, whil;e cloning the same code, one can run npm install to download all dependencies locally on the respective machine/s

? THIS IS HOW WE SHARE CODES WHILE AVOIDING HEAVY WEIGHTED UPLOADS AND DOWNLOADS

        WHile downloading Dependencies, they can be downloaded either as simply locally i.e. npm -i nodemon 
        or
        globally i.e. npm i -g nodemon
        or 
        just locally but just for the dev (development) environment: i.e. 
        npm i nodemon -D
        what other packages can/ should be added to Dev dependencies: testing packages like: Linting, formatting etc. We use Dev dependencies while creating the app but while in production, we only would like to use the dependencies which are actually required to be used in app functioning


        package.json:

        scripts section: You can setup your own scripts:
        "start":"node app.js"     npm start would execute node app.js
        "dev":"nodemon app.js"    need to do npm run dev to run "nodemon app.js"

?? Q: How to uninstall a package?
A:  npm uninstall <packageName>


Q:  what is the use of package-lock.json?
A:  package-lock.json constitutes of project dependencies and the dependencies that these module are dependent upon. e.g. bootstrap has a further dependency on jQuery. This package-lock.json would include the version info for all the direct dependencies and the children dependencies.

??Q:  How to interpret the version numbers in general: e.g. "4.17.20"

A: version ref number is a kind of contract between the devs and the users of those versions.
4 stands for a major change
17: stands for a minor change and promises backward compatability i.e. say if it changes from 17 to 18, then no opne should expect any breaking changes 
20: captures the precise patch that has been changed 


Upcoming TOPICS:

**  EVENT LOOP; ASYNC PATTERNS; EVENTS EMITTER; STREAMS
**  MAIN CONCEPTS
**  PRE-BUILT CODE

*/

/*
? Event loops in Node:
Q: What is Event Loop?
        The Event loop is what allows Node.js to perform - Non blocking I/O (input/output) operations - despite the fact that JavaScript is single threaded - By OFFLOADING operations to the system kernel whenever possible.
        Since most modern kernels are multi threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the 'poll' queue to eventually be executed. 


        VERY IMPORTANT LINK FOR UNDERSTANDING:

        https://nodejs.dev/learn/the-nodejs-event-loop

todo:   The MESSAGE QUEUE   Vs the JOB QUEUE:

?? The MESSAGE QUEUE

When setTimeOut() is called, the 'Browser' or 'Node.js' starts the timer. Once the timer expires, the callback function is put back in the "message queue"
        
The Message queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the ooportubity to react to them. Or also DOM events like onLoad.

Todo: 'The "event loop" gives prioority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick things in the message queue'

Thus, through this nature of event loops, we dont need to wait for functions like setTimeOut(), fetch or ither things to do thier own work, because they are provided by the broser and they live on thier own threads. 
For e.g., if you set setTimeOut() tiemout period for 2 saeconds, You dont have to wait 2 seconds = the wait happens elsewhere.



?? ES6 JOB QUEUE:

ES6 introduced the concept pof the JOB QUEUE, which is used by PROMISES. Its a way to execute the result of an ASYNC function as soon as possible, rather thn being put at the end of the call stack.

PROMISES that resolve before the current function ends will be executed right after the current function. It will not be waiting as the last item on the call stack (like the message queue does)

An easy analogy:

Roller coaster ride at an amusement park:

The 'MESSAGE QUEUE' puts you at the back of the queue, behind all the other people, where you'll have to wait for your turn, while the 'JOB QUEUE' is the fast pass ticket that lets you take another ride after you've finished the previous one.


todo: THUS IN NODE, ASYNCHRONOUS FUNCTIONS WILL BE OFFLOADED FROM THE CALL STACK AND WOULD BE INVOKED ELSEWHERE. IT GETS ADDED BACK TO THE MESSAGE QUEUE (or 'JOB QUEUE' in case of 'Promises') ONLY AFTER THE RESPONSE HAS BEEN RECIEVED ( WETHER ERR OR RESOLUTION). This is the basec nature of NODE's Event loop





*/
