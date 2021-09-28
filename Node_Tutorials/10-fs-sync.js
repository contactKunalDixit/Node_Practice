// ?? BUILT-In Module

/*
??  When it comes to 'File System', we have 2 flavours:         
?? Asyncronously i.e. non Blocking  
?? Syncronously i.e. Blocking

?? In this module, we'll cover the generic concepts which is common to both the flavours and later on, we'll dive deep into understanding the differences and benefits of using one over the other
! As of this moment in the learning, treat them as merely different methods
*/

// For a start, We are focussing on just these methods and that too in the sync flavour:

const fs = require('fs');
/* Alternatively, You could use destructuring and just specify the relevant methods and props you require from the 'fs' module. In this case we obviously are storing the module in the object 'fs'  */
console.log(fs);

// Method READS the content of the file synchronously. The first arg is the address of vthe file. The second arg is majorly always the 'utf-8' character encoding.

console.log('1 - Process starts');

const first = fs.readFileSync('./content/first.txt', 'utf-8');
console.log(
	`2 - after reading the content from 1st file, store the result in variable "first"`
);

const second = fs.readFileSync('./content/second.txt', 'utf-8');
console.log(
	`3 - after reading the content from 2nd file, store the result in variable "second"`
);
console.log(first, '; ', second);

// Method to WRITE or CREATE a new file and write in it. The 1st arg is the path of the existing file or if the file wont be found, then it creates a new file like in this case. The second arg is the msg itself that need to go inside that file

//? The below overwrites the old text

fs.writeFileSync(
	'./content/result-sync.txt',
	`Here is the result:  ${first}, ${second}`
);

fs.writeFileSync('./content/first.txt', 'Hello World');
//? The above method does't add to the exiwsting content of the file, but the new text simply replaces the old content and overwrites it

//? The below APPENDS and gets added after the old text
//? You just need a third arg which is an object i.e.  {flag:'a'}

fs.writeFileSync(
	'./content/first.txt',
	'; This statement has been appended later ;',
	{ flag: 'a' }
);

console.log(`4 - Writes the content to the said file `);
console.log(`5 - The process CONCLUDES`);
