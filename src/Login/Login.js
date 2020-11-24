import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const mainScreen = (
      <div className="main">
        <p className="sign" align="center">
          LOGIN
        </p>
        <form className="form1">
          <input className="tb" type="text" align="center" placeholder="ID" />
          <input
            className="tb"
            type="text"
            align="center"
            placeholder="Email"
          />
          <input
            className="tb"
            type="password"
            align="center"
            placeholder="Password"
          />{" "}
          <Link className="submit " to="/home">
            Login
          </Link>
        </form>
      </div>
    );

    return <>{mainScreen}</>;
  }
}

export default Login;
