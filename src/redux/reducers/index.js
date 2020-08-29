import { combineReducers } from "redux";
import menuReducer from "./menu";
import cartReducer from "./cart";
import categoryReducer from "./category";
import authReducer from "./auth";

const indexReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  category: categoryReducer,
  auth: authReducer,
});

export default indexReducer;
