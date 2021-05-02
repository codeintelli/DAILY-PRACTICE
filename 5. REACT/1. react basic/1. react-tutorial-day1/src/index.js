// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
// require("./index.css");
// ~tut1: folder structure
// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback");
// ~tut2:jsx  in react
// ReactDOM.render(
//   <h1>Jay Shree Ganesha, Har Har Mahadev</h1>,
//   document.getElementById("root")
// );
// var h1 = document.createElement("h1");
// h1.innerHTML = "Jay Shree Ganesha";
// document.getElementById("root").appendChild(h1);

// ~tut3:multiple jsx element

// ReactDOM.render(
//   <div>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </div>,
//   document.getElementById("root")
// );
// ?in react v16 its possible for render to return an array of the element but the main difference is that you have to add comma like we declare in array

// * const arr = ['shiva','mahadev','bholenath','sankar']
// ReactDOM.render(
//   [<h1>Har Har Mahadev</h1>, <p>Jay Shree Ganesha</p>],
//   document.getElementById("root")
// );

// ~tut4:- React Fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// $$in any condition you forgot to use fragment then you can also put blank the babel will by default take React.Fragment
// ReactDOM.render(
//   <>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </>,
//   document.getElementById("root")
// );

// $$challange 1:- add one h1 element in it 2:- add one p element in it 3:- add 5 fav name in it

// ReactDOM.render(
//   <>
//     <h1>Top 5</h1>
//     <p>Netflix Series</p>
//     <ol>
//       <li>TERMINATOR 1</li>
//       <li>TERMINATOR 2</li>
//       <li>TERMINATOR 3</li>
//       <li>TERMINATOR 4</li>
//       <li>TERMINATOR 5</li>

//     </ol>
//   </>,
//   document.getElementById("root")
// );

// $$JSX EXPRESSION

const name = "Netflix Series";
var i = 1;

ReactDOM.render(
  <>
    <h1>Top 5</h1>
    <p>{name}</p>
    <ol>
      <li>TERMINATOR {i}</li>
      <li>TERMINATOR {++i}</li>
      <li>TERMINATOR {i + 1} </li>
      <li>TERMINATOR {i + 2} </li>
      <li>TERMINATOR {i + 3} </li>
      <li>TERMINATOR {Math.random()} </li>
    </ol>
  </>,
  document.getElementById("root")
);
