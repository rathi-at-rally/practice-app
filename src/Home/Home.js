import React, { Component } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import DoctorsGeneralInfo from "./Doctor/DoctorsGeneralInfo";
import DoctorWorkInfo from "./Doctor/DoctorWorkInfo";
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container ">
          <div className="searchContainer">
            <Switch>
              <Route
                exact
                path="/home/doctors/all/general"
                component={DoctorsGeneralInfo}
              />
              <Route
                exact
                path="/home/doctors/specific/:id"
                component={DoctorWorkInfo}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
