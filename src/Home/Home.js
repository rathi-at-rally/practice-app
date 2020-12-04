import React, { Component } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import DoctorsGeneralInfo from "./Doctor/DoctorsGeneralInfo";
import DoctorWorkInfo from "./Doctor/DoctorWorkInfo";
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container ">
          <div className="searchContainer">
            <Switch>
              <Route
                path="/home/doctors/general/:search"
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
