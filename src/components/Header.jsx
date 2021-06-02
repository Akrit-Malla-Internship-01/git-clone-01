import { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <div>
            <label htmlFor="searchOption" className="searchOption">
              <i className="fa fa-github"></i>
              <input type="text" />
            </label>
          </div>
          <div className="head-titles">
            <h4>Pull Request</h4>
            <h4>Issues</h4>
            <h4>Marketplace</h4>
            <h4>Explore</h4>
            <div className="icons">
              <i className="fa fa-bell"></i>
              <i className="fa fa-plus"></i>
              <i className="fa fa-user-circle"></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
