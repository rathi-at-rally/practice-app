import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Topmenu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
      <div className="container ">
        <Link className="navbar-brand title" to="/home">
          Rally Health India
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline mt-2 mt-md-0">
            <li className="dropdown profileCTA">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="about-us">
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
};

const Topheader = () => {
  return (
    <div className="container topHeader">
      <div className="row">
        <div className="col-lg-12">
          <h1>Who are you looking for?</h1>
        </div>
      </div>
    </div>
  );
};

const Jumbotron = () => {
  return (
    <div className="jumbotron feature">
      <div className="container showSearchContainer">
        <div className="row">
          <div className="col-lg-12">
            <form className="example">
              <input
                type="text"
                placeholder="Search for health care providers..."
                name="search"
              />
              <button className="searchBTN">
                Search!<i className="fa fa-search"></i>
              </button>
              <Link className="searchBTN" to="/home/doctors/all/general">
                Search<i className="fa fa-search"></i>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <Topmenu />
        <Topheader />
        <Jumbotron />
      </div>
    );
  }
}

export default Navbar;
