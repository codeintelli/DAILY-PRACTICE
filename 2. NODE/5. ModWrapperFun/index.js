// this is called wrapper function and this can be private members
// behind the scene how node works
// this will also called as IIFE (immediately invoked function expression)
// all the scope under () will be in private scope.

(function (exports, require, module, __filename, __dirname) {
  // we can require here

    let fs = require("fs");

  //   we only know that we are only writing only this code but the behind the node they can use function wrapper

  const name = "shiva";
  const id = 23;
  console.log(name, id);
  //   module.exports = { name, id };

  //   we can use export here
})();

// if you want to run this function use just simply used
