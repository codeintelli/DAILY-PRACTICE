import React from "react";
import ReactDOM from "react-dom";
import ReduxTodo from "./reduxTodo/App";
// import App from "./App";
// import store from "./store";
// [ + ]todo store
import store from "./reduxTodo/store";
import { Provider } from "react-redux";

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  // [ + ] BASIC REDUX
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>
  // [ + ] REDUX TODO APP
  <React.StrictMode>
    <Provider store={store}>
      <ReduxTodo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
