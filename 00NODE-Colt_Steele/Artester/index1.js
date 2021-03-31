const figlet = require('figlet');
const colors = require('colors');

figlet('Hello World', (err, data) => {
  if (err) {
    console.log('Something Went Wrong...');
    console.dir(err);
  }
  console.log(data.rainbow);
});
