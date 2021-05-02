import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";
import Links from "./Navbar";
import User from "./User";
import Search from "./Search";

const App = () => {
  const Error = () => {
    return (
      <>
        <Links />
        <h1>Oops! you have on wrong page</h1>
      </>
    );
  };
  const Name = () => {
    return (
      <>
        <Links />
        <h1> you have on Name page</h1>
      </>
    );
  };
  return (
    <>
      <Switch>
        {/* exact check the perfect page  */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact/Name" component={Name} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route path="/services" component={() => <Services name="Service" />} />
        <Route path="/about" render={() => <About name="About US" />} />
        {/* redirect to home page instead of error page */}
        <Redirect to="/" />
        {/* 404 error page */}
        {/* <Route component={Error} /> */}
      </Switch>
    </>
  );
};

export default App;
