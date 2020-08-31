import { combineReducers } from "redux";
import menuReducer from "./menu";
import cartReducer from "./cart";
import categoryReducer from "./category";
import authReducer from "./auth";
import transaksiReducer from "./transaksi";

const indexReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  category: categoryReducer,
  auth: authReducer,
  transaksi: transaksiReducer,
});

export default indexReducer;
