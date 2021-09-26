const num1 = 5;
const num2 = 9;

const addValues = () => {
	console.log(`The sum is ${num1}+${num2}`);
};

addValues();

// If we have a function inside the module that were invoking, this function will get auto execute once this module gets exported.

//! You dont specifically have to module.exports
