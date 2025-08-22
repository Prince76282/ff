import { combineReducers } from "@reduxjs/toolkit";
import profilereducer from "../../src/redux/slices/profileSlice";

const rootReducer = combineReducers({
  profile: profilereducer,
});
export default rootReducer;
