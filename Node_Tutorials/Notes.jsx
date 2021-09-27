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

// ?? ************ HTTP **************
