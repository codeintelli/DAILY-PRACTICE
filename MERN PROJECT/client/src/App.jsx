import React, { createContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout.jsx";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error";
// import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { initialState, reducer } from "./reducer/reducer";

// 1:create context
export const UserContext = createContext();

const Menu = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} />

        <Route component={Error} />
      </Switch>
    </>
  );
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Menu />
      </UserContext.Provider>
    </>
  );
};

export default App;
