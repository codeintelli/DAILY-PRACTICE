const fs = require("fs");

const mydata = {
  name: "shiva",
  age: 22,
  collage: "GMCA",
  Semester: 4,
  Skills: {
    json: true,
    node: true,
    php: false,
    react: true,
    angular: true,
    mysql: true,
    uiux: true,
  },
  job: false,
};
const jsonData = JSON.stringify(mydata);
// create a file and store data into that file
fs.writeFile("jsondata.txt", jsonData, (err, data) => {
  if (err) {
    console.error("your data is not inserted successfully");
  }
});

const jsondatafile = fs.readFile("jsondata.txt", "utf-8", (err, data) => {
  const orgdata = JSON.parse(data);
  console.log(orgdata);
});
