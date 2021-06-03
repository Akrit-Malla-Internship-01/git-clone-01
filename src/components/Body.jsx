import React, { Component } from "react";
import { FaBookOpen } from "react-icons/fa";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Repo from "./Repo";
import Projects from "./Projects";
import NotFound from "./NotFound";
import UserCount from "./UserCount";

export default class Body extends Component {
  projectHandler = () => {
    if (this.state.project == 0) {
      console.log("You don't have any projects yet.");
    }
    <button className="btn-newProject">New Project</button>;
  };

  sortHandler = () => {};

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
                <button className="sort-button">Type</button>
                <button className="sort-button">Language</button>
                <button className="sort-button">Sort</button>
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
            <BrowserRouter>
              <Switch>
                <Route path={"/repo"} component={Repo} exact />
                <Route path={"/projects"} component={Projects} exact />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}
