const bioData = {
  name: "shiva",
  age: "22",
  company: "ITVMH",
};
console.log(bioData.company);
console.log(bioData.name);
// object to string
const jsondata = JSON.stringify(bioData);
console.log(jsondata);
// {"name":"shiva","age":"22","company":"ITVMH"}

// string to json object
const jsondetails = JSON.parse(jsondata);
console.log(jsondetails);
// { name: 'shiva', age: '22', company: 'ITVMH' }
