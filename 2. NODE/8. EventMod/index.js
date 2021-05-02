const EventEmitter = require("events");

const events = new EventEmitter();
// // listining event
// events.on("sayhello", () => {
//   console.log("your name is shiva");
// });

// // creating event
// events.emit("sayhello");
// // here you can see this the event will arise first after that another function or method will be called
// console.log("shiva after event");

// // events.on("sayhello", () => {
// //   console.log("your name is shiva");
// // });

// // if we are calling any event after declaring or creating then it will not displayed output
// // the concept is quite simple emitter object emit named events that cause previously registered to be called.so an emitter object basically has two main features .
// // emitter nname events
// // registering and unregistered listener function

// 2nd task
// listining event
events.on("sayhello", () => {
  console.log("your name is shiva");
});
events.on("sayhello", () => {
  console.log("printing popup");
});
events.on("sayhello", () => {
  console.log("printing alert");
});

// creating event
events.emit("sayhello");

// 3rd example
// parameterized events
events.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

events.emit("checkPage", 200, "ok");
events.emit("checkPage", 404, "Error");
