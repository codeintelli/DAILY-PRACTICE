const { add, sub, mul, div } = require("./operator");
// const oper = require("./operator");

console.log("Addition is:-" + add(32, 22));
console.log("Substraction is:-" + sub(32, 22));
console.log("Multiplication  is:-" + mul(32, 22));
console.log("Division is:-" + div(4, 2));

// we can use like this but this take more time and lengthy process
// console.log("Addition is:-" + oper.add(32, 22));
// console.log("Substraction is:-" + oper.sub(32, 22));
// console.log("Multiplication  is:-" + oper.mul(32, 22));
// console.log("Division is:-" + oper.div(4, 2));
