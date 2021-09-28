const afs = require('fs');

// For Async file READING: The first arg is the address, the second arg is the character encoding and the third arg is the most imp arg i.e. - the 'callback' function that needs/ will be called back once the result comes as a success. In this case, if the functionality be able to read something from the file

console.log('1 - the process starts');

afs.readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(
			`2 - if successful, then store the result in variable "result"  `
		);
		const firstAsync = result;
		afs.readFile('./content/second.txt', 'utf-8', (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(
				`3 - if successful reading from second file, then AGAIN store the result in variable "result"  `
			);
			const secondAsync = result;
			afs.writeFile(
				'./content/result-async.txt',
				'This statement comes in from Async function',
				{ flag: 'a' },
				(err, result) => {
					if (err) {
						console.log(err);
						return;
					} else {
						console.log(
							`4 - Here are the result: ${firstAsync}; ${secondAsync}`
						);
					}
				}
			);
		});
	}
});

console.log('5 - The process concludes');
