// ?? BUILT-In Module

const path = require('path');

// returns the specific 'seperator' being used
console.log(path.sep);

// path.join() : helps join the different paths into one. Dev can specify the exact path he needs, and path.join joins them together with a designated 'separator'.
// It simply returns a normalized version
// Adding additional '///' seperator would not make any deifference and it'll still return it "NORMALIZED"

const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

// If you'd like to access only the last portion or the end portion of the path, path.base()

const pathBase = path.basename(filePath);
console.log(pathBase);
console.log(path);

//  path.resolve : This Method resolves and returns an absolute path.
// The leftmost arg is '__dirname' whc=ich helps capture the current directory name where the current file that is being 'executed' resides
// The rest of the following args help you define the direction and the extent to which you'd want to define your absolute path.
// common usage is when you need to provide an absolute path in your applications: Since our applications would run in different systems and different filestructures, where if our applications would require to have access to some resources, they'll have to refer to these absolute file paths rather than relying on relative paths. e.g. file paths could be different in myComputer Vs Heroku etc. Hence, the need for Absolute paths

const absolutePath = path.resolve(
	__dirname,
	'content',
	'subfolder',
	'text.txt'
);
console.log(absolutePath);
