import React from "react";
import ReactDOM from "react-dom";
// import Challange3 from "./Challange3";
import Calc from "./Calc";
import Imp from "./ImpExp";
import "./index.css";
import Netflix from "./Netflix";

import App from "./App";

// some importtant variables
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://google.com";

// ~tut:11: template literal in react
// const name = "shiva";
// const company = "itvmh";

// ReactDOM.render(
//   <>
//     <h1>{`my name is ${name} and i am working in ${company}`}</h1>
//   </>,
//   document.getElementById("root")
// );

// $$challange 2:- display current time and current date

// const curdate = new Date().toLocaleDateString();
// const curtime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1>{`challange 2`}</h1>
//     <p>{`Today Data is:- ${curdate}`}</p>
//     <p>{`And Current Time is:- ${curtime} `}</p>
//   </>,
//   document.getElementById("root")
// );

// ?  tut-13:- jsx attribute = html attribute with camel case
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://google.com";
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">Hello This Is Shiva</h1>
//     <img src={img1} alt="DEMO " />
//     <img src={img2} alt="DEMO " />
//     <a href={links} target="_itvmh">
//       <img src={img3} alt="DEMO " />
//     </a>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

* tutorial 14:- css styling and import styling in css

******************
*/

// ReactDOM.render(
//   <>
//     <h1 className="heading">Hello This Is Shiva</h1>
//     <div className="img-design">
//       <img src={img1} alt="DEMO " />
//       <img src={img2} alt="DEMO " />
//       <a href={links} target="_itvmh">
//         <img src={img3} alt="DEMO " />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );
/* 
******************

* tutorial 15:-using google font in css and class vs className

!cover in tut14

******************
*/

/* 
******************

* tutorial 16:-internal css and inline css in react

******************
*/

// const headingInline = {
//   textTransform: "uppercase",
//   fontWeight: "bold",
//   textAlign: "center",
//   fontSize: "2rem",
//   margin: "2rem",
//   color: "#e67e22",
//   fontFamily: `"Abhaya Libre", serif`,
// };
// ReactDOM.render(
//   <>
//     {/* ~internal css */}
//     <h1 style={headingInline}>Hello This Is Shiva</h1>
//     {/* inline css */}
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <img src={img1} alt="DEMO " />
//       <img src={img2} alt="DEMO " />
//       <a href={links} target="_itvmh">
//         <img src={img3} alt="DEMO " />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

* tutorial 17:-Mini project create simple greeting website

******************
*/

// let curtime = new Date().getHours();
// let greeting = "";
// console.log(curtime);
// const greetingColor = {};
// const Design = {
//   background: "#34495e",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   width: "100%",
// };
// const headingText = {
//   padding: "20px 20px",
//   background: "#2ecc71",
//   borderRadius: "20px",
//   color: "#bdc3c7",
// };
// if (curtime >= 1 && curtime < 12) {
//   greeting = "Good Morning";
//   greetingColor.color = "Green";
// } else if (curtime >= 12 && curtime < 20) {
//   greeting = "Good Afternoon";
//   greetingColor.color = "Orange";
// } else {
//   greeting = "Good Night";
//   greetingColor.color = "Yellow";
// }

// ReactDOM.render(
//   <>
//     <div style={Design}>
//       <h1 style={headingText}>
//         Hello Sir, <span style={greetingColor}> {greeting}</span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

* tutorial 18:-React Components 

******************
*/

// ReactDOM.render(
//   <>
//     <Heading />
//     <Para />
//     <List />
//     <List />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App />, document.getElementById("root"));

/* 
******************

* tutorial 19:-Rewrite our Project in React Components

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));
// ReactDOM.render(<Challange3 />, document.getElementById("root"));

/* 
******************

* tutorial 20:-ES6 Import Export Module in React

******************
*/

// ReactDOM.render(<Imp />, document.getElementById("root"));

/* 
******************

* tutorial 21:-Create Simple Calculator App in React

******************
*/

// ReactDOM.render(<Calc />, document.getElementById("root"));
/* 
******************

* tutorial 22:-Props In react Js(netflix app)

******************
*/

ReactDOM.render(<Netflix />, document.getElementById("root"));

/* 
******************

* tutorial 23:-Array In React Js 

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 24:-React Js Netflix App 

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 25:-React Js Developer Tools And Debugging And Error Handling

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 26:-If Else

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 27:- Conditional Statement

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 28:-Slot Machine Game

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 29:-Emojie In React
******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

* tutorial 30:-Array Destructing

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));
