import React from "react";
// import bootstrap
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./project.css";

// import pages
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Footer from "./component/footer";

// import component like navbar header footer and all
import Navbar from "./component/Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
