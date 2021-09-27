const afs = require('fs');

afs.readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	} else {
		const firstAsync = result;
		afs.readFile('./content/second.txt', 'utf-8', (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
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
						console.log(`Here are the result: ${firstAsync}; ${secondAsync}`);
					}
				}
			);
		});
	}
});
