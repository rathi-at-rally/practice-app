import React, { Component } from "react";
import icon from "../../images/pcpIcon.svg";
import "../Styles/Components.css";
import axios from "axios";
import * as Constants from "../../utilities/Constants.js";

const Top = (props) => {
  return (
    <li className="nav-item">
      <div className="row ProviderDetails">
        <div className="col-lg-9">
          <div className="media">
            <img className="mr-3" src={icon} alt="Generic placeholder" />
            <div className="media-body">
              <h1 className="mt-0">
                {props.name}
                <span>{props.work}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Tab = (props) => {
  return (
    <a
      className="nav-link inactiveLink"
      id="overview-tab"
      data-toggle="tab"
      href="#overview"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
    >
      {props.title}
    </a>
  );
};

const SubHeading = () => {
  return (
    <div className="row titleHeading">
      <div className="col-sm-4">Services</div>
      <div className="col-sm-2">Cost Near 55442</div>
      <div className="col-sm-2">Estimated Total Cost </div>
      <div className="col-sm-2">Insurance Pays </div>
      <div className="col-sm-2">Estimated Out-of-Pocket Cost</div>
    </div>
  );
};

const ProviderCost = (props) => {
  return (
    <div className="row costDetails">
      <div className="col-sm-4">{props.services}</div>
      <div className="col-sm-2">{props.costNear}</div>
      <div className="col-sm-2">{props.estimatedTotalCost} </div>
      <div className="col-sm-2">{props.insurancePays}</div>
      <div className="col-sm-2">{props.estimatedOutOfPocketCost}</div>
    </div>
  );
};

class ProviderCosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postServices: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        Constants.LocalServerURL +
          Constants.ProviderCostAppend +
          "/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          posts: response.data,
          postServices: response.data.servicesAndCosts,
        });
      });
  }

  render() {
    return (
      <div className="providerContainer">
        <Top name={this.state.posts.name} work={this.state.posts.work} />
        <div className="row">
          <div className="col-sm-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <Tab title="OVERVIEW" />
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="services-tab"
                  data-toggle="tab"
                  href="#servicesCost"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  SERVICES & COSTS
                </a>
              </li>
              <Tab title="LOCATIONS" />
              <Tab title="PATIENT REVIEWS" />
              <Tab title="ENROLLMENT INFORMATION" />
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="servicesCost"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <SubHeading />
                {this.state.postServices.map((post, index) => {
                  return (
                    <ProviderCost
                      key={index}
                      services={post.services}
                      costNear={post.costNear}
                      estimatedTotalCost={post.estimatedTotalCost}
                      insurancePays={post.insurancePays}
                      estimatedOutOfPocketCost={post.estimatedOutOfPocketCost}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProviderCosts;
