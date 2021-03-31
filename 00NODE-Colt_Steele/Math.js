const add = function (x, y) {
  return x + y;
};

const PI = 3.1459;

const square = function (x) {
  return (x * x);
};

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// exports.add = add;
// exports.PI = PI;

// exports.square = square;

const Items = {
  add,
  PI,
  square,
};

module.exports = Items;
