const fs = require("fs");
const http = require("http");
const chalk = require("chalk");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/api.json`, "utf-8");
  const orgdata = JSON.parse(data);

  if (req.url == "/" || req.url == "/home") {
    res.end("Welcome to Home Page");
  } else if (req.url == "/api") {
    res.writeHead(200, { "Content-type": "text/html" });
    // res.end(
    //   `<ul><li>${orgdata[0].name}<ol>
    //     <li>${orgdata[0].username}</li></ol></li> <li>${orgdata[1].name}</li><li> ${orgdata[2].name}</li><li> ${orgdata[3].name}</li><li> ${orgdata[4].name}</li><li> ${orgdata[5].name}</li><li> ${orgdata[6].name}</li><li> ${orgdata[7].name}</li><li> ${orgdata[8].name}</li><li> ${orgdata[9].name}</li>`
    // );
    //   res.end(orgdata[0].name,orgdata[1].name);
    res.end(orgdata[0].name);
  }
});

server.listen(9000, "127.0.0.1", () => {
  console.log(chalk.blue("your server is created successfully"));
});
