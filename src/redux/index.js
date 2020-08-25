import { combineReducers } from "redux";

import reducer from "./reducer";

const combined = combineReducers({
  reducer1: reducer,
});
export default combined;
