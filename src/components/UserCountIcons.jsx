import React, { Component } from "react";
import axios from "axios";

export default class UserCountIcons extends Component {
  constructor() {
    super();
    this.state = {
      userCount: [{ followers: "", following: "" }],
      starredNum: [{ stargazers_count: "" }],
      userName: [],
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08`).then((res) => {
      this.setState({ userCount: res.data });
    });
    axios.get(`https://api.github.com/users/akrit08/starred`).then((res) => {
      this.setState({ starredNum: res.data });
    });
  }

  render() {
    return (
      <div>
        <p className="menu-profile-text">
          <i className="fa fa-users"></i>
          {this.state.userCount.followers}&nbsp;.
          {this.state.userCount.following}&nbsp;
          <i className="fa fa-star"></i>
          {this.state.userName.public_repos}
        </p>
      </div>
    );
  }
}
