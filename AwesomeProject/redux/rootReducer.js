import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"; // other reducers can be added

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
