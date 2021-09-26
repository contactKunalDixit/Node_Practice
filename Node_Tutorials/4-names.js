//  CommonJS,   every file is module (by default)
//  Modules:    Encapsulated code (only share minimum)

// **************
// local accessible
const superPower = 'Fly';

// Share accessible
const father = 'Kunal';
const mother = 'Sonal';
const child = 'Amaira';

module.exports = { father, mother };
