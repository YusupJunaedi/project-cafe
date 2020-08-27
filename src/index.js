import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./appRouter";
import { Provider } from "react-redux";
import storeRedux from './redux';


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
