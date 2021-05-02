import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";
import Links from "./Navbar";
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
        <Route exact path="/contact/Name" component={Name} />
        <Route path="/services" component={() => <Services name="Service" />} />
        <Route path="/about" render={() => <About name="About US" />} />
        {/* 404 error page */}
        <Route component={Error} />
      </Switch>
    </>
  );
};

/* 
$$when you yse component (instead of render or children,below) the router uses React.createElement to create a new React element from the given component.that means if you provide on inline function to componentporps you would create a new component every render this result in the existing component unmounting and the new component mounting instead of just updating the existing component when using on inline function for inline rendering function for inline rendering use the render


*/

export default App;
