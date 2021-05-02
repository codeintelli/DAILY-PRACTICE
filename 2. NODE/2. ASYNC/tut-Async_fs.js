const fs = require("fs");

// in Async func we can must include callback function
/* we pass a function as an argument a callback function that gets called when that task completes. the callback has an argument that tells you wheather the operation is complete or not. 
now we can say what to do when fs.writeFile has complete(Even if its nothing) and start checking for error */

fs.writeFile("Aync.txt", "hello we are learning async in javascript", (err) => {
  console.log("file created successfully");
});
