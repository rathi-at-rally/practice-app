import React, { Component } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import SearchSpecific from "./SearchSpecific";
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
              <Route exact path="/home/results" component={SearchResults} />
              <Route
                exact
                path="/home/results/:id"
                component={SearchSpecific}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
