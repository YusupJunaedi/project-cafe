import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./appRouter";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import rootReducer from "./redux/reducers/store";

const globalState = {
  nama: "yusup",
  totalOrder: 6,
  menus: [],
};

const rootReducer = (state = globalState, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      nama: "nendy",
    };
  }
  if (action.type === "CHANGE_MENUS") {
    return {
      ...state,
      menus: action.value,
    };
  }
  return state;
};

const storeRedux = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
