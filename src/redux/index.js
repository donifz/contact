import { combineReducers } from "redux";

import reducer from "./reducer";
import favorite from "./favorite";

const combined = combineReducers({
  reducer1: reducer,
  favorite,
});
export default combined;
