const { father, mother } = require('./4-names');
const { sayHi } = require('./5-sayHi');
const { items, singlePerson } = require('./5-alternativeExport_Flavors');
require('./7-mindGrenade.js');
// !    ref above; When we import a module which had a function, it gets auto invoked. The moment we do 'require', the function back there gets auto executed

// sayHi(family.father);
// sayHi(family.mother);
// sayHi(family.child);

// sayHi(father);
// sayHi(mother);
// sayHi(data.items[0]);
// sayHi(items[0]);

// sayHi(singlePerson.name);
