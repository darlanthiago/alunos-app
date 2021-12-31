import { combineReducers } from "redux";
import { example } from "./example/reducer";
import { auth } from "./auth/reducer";

export default combineReducers({
  example,
  auth,
});
