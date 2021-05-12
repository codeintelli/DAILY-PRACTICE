import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const rootData = combineReducers({
  todoReducer,
});
export default  rootData;
