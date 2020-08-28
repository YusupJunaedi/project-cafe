import { combineReducers } from "redux";
import menuReducer from "./menu";
import cartReducer from "./cart";
import categoryReducer from "./category";

const indexReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  category: categoryReducer,
});

export default indexReducer;
