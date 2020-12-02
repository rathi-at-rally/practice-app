import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
const loginURL = "http://127.0.0.1:9000/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      id: "",
      email: "",
      password: "",
      message: "",
    };
  }

  // Updating state variables on input change
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, message: "" });
  };

  // Validating User
  submitForm = (event) => {
    event.preventDefault();
    axios
      .get(
        loginURL +
          "/" +
          this.state.id +
          "/" +
          this.state.email +
          "/" +
          this.state.password
      )
      .then((response) => {
        if (response.data === true) this.props.history.push("/home");
        else this.setState({ message: "No such User exists" });
      });
  };

  render() {
    const mainScreen = (
      <div className="main">
        <p className="sign" align="center">
          LOGIN
        </p>
        <form className="form1">
          <input
            className="tb"
            type="text"
            align="center"
            placeholder="ID"
            name="id"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            className="tb"
            type="text"
            align="center"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            className="tb"
            type="password"
            align="center"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className="submit" onClick={this.submitForm}>
            Login
          </button>
        </form>
        <div className="validate">{this.state.message}</div>
      </div>
    );

    return <>{mainScreen}</>;
  }
}

export default Login;
