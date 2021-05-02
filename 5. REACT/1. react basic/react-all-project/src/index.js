import React from "react";
import ReactDOM from "react-dom";
// import GoogleKeep from "./google keep/App";
import Bootstrap from "./bootstrap website/App";
import { BrowserRouter } from "react-router-dom";
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
// import Greeting from "./greeting website/App";
// import Scss from "./scss/App";
// import Todo from "./todoapp/App";

/* google keep project */

// ReactDOM.render(<GoogleKeep></GoogleKeep>, document.getElementById("root"));

/* bootstrap project */

ReactDOM.render(
  <>
    <BrowserRouter>
      <Bootstrap />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

/* Greeting Website */

// ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));

/* Scss */

// ReactDOM.render(<Scss></Scss>, document.getElementById("root"));

/* Todo App */

// ReactDOM.render(<Todo></Todo>, document.getElementById("root"));
