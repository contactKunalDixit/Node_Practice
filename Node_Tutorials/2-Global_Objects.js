/*
__dirname   :   shows path to current directory
__filename  :   shows the file name
require     :   function in CommonJS to use modules

module      :   info about current module (file). remember, all files are considered to be modules in themselves

process     :   returns object containing info about environment where the program is being executed. This is very usefull in getting understanding of the systems like deployment platforms like Heroku and others 

*/

// console.log(__dirname);

// console.log(__filename);

// console.log(require);

// console.log(module);

// console.log(process.release);
// console.log(process.mainModule.path);

// Few other global functions that were available in Windowes object of browser are also available as part of Global objects like setInterval() etc

setInterval(() => {
	console.log('Hello World');
}, 1000);
