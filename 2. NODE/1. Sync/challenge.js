const fs = require("fs");

// 1. create folder thapa technical
// fs.mkdirSync("thapa_technical", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("challange 1 created");
// });
// // 2. create a file and add name of file is bio.txt and add data into it
// fs.writeFileSync(
//   "thapa_technical/bio.txt",
//   "here we are performing challange of thapa technical",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("challange 2 completed");
//   }
// );

// // 3. write some more data into it and dont remove old data
// fs.appendFileSync(
//   "thapa_technical/bio.txt",
//   "here we are updating data and perform challange no 3"
// );

// // 4. read the data without getting buffered data

// const buf_data = fs.readFileSync("thapa_technical/bio.txt");
// console.log(buf_data.toString());

// 5. rename the file name that given into challange
// fs.renameSync("thapa_technical/bio.txt", "thapa_technical/mybio.txt");

// // 6. now delete the folder with file
fs.unlinkSync("thapa_technical/mybio.txt");
fs.rmdirSync("thapa_technical");
