const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
  return temperature;
};
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Gujarat&appid=3d31fd8058b3d7d702f8d25b0512877d"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrdata);
        // array of an object
        // console.log(arrData[0].main.temp);
        // console.log("hii");
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        console.log(realTimeData);
        res.write(realTimeData);
      })
      .on("end", function (err) {
        if (err) return console.error("connection close due to error", err);
        res.end();
      });
  }
});
server.listen(9000, "127.0.0.1");
