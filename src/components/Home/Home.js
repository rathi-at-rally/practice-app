import React, { Component } from "react";
import "../Styles/Components.css";
import Navbar from "../Navbar/Navbar";
import Providers from "../Providers/Providers";
import ProviderCosts from "../ProviderCosts/ProviderCosts";
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
                component={Providers}
              />
              <Route
                exact
                path="/home/doctors/specific/:id"
                component={ProviderCosts}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
