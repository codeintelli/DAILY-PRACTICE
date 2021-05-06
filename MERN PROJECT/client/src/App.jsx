import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error";
// import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/signup" component={SignUp} />

        <Route path="/error404" component={Error} />
      </Switch>
    </>
  );
};

export default App;
