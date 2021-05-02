const fs = require("fs");
const http = require("http");

const server = http.createServer();

// we are not streaming data we are simple using old way
// server.on("request", (req, res) => {
//   // use node-fs and click on menu
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });

server.on("request", (req, res) => {
  //   const rstrem = fs.createReadStream("input.txt");
  //   we can create stream and the readable data will be stored in chunkdata
  //   rstrem.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   // here we are ending stream if all the data will be readable
  //   rstrem.on("end", () => {
  //     res.end();
  //   });

  //   //   here we creating if the file will not found
  //   rstrem.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });
  //   in large project this type of data we are not using because it cant write data quickly so this is not used but pipe() can write as request are taken it can fetch value and give us

  //   if we are using res.end() then only res.end will be called and res.end means ending of file so the stream will automatically end so instread of using end we are using write command so both will be displayed.
  res.write("we are printing this line using pipe()\n");
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("your server is created successfully");
});
