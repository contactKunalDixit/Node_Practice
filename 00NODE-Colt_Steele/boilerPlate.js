const fs = require('fs');

console.log(fs);

fs.mkdir('DOG', { recursive: true }, (err) => {
  console.log('IN THE CALLBACK');
  if (err) throw err;
});
console.log('I COME AFTER THE CALLBACK');
