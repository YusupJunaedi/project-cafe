import React, { Fragment } from "react";
import "../Assets/css/loginPage.css";

import { connect } from "react-redux";
import { authLoginCreator } from "../redux/actions/action";

class Login extends React.Component {
  state = {
    username: null,
    password: null,
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <h5 className="mt-4">User Login</h5>
            </div>

            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="username"
              onChange={(event) => {
                this.setState({
                  username: event.target.value,
                });
              }}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(event) => {
                this.setState({
                  password: event.target.value,
                });
              }}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={() =>
                this.props.login(this.state.username, this.state.password)
              }
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name, password) => dispatch(authLoginCreator(name, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
