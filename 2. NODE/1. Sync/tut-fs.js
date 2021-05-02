const fs = require("fs");

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("\n\n Async Read by Default of file \n\n" + data.toString());
// });

// var data_new = fs.readFileSync("input.txt");
// console.log("\n\n data will be read using sync \n\n\n " + data_new.toString());
// console.log("program ended");

// fs.writeFileSync("file_name.txt", "write here you want to write on your file");
// fs.writeFileSync(
//   "file_name.txt",
//   "lets check the data will  update or insert into another line "
// );

// for appending data we can use append or edit

// fs.appendFileSync(
//   "file_name.txt",
//   "now lets check the fill will update or not"
// );
// fs.appendFileSync(
//   "file_name.txt",
//   "now lets check the fill will update or not"
// );
/* 
const buf_read = fs.readFileSync("file_name.txt");
console.log(buf_read);
// node js includes  an additional data type called buffer
// it is mailny used to stored binary data
// while reading from a file or a directory receiving packets over network.

console.log(buf_read.toString()); */

fs.renameSync("file_name.txt", "new_file_name.txt");
