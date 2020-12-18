import React, { Component } from "react";
import icon from "../../images/pcpIcon.svg";
import "../Styles/Components.css";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Constants from "../../utilities/Constants.js";

// DoctorGeneralInfo is a functional component which refers to each search result
const Provider = (props) => {
  const link = "/home/doctors/specific/" + props.id;
  return (
    <div className="row ProviderList">
      <div className="col-lg-9">
        <div className="media">
          <img className="mr-3" src={icon} alt="Generic placeholder " />
          <div className="media-body">
            <h1 className="mt-0">
              <Link to={link} className="showPCPdetails">
                {props.name}
              </Link>
              <span>{props.work}</span>
            </h1>
            <h6>
              {props.address1}
              <br />
              {props.address2}
              <br />
              {props.contact}
              <br />
              <a href="#">{props.vicinity}</a>
              <br />
              <a href="#">View Additional Locations (6)</a>
              <br />
              <a href="#">View Enrollment Information</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 rgtCol my-auto">
        <h6>
          <a href="#">Not Evaluated For Premium Care</a>
          <br />
          <a href="#">Accepting All Patients</a>
        </h6>
      </div>
      <div className="col-sm-12 botDetails">
        Office Visit - Primary Doctor - Established Patient - Moderate
        Complexity
      </div>
    </div>
  );
};

//DoctorsGeneralInfo corresponds to the list of search results
class Providers extends Component {
  state = {
    posts: [],
  };
  componentWillMount() {
    const searchparam = this.props.match.params.search;
    axios
      .get(
        Constants.LocalServerURL + Constants.ProviderAppend + "/" + searchparam
      )
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  componentDidUpdate() {
    const searchparam = this.props.match.params.search;
    axios
      .get(
        Constants.LocalServerURL + Constants.ProviderAppend + "/" + searchparam
      )
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  render() {
    return this.state.posts.map((post, index) => {
      return (
        <Provider
          key={index.toString + post.name}
          id={post.name}
          name={post.name}
          work={post.work}
          address1={post.address1}
          address2={post.address2}
          contact={post.contact}
          vicinity={post.vicinity}
        />
      );
    });
  }
}

export default Providers;
