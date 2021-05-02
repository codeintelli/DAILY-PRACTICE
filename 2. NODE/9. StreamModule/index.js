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
  const rstrem = fs.createReadStream("input.txt");
  //   we can create stream and the readable data will be stored in chunkdata
  rstrem.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  // here we are ending stream if all the data will be readable
  rstrem.on("end", () => {
    res.end();
  });

  //   here we creating if the file will not found
  rstrem.on("error", (err) => {
    console.log(err);
    res.end("file not found");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("your server is created successfully");
});
