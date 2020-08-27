import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkLogin = () => {
  return true;
};

const PrivateRoute = ({ children, isLogin, ...rest }) => {
  return checkLogin() ? (
    <Route path="/private" exact render={() => children} />
  ) : (
    <Redirect to="/history" />
  );
};

export default PrivateRoute;
