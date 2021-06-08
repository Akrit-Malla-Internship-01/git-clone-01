import React, { Component } from "react";
import { FaBookOpen } from "react-icons/fa";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Repo from "./Repo";
import Projects from "./Projects";
import UserCount from "./UserCount";

export default class Body extends Component {
  projectHandler = () => {
    if (this.state.project === 0) {
      console.log("You don't have any projects yet.");
    }
    <button className="btn-newProject">New Project</button>;
  };

  handleSortChange = (event) => {
    this.setState({ sortOption: event.target.value }, () => {
      this.props.handleSortOption(event.target.value);
    });
  };

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="item1">
            <div className="title-profile-text">
              <FaBookOpen className="icon-bookopen" />
              Overview &nbsp;
              <BrowserRouter>
                <Link to={"/repo"} className="link-style">
                  <i className="fa fa-book"></i>
                  Repositories &nbsp;
                </Link>
                <Link to={"/projects"} className="link-style">
                  <i className="fa fa-tasks"></i>
                  Projects &nbsp;
                </Link>
                <i className="fa fa-cube"></i>
                Packages &nbsp;
                <input
                  type="text"
                  placeholder="Search.."
                  className="sort-button"
                ></input>
                <form action="" className="sort-button">
                  <label htmlFor="sort"></label>
                  <select
                    id="sort"
                    name="sort"
                    className="select"
                    // value={this.state.sortOption}
                    // onChange={this.handleSortChange}
                  >
                    <option value="type" default>
                      Type
                    </option>
                    <option value="all">All</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="sources">Sources</option>
                    <option value="forks">Forks</option>
                  </select>
                  <i className="fas fa-sort-amount-down-alt"></i>
                </form>
                <form action="" className="sort-button">
                  <label htmlFor="sort"></label>
                  <select
                    id="sort"
                    name="sort"
                    className="select"
                    // value={this.state.sortOption}
                    // onChange={this.handleSortChange}
                  >
                    <option value="language" default>
                      Language
                    </option>
                    <option value="all">All</option>
                  </select>
                  <i className="fas fa-sort-amount-down-alt"></i>
                </form>
                <form action="" className="sort-button ">
                  <label htmlFor="sort"></label>
                  <select
                    id="sort"
                    name="sort"
                    className="select"
                    // value={this.state.sortOption}
                    // onChange={this.handleSortChange}
                  >
                    <option value="sort" default>
                      Sort
                    </option>
                    <option value="lastUpdated">Last updated</option>
                    <option value="Stars">Stars</option>
                  </select>
                  <i className="fas fa-sort-amount-down-alt"></i>
                </form>
                <Switch>
                  <Route path={"/repo"} component={Repo} exact />
                  <Route path={"/projects"} component={Projects} exact />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </BrowserRouter>
            </div>
          </div>
          <div className="item2">
            <i className="fa fa-user-circle"></i>
            <br />
            <div>
              <UserCount />
            </div>
          </div>
          <div className="item3">
            <BrowserRouter></BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}
