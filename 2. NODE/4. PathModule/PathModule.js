const path = require("path");

const paths = "F:/PRACTICE/17. NODE EXPRESSJS/BASIC/PathModule/PathModule.js";
console.log("Directory Name:- \t" + path.dirname(paths));
console.log("Base Name:- \t" + path.basename(paths));
console.log("Extension Name:- \t", path.extname(paths));
console.log("Normalize Path:- \t" + path.normalize(paths));
console.log("Delimeters:- \t" + path.delimiter);
console.log("IsAbsolute:- \t" + path.isAbsolute(paths));
console.log("path parse:- \t", path.parse(paths));
// path object

const obj = {
  dir: "F:\\PRACTICE\\17. NODE EXPRESSJS\\BASIC\\PathModule",
  base: "PathModule.js",
};
const pathobject = path.format(obj);
console.log("path object:- \t" + pathobject);
