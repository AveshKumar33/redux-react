import changeTheColor from "./change.color";
import changeTheNumber from "./updown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  changeTheColor: changeTheColor,
});
export default rootReducer;
