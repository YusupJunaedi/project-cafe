import { combineReducers } from "redux";
import storeReducer from "./store";
import asyncAPIReducer from "./asyncApi";

const indexReducer = combineReducers({
  //key: value
  //key => pemanggilan
  //value => reducer
  // store: storeReducer,
  asyncAPI: asyncAPIReducer,
});

export default indexReducer;
