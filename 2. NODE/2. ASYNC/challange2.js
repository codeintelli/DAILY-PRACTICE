const fs = require("fs");

// 1. create folder thapa technical
// fs.mkdir("thapa_technical", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("challange 1 created");
// });
// // 2. create a file and add name of file is bio.txt and add data into it
// fs.writeFile(
//   "thapa_technical/bio.txt",
//   "here we are performing challange of thapa technical",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("challange sub 2 completed", +data);
//   }
// );

// // 3. write some more data into it and dont remove old data
// fs.appendFile(
//   "thapa_technical/bio.txt",
//   "here we are updating data and perform challange no 3",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// 4. read the data without getting buffered data

// fs.readFile("thapa_technical/bio.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log(buf_data.toString());

// 5. rename the file name that given into challange
// fs.rename("thapa_technical/bio.txt", "thapa_technical/mybio.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// 6. now delete the folder with file
fs.unlink("thapa_technical/mybio.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.rmdir("thapa_technical", (err) => {
  if (err) {
    console.log(err);
  }
});
