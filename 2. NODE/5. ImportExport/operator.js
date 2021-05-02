const add = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};

const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  if (a < b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  return a / b;
};

// we can use like this but this take more time and lengthy process
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;

module.exports = { add, sub, mul, div };
