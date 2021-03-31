const franc = require('franc');
const langs = require('langs');

const Input = (process.argv);
const userInp = Input[2];
const langCode = franc(userInp);
console.log(langCode);
if (langCode === 'und') {
  console.log('PLEASE RECONSIDER TYPING YOUR STATEMENT AGAIN');
} else {
  const language = langs.where('3', langCode);
  console.log(language.name);
}
