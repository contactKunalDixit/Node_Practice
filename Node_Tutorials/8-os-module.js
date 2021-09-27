// ?? BUILT-In Module

const osObj = require('os'); /* returns 'os' object and stores it in 'osObj' */

//info about the current user
console.log(osObj.userInfo());

// method returns the system uptime in seconds
console.log(`The system has been up for ${osObj.uptime()} seconds`);

// method returns the system free memory
console.log(osObj.freemem());

// method returns the system total memory
console.log(osObj.totalmem());

// method returns the localhostname as a string
console.log(osObj.hostname());

// method returns the local host's operating platform
console.log(osObj.platform());

// !    Another way of compiling similar info is to make an object of it and then console logging it

const currentOS = {
	name: osObj.platform(),
	release: osObj.release(),
	totalMem: osObj.totalmem(),
	freeMem: osObj.freemem(),
};

console.log(currentOS);
