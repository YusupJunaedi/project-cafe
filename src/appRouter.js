import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Login from "./Pages/Login";
// import PrivateRoute from "./Components/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      {/* <PrivateRoute isLogin={true}>
        <Home />
      </PrivateRoute> */}
      <Route path="/" exact component={Home} />
      <Route path="/history" component={History} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default AppRouter;
