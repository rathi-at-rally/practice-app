import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
