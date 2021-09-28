const lodash = require('lodash');
console.log(lodash);

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);
console.log(lodash.sum(newItems));
