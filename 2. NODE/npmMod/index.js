// see package dependancy you can file chalk there
// and we can call that dependancy as a module npm module
// and package-lock will take more information of that installing dependancy or module and that we can install using npm will always act like a npm module
const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.red("Shiva"));
// console.log(chalk.red.underline.inverse("Shiva"));
// console.log(chalk.green.inverse("Shiva"));
// console.log(chalk.bgGreen("Shiva"));
const res = validator.isEmail("Shiva@Shiva.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
