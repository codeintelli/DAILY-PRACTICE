import changeNumber from "./updown";
import calNumber from "./muldiv";
import { combineReducers } from "redux";

const reducers = combineReducers({
  changeNumber,
  calNumber,
});
export default reducers;
