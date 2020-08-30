import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, isLogin, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return auth.isLogin ? (
    <Route path="/" exact render={() => children} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
